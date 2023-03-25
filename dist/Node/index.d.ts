declare class SNode {
    #private;
    constructor(node: Node | ChildNode);
    update(newState: Record<string, unknown>): void;
}
export default SNode;
