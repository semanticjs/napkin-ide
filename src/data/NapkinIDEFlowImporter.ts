import { NapkinIDEFlow } from '../flow/NapkinIDEFlow';

export abstract class NapkinIDEFlowImporter<TData> {
  //  Fields

  //  Properties

  //  Constructors
  constructor() {}

  //  API Methods
  public abstract Import(data: TData): NapkinIDEFlow;

  //  Helpers
}
