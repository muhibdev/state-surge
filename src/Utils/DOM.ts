// Dom Slector
interface ElementSelector {
  (query: string, parentElement?: ParentNode): HTMLElement | null;
}
export const Q = (
  query: string,
  parentElement = document
): HTMLElement | null => parentElement.querySelector(query);

export const QA = (
  query: string,
  parentElement: HTMLElement = document as any
): NodeList => parentElement.querySelectorAll(query);

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
export const returnElement = <T = HTMLElement | NodeList>(
  element: string | any,
  multiple = false
): T => {
  if (element instanceof HTMLElement) return element as T;
  const ele = multiple ? QA(element) : (Q(element) as T);
  if (typeof element === "string" && ele) return ele as T;
  else throw new Error("Element is not valid");
};

export const returnElementWithChild = (
  query: string | HTMLElement = "body"
): NodeList => {
  let list: NodeList;
  if (query instanceof HTMLElement) {
    list = QA("*", query);
  } else if (typeof query === "string") {
    list = QA(`${query},${query} *`);
  } else {
    throw new Error("Not Valid Selector");
  }

  return list;
};
