import { NapkinFlow } from './flow/NapkinFlow';
export declare class NapkinIDE {
    Flow?: NapkinFlow;
    constructor();
    ChangeExample(example: string): void;
    protected mountToElement(el: HTMLElement): void;
}
