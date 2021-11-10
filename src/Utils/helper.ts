const regex = /{{.+?}}/g;

export const extractVariables = (
  string: string | null | undefined
): string[] => {
  let variable = string?.match?.(regex);
  variable = Array.from(new Set(variable));
  return variable;
};

export const removBracket = (string: string): string =>
  string?.replace?.(/{/g, "")?.replace?.(/}/g, "");

export const variable = (string: string | null | undefined): string[] =>
  extractVariables(string).map(removBracket);

export const isChanged = (Obj1: Object, Obj2: Object): boolean =>
  JSON.stringify(Obj1) !== JSON.stringify(Obj2);

export const isObject = (obj: any): boolean =>
  obj !== null && obj && typeof obj === "object";

export function destroy(obj) {
  for (var prop in obj) {
    var property = obj[prop];
    if (property != null && typeof property == "object") {
      destroy(property);
    } else {
      delete obj[prop];
    }
  }
  obj.__proto__ = null;
}
