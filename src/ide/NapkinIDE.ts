import { NapkinFlow } from '../flow/NapkinFlow';
import { SJSElement, Status } from '@semanticjs/common';

export class NapkinIDE extends SJSElement {
  //  Fields

  //  Properties
  public Flow?: NapkinFlow;

  public Status?: Status;

  //  Constructors
  constructor() {
    super();
  }

  //  API Methods

  //  Helpers
}
