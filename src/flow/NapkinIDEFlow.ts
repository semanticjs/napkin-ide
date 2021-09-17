import { NapkinIDEEdge } from './NapkinIDEEdge.js';
import { NapkinIDENode } from './NapkinIDENode.js';

/*
 * The main data model describing flow nodes, edges, and their relationships.
 */
export class NapkinIDEFlow {
    //  Fields

    //  Properties
    public Edges?: NapkinIDEEdge[];

    public ID?: string;

    public Name?: string;

    public Nodes?: NapkinIDENode[];

    //  Constructors
    constructor() {}

    //  API Methods

    //  Helpers
}
