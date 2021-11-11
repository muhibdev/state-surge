// @ts-ignore
import { isChanged } from "../Utils/helper.ts";
// @ts-ignore
import { REGEX } from "../Configration.ts";

class StateFullNode {
  #node: Node | ChildNode | undefined;
  #value: string;
  #state: Object = {};

  constructor(node: Node | ChildNode | undefined) {
    this.#node = node;
    this.#value = node?.nodeValue || "";
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
    const newValue = this.#value.replace(REGEX, (_: any, key: String): any => {
      // @ts-ignore
      const value = newState[key] || "";
      return value;
    });

    if (newValue === this.#node.nodeValue) return;
    this.#node.nodeValue = newValue;
  }
}

export default StateFullNode;
