declare class StateSurge {
    #private;
    use(middleware: (state: Record<string, any>, newState: Record<string, any>) => Record<string, any>): void;
    constructor(queryOrElement: string | HTMLElement);
    getState(): Record<string, any>;
    setState(newState: Record<string, any>): Record<string, any>;
    destroy(): void;
    bindComputed(computed: Record<string, () => any>): void;
    bindActions(actions: Record<string, (state: Record<string, any>, ...args: any[]) => void>): void;
}
export default StateSurge;
