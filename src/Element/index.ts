// @ts-ignore
import { variable, isChanged, isObject } from "../Utils/helper.ts";
// @ts-ignore
import Node from "../Node/index.ts";

interface INodeData {
  name: string;
  variables: string[];
  node: any;
}

class StateFullElement {
  #node: [INodeData] | any = [];

  constructor(Element: HTMLElement) {
    this.#genrateDynamicNodes(Element);
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
        node: new Node(element.getAttributeNode(attr)),
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
        node: new Node(textNode),
      });
    });
  };

  public rander(newState: Object, prevState: Object) {
    // @ts-ignore
    this.#node.forEach(({ node, variables }: INodeData) => {
      // @ts-ignore
      let includes: any = variables
        .map((variable: string) => (newState[variable] ? variable : undefined))
        .filter(Boolean);
      if (!includes.length) return;
      // @ts-ignore

      includes = includes
        // @ts-ignore
        .map((variable) =>
          newState[variable] !== prevState[variable] ? variable : undefined
        )
        .filter(Boolean);

      if (!includes.length) return;

      includes = includes.reduce((prev: Object, next: string) => {
        // @ts-ignore
        prev[next] = newState[next];
        return prev;
      }, {});

      node.update(includes);
    });
  }
}

export default StateFullElement;
