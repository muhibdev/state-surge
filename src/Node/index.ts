// @ts-ignore
import { isChanged } from "../Utils/helper.ts";
// @ts-ignore
import { REGEX } from "../Configration.ts";

class SNode {
  #node: Node | ChildNode;
  #value: string;
  #state: Record<string, unknown> = {};

  constructor(node: Node | ChildNode) {
    this.#node = node;
    this.#value = node?.textContent ?? "";
    this.#render(this.#state);
  }

  update(newState: Record<string, unknown>) {
    const State = { ...this.#state, ...newState };

    if (!isChanged(this.#state, newState)) return;

    this.#render(State);

    this.#state = State;
  }

  #render(state: Record<string, unknown>) {
    if (!this.#node) return;

    const newValue = this.#value.replace(REGEX, (_: any, key: String): any => {
      // @ts-ignore
      const value = state[key] ?? "";
      return value;
    });

    if (newValue === this.#node.nodeValue) return;
    this.#node.nodeValue = newValue;
  }
}

export default SNode;
