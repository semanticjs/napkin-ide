import { NapkinIDEFlow } from '..';

export abstract class NapkinIDEFlowImporter<TData> {
  //  Fields

  //  Properties

  //  Constructors
  constructor() {}

  //  API Methods
  public abstract Import(data: TData): NapkinIDEFlow;

  //  Helpers
}
