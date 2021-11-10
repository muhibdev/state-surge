// @ts-ignore
import { returnElement } from "../../Utils/DOM.ts";
// @ts-ignore
import Element from "./Element.ts";
// @ts-ignore
import { destroy, isObject } from "../../Utils/helper.ts";

class ElementCollection {
  #elements: Element[] = [];

  constructor(elements: HTMLAllCollection[] | any) {
    this.#elements = Array.from(elements).map(Element);
  }

  state(newState): any {
    if (isObject(newState)) {
      this.#elements.forEach((Element) => Element.state(newState));
    }
    return this.#elements[0].state();
  }

  destory(): void {
    this.#elements.forEach((Element) => Element.destory());
    destroy(this);
  }
}

const createElementCollection = (
  QueryORElement: String | any
): ElementCollection => {
  return new ElementCollection(returnElement(QueryORElement, true));
};

export default createElementCollection;
