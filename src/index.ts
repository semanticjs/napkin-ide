
export * from './flow/NapkinIDEEdge'
export * from './flow/NapkinIDENode'
export * from './flow/NapkinIDEFlow'
export * from './ide/NapkinIDE'
export * from './ide/NapkinIDEConfig'

import { NapkinIDEConfig } from './ide/NapkinIDEConfig'
export const TestNapkinIDEConfig: NapkinIDEConfig = {
    NodeTypes: {
        'request': {
            AllowedOutputTypes: ['project'],
            ClassList: ['entry-node'],
            HTMLTemplateID: 'request-template',
            InputCountLimit: 0
        },
        'project': {
            AllowedInputTypes: ['request'],
            HTMLTemplateID: 'project-template'
        },
        'route-filter': {
            AllowedInputTypes: ['project'],
            AllowedOutputTypes: ['application'],
            HTMLTemplateID: 'route-template'
        },
        'application': {
            AllowedInputTypes: ['route-filter'],
            ClassList: ['exit-node'],
            HTMLTemplateID: 'application-template',
            OutputCountLimit: 0
        }
    }
}

import { NapkinIDEFlow } from './flow/NapkinIDEFlow'
export const TestNapkinIDEFlow: NapkinIDEFlow = {
    Nodes: [
        {
            ID: '1',
            Type: 'request',
            ClassList: ['persisted-class'],
            Data: {}
        },
        {
            ID: '2',
            Type: 'project',
            Data: {
                Name: 'IoT Ensemble',
                Host: 'www.iot-ensemble.com'
            }
        },
        {
            ID: '3',
            Type: 'route-filter',
            Data: {
                Path: '/'
            }
        },
        {
            ID: '4',
            Type: 'application',
            Data: {
                Package: '@iot-ensemble/public-web',
                Version: 'latest'
            }
        }
    ],
    Edges: [
        {
            ID: "1",
            NodeInID: "1",
            NodeOutID: "2"
        },
        {
            ID: "2",
            NodeInID: "2",
            NodeOutID: "3"
        },
        {
            ID: "3",
            NodeInID: "3",
            NodeOutID: "4"
        }
    ]
}
