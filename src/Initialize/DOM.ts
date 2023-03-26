import { ATTR_NAME_FOR_INITIALIZE } from "../Configration";
import SCollection from "../Element/SCollection";
import { QA } from "../Utils/DOM";

QA(`[${ATTR_NAME_FOR_INITIALIZE}]`).forEach((ele: HTMLElement) => {
  const attrValue = ele.getAttribute(ATTR_NAME_FOR_INITIALIZE);
  console.log(attrValue);

  window[attrValue] = new SCollection(ele);
});
