// Dom Slector
interface ElementSelector {
  (query: string, parentElement?: ParentNode): HTMLElement | null;
}
export const Q: ElementSelector = (query, parentElement = document) =>
  parentElement?.querySelector?.(query);

interface ElementsSelector {
  (query: string, parentElement?: ParentNode): NodeList;
}
export const QA: ElementsSelector = (query, parentElement = document) =>
  parentElement?.querySelectorAll?.(query);

// Class List
interface ClassMethodForElement {
  (
    element: HTMLElement | null,
    method?: "add" | "remove" | "contains" | "toggle",
    className?: string
  ): Boolean | void;
}
export const C: ClassMethodForElement = (
  element = document.body,
  method = "toggle",
  className = "active"
) => element?.classList?.[method]?.(className);

interface ClassMethodForElements {
  (
    element: [] | NodeList | null,
    method?: "add" | "remove" | "contains" | "toggle",
    className?: string
  ): Boolean | void;
}
export const CA: ClassMethodForElements = (
  element = [],
  method = "toggle",
  className = "active"
) => element?.forEach?.((ele: any) => C(ele, method, className));

// // Find DOM Element

interface FindeElement {
  (element: HTMLElement, query: string): HTMLElement | null;
}

export const F: FindeElement = (element = document.body, query = "div") =>
  element?.closest?.(query);

/* Dom Helper Function */
export const returnElement = (
  element: string | any,
  multiple = false
): HTMLElement | any => {
  if (element instanceof HTMLElement) return element;
  const ele = multiple ? QA(element) : Q(element);
  if (typeof element === "string" && ele) return ele;
  else throw new Error("Element is not valid");
};
