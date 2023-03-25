export declare const Q: (query: string, parentElement?: Document) => HTMLElement | null;
export declare const QA: (query: string, parentElement?: Document) => NodeList;
interface ClassMethodForElement {
    (element: HTMLElement | null, method?: "add" | "remove" | "contains" | "toggle", className?: string): Boolean | void;
}
export declare const C: ClassMethodForElement;
interface ClassMethodForElements {
    (element: [] | NodeList | null, method?: "add" | "remove" | "contains" | "toggle", className?: string): Boolean | void;
}
export declare const CA: ClassMethodForElements;
interface FindeElement {
    (element: HTMLElement, query: string): HTMLElement | null;
}
export declare const F: FindeElement;
export declare const returnElement: <T = HTMLElement | NodeList>(element: string | any, multiple?: boolean) => T;
export {};
