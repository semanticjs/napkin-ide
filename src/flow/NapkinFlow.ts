import { NapkinEdge } from './NapkinEdge.js';
import { NapkinNode } from './NapkinNode.js';

/*
 * The main data model describing flow nodes, edges, and their relationships.
 */
export class NapkinFlow {
    //  Fields

    //  Properties
    public Edges?: NapkinEdge[];

    public ID?: string;

    public Nodes?: NapkinNode[];

    //  Constructors
    constructor() {}

    //  API Methods

    //  Helpers
}
