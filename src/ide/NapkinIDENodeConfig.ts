export class NapkinIDENodeConfig {
  //  Fields

  //  Properties
  /**
   * The types of inputs allowed.  Null or empty for no limits.
   */
  public AllowedInputTypes?: Array<string>;

  /**
   * The types of outputs allowed.  Null or empty for no limits.
   */
  public AllowedOutputTypes?: Array<string>;

  /**
   * The classes that will be placed on the node every time.
   */
   public ClassList?: Array<string>;

  /**
   * The HTML template ID to use for rendering the node.
   */
   public HTMLTemplateID?: string;

  /**
   * The limit on input connections.  -1 for unlimited.
   */
  public InputCountLimit?: number;

  /**
   * The optional JSON schema for the Data property of a node.
   */
   public JSONSchema?: any;  // TODO:  Implement JSON Schema structure in semanticjs/common...  Exists in previous ref-arch, maybe already brought accross?

  //  public Layout?: 'simlane' | 'vertical-tree' | 'horizontal-tree';// | LayoutService;

  /**
   * The limit on output connections.  -1 for unlimited.
   */
  public OutputCountLimit?: number;

  //  Constructors
  constructor() {
    this.InputCountLimit = -1;
    
    this.OutputCountLimit = -1;
  }

  //  API Methods

  //  Helpers
}
    