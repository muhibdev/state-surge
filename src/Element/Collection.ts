// @ts-ignore
import { returnElement } from "../Utils/DOM.ts";
// @ts-ignore
import Element from "./index.ts";
// @ts-ignore
import { isObject, isChanged } from "../Utils/helper.ts";

class StateSurge {
  #state: Record<string, any> = {};

  #elements: Element[] = []; // Added type argument 'any' to SElement type
  #middlewares: ((
    state: Record<string, any>,
    newState: Record<string, any>
  ) => Record<string, any>)[] = [];
  #actions: Record<
    string,
    (state: Record<string, any>, ...args: any[]) => void
  > = {};

  use(
    middleware: (
      state: Record<string, any>,
      newState: Record<string, any>
    ) => Record<string, any>
  ): void {
    this.#middlewares.push(middleware);
  }

  #update = (newState: Record<string, any>): void => {
    let state = { ...this.#state, ...newState };
    for (const middleware of this.#middlewares) {
      state = middleware(this.#state, state);
    }
    if (!isChanged(this.#state, state)) return;
    for (const ele of this.#elements) {
      ele.render(state, this.#state);
    }
    this.#state = state;
  };

  constructor(queryOrElement: string | HTMLElement) {
    this.#elements = Array.from(
      returnElement<NodeList>(queryOrElement, true)
    ).map(
      (ele: HTMLElement) => new Element(ele) // Added type argument 'any' to SElement type
    );
  }

  getState(): Record<string, any> {
    return this.#state;
  }

  setState(newState: Record<string, any>): Record<string, any> {
    if (isObject(newState)) this.#update(newState);
    return this.#state;
  }

  destroy(): void {
    this.#state = {};
    this.#elements.length = 0;
    this.#update = () => {};
  }

  bindComputed(computed: Record<string, () => any>): void {
    for (const [name, fn] of Object.entries(computed)) {
      Object.defineProperty(this, name, {
        get: fn,
        enumerable: true,
      });
    }
  }

  bindActions(
    actions: Record<
      string,
      (state: Record<string, any>, ...args: any[]) => void
    >
  ): void {
    for (const [name, fn] of Object.entries(actions)) {
      (this as Record<string, any>)[name] = (...args: any) => {
        const newState = { ...this.#state };
        fn.call(this, newState, ...args);
        this.setState(newState);
      };
    }
  }
}

export default StateSurge;
