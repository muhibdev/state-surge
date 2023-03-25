import { variable } from "../Utils/helper";
import Node from "../Node/index";

interface INodeData {
  name: "attr" | "element";
  variables: string[];
  node: Node;
}

class SElement {
  #node: INodeData[] = [];

  constructor(element: HTMLElement) {
    this.#generateDynamicNodes(element);
  }
  #generateDynamicNodes = (element: HTMLElement) => {
    //  Select Dynamic attr Nodes
    element.getAttributeNames().forEach((attr: string) => {
      const attrValue = element.getAttribute(attr);
      const variables = variable(attrValue);

      if (!variables.length) return;
      this.#node.push({
        name: "attr",
        variables,
        node: new Node(element.getAttributeNode(attr)),
      });
    });

    //  Select Dynamic Text Nodes
    element.childNodes.forEach((textNode) => {
      if (!textNode.nodeValue) return;
      const variables = variable(textNode.nodeValue);

      if (!variables.length) return;
      this.#node.push({
        name: "element",
        variables,
        node: new Node(textNode),
      });
    });
  };

  public render(newState: Record<string, any>, prevState: Record<string, any>) {
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
      }, {} as Record<string, any>);

      node.update(values);
    });
  }
}

export default SElement;
