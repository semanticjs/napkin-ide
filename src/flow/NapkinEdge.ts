
export class NapkinEdge {
  //  Fields
  protected example?: boolean;

  //  Properties
  public Example: string;

  //  Constructors
  constructor() {
    this.Example = "Hello World";
  }

  //  API Methods
  public ChangeExample(example: string): void {
    this.Example = example;
  }

  //  Helpers
  protected toggleExample() {
    this.example = !this.example;
  }
}
    