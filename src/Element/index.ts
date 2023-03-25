// @ts-ignore
import { variable } from "../Utils/helper.ts";
// @ts-ignore
import Node from "../Node/index.ts";

interface INodeData<T extends Node> {
  name: "attr" | "element";
  variables: string[];
  node: T;
}

class SElement<T extends Node> {
  #node: INodeData<T>[] = [];

  constructor(element: HTMLElement) {
    this.#genrateDynamicNodes(element);
  }

  #genrateDynamicNodes = (element: HTMLElement | any) => {
    //  Select Dynamic attr Nodes
    element.getAttributeNames().forEach((attr: string) => {
      const attrValue = element.getAttribute(attr);
      const variables = variable(attrValue);

      if (!variables.length) return;
      this.#node.push({
        name: "attr",
        variables,
        node: new Node(element.getAttributeNode(attr)) as T,
      });
    });

    //  Select Dynamic Text Nodes
    element.childNodes.forEach((textNode: Node) => {
      if (!textNode.nodeValue) return;
      const variables = variable(textNode.nodeValue);

      if (!variables.length) return;
      this.#node.push({
        name: "element",
        variables,
        node: new Node(textNode) as T,
      });
    });
  };

  public render(newState: Object, prevState: Object) {
    this.#node.forEach(({ node, variables }) => {
      let includes: string[] = variables.filter((variable: string) =>
        newState.hasOwnProperty(variable)
      );
      if (!includes.length) return;

      includes = includes.filter(
        (variable) => newState[variable] !== prevState[variable]
      );
      if (!includes.length) return;

      const values = includes.reduce((prev, next) => {
        prev[next] = newState[next];
        return prev;
      }, {});

      node.update(values);
    });
  }
}

export default SElement;
