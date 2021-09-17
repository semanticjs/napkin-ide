import { NapkinIDEFlow } from '../flow/NapkinIDEFlow';
import { NapkinIDEConfig } from './NapkinIDEConfig';
import { SJSElement, Status } from '@semanticjs/common';
import { NapkinIDENodeConfig } from './NapkinIDENodeConfig';

export class NapkinIDE extends SJSElement {
  //  Fields

  //  Properties
  public get Config(): NapkinIDEConfig {
    return this.config;
  }

  public Flow?: NapkinIDEFlow;

  public Status?: Status;

  //  Constructors
  constructor(protected config: NapkinIDEConfig) {
    super();
  }

  //  API Methods
  public ExportFlow(): Promise<NapkinIDEFlow> {
    return new Promise((resolve, reject) => {
      resolve(new NapkinIDEFlow());
    });
  }

  public GetNodeConfig(nodeType: string): NapkinIDENodeConfig {
    return <NapkinIDENodeConfig>(
      (this.Config?.NodeTypes ? this.Config.NodeTypes[nodeType] : null)
    );
  }

  public ImportFlow(flow: NapkinIDEFlow): Promise<void> {
    return new Promise((resolve, reject) => {
      //  TODO: Draw
      
      resolve();
    });
  }

  //  Helpers
  protected mountToElement(el: HTMLElement): HTMLElement {
    return el;
  }
}
