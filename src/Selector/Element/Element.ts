// @ts-ignore
import { returnElement, QA } from "../../Utils/DOM.ts";
// @ts-ignore
import { variable, isChanged, isObject, destroy } from "../../Utils/helper.ts";
// @ts-ignore
import createStateFullNode from "../../Node/index.ts";

class Element {
  #element: HTMLElement | undefined;

  #state: Object = {};
  #node: Object = {};

  constructor(Element: HTMLElement) {
    this.#element = Element;
    this.#node = getDynamicNode(this.#element);
  }

  /*  Public */
  public state(newState: Object | null | undefined) {
    if (isObject(newState)) this.#update(newState);
    return this.#state;
  }

  public destory(): void {
    destroy(this);
  }

  /* Private Methods */
  #update(newState: Object) {
    const State = { ...this.#state, ...newState };

    if (!isChanged(this.#state, newState)) return;

    this.#rander(newState);

    this.#state = State;

    return this;
  }

  #rander(State: Object) {
    // @ts-ignore
    this.#node.forEach(({ node, variables }: INodeData) => {
      // @ts-ignore
      let includes: any = variables
        .map((variable: string) => (State[variable] ? variable : undefined))
        .filter(Boolean);
      if (!includes.length) return;
      // @ts-ignore

      includes = includes
        // @ts-ignore
        .map((variable) =>
          State[variable] !== this.#state[variable] ? variable : undefined
        )
        .filter(Boolean);

      if (!includes.length) return;

      includes = includes.reduce((prev: Object, next: string) => {
        // @ts-ignore
        prev[next] = State[next];
        return prev;
      }, {});

      node.update(includes);
    });
  }
}

const createElement = (QueryORElement: String | any): Element => {
  return new Element(returnElement(QueryORElement));
};

export default createElement;

/*












*/
interface INodeData {
  name: string;
  variables: string[];
  node: any;
}

const getDynamicNode = (element: HTMLElement | any): INodeData[] => {
  const nodes: INodeData[] = [];

  //  Select Dynamic attr Nodes
  element.getAttributeNames().forEach((attr: string) => {
    const attrValue = element.getAttribute(attr);
    const variables = variable(attrValue);

    if (!variables.length) return;
    nodes.push({
      name: "attr",
      variables,
      node: createStateFullNode(element.getAttributeNode(attr)),
    });
  });

  //  Select Dynamic Text Nodes
  element.childNodes.forEach((textNode: Node) => {
    if (!textNode.nodeValue) return;
    const variables = variable(textNode.nodeValue);

    if (!variables.length) return;
    nodes.push({
      name: "element",
      variables,
      node: createStateFullNode(textNode),
    });
  });

  return nodes;
};
