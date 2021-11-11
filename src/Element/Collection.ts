// @ts-ignore
import { returnElement } from "../Utils/DOM.ts";
// @ts-ignore
import Element from "./index.ts";
// @ts-ignore
import { isObject, isChanged } from "../Utils/helper.ts";

const afterDestroy = () => {
  console.error("Element is destroyed already");
};

function StateFullElements(QueryORElement: String | any) {
  let _state: any = {};
  let events: any = {};

  let elements: any = Array.from(returnElement(QueryORElement, true));
  elements = elements.map((ele) => new Element(ele));

  const state = (newState: any) => {
    if (isObject(newState)) update(newState);
    return _state;
  };

  let update: any = (newState: Object) => {
    const State = { ..._state, ...newState };
    if (!isChanged(_state, newState)) return;

    elements.forEach((ele: Element) => ele.rander(newState, _state));

    events["update"]?.(State, _state);

    _state = State;
  };

  let on = (event: string, callback: Function) =>
    (events[event.toString().toLowerCase()] = callback);

  const destroy: any = () => {
    _state = undefined;
    elements = undefined;
    events = undefined;

    update = afterDestroy;
  };

  return {
    state,
    on,
    destroy,
  };
}

export default StateFullElements;
