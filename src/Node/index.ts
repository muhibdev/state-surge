import { isChanged } from "../Utils/helper.ts";

class StateFullNode {
  #node: Node | ChildNode | undefined;
  #parantNode: any;
  #value: string;
  #state: Object = {};

  constructor(node: Node | ChildNode | undefined, parantNode: any) {
    this.#node = node;
    this.#value = node?.nodeValue || "";
    this.#parantNode = parantNode;
    this.#rander(this.#state);
  }

  update(newState: Object) {
    const State = { ...this.#state, ...newState };

    if (!isChanged(this.#state, newState)) return;

    this.#rander(State);

    this.#state = State;
  }

  #rander(newState: Object) {
    if (!this.#node) return;
    // const nodeName = this.#node.nodeName;
    const newValue = this.#value.replace(
      /\{\{(.*?)\}\}/g,
      (_: any, key: String): any => {
        // @ts-ignore
        const value = newState[key] || "";
        /* Update */
        // if (this.#parantNode?.value && nodeName === 'value') this.#parantNode.value = value;
        // if (this.#parantNode?.checked && nodeName === 'checked') this.#parantNode.checked = value;
        return value;
      }
    );

    if (newValue === this.#node.nodeValue) return;
    this.#node.nodeValue = newValue;
  }
}

const createStateFullNode = (
  node: Node | ChildNode | undefined,
  parantNode?: any
): StateFullNode => {
  return new StateFullNode(node, parantNode);
};

export default createStateFullNode;
