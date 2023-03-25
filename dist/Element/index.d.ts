declare class SElement {
    #private;
    constructor(element: HTMLElement);
    render(newState: Record<string, any>, prevState: Record<string, any>): void;
}
export default SElement;
