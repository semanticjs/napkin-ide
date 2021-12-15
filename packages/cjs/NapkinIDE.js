"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NapkinIDE = void 0;
function SJSElement(constructor) {
    return class extends constructor {
        //  API Methods
        Mount(selector) {
            if (typeof selector === "string") {
                selector = (document.querySelector(selector));
            }
            this.mountedEl = this.mountToElement(selector);
        }
        //  Helpers
        mountToElement(el) {
            if (super.mountToElement) {
                return super.mountToElement(el);
            }
            else {
                return el;
            }
        }
    };
}
let NapkinIDE = class NapkinIDE {
    //  Constructors
    constructor() {
        // this.Example = "Hello World";
    }
    //  API Methods
    ChangeExample(example) {
        // this.Example = example;
    }
    //  Helpers
    mountToElement(el) {
        /**
         * document.createDocumentFragment doesn't actully
         * attach to the DOM right away
         */
        const canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'canvas-test');
        const ul = document.createElement('ul');
        const fragment = document.createDocumentFragment();
        const browsers = [
            'Firefox',
            'Chrome',
            'Opera',
            'Safari',
            'Internet Explorer'
        ];
        browsers.forEach((browser) => {
            const li = document.createElement('li');
            li.textContent = browser;
            fragment.appendChild(li);
        });
        ul.appendChild(fragment);
        //setting up the canvas
        // el.appendChild
        // this.example = !this.example;
    }
};
NapkinIDE = __decorate([
    SJSElement,
    __metadata("design:paramtypes", [])
], NapkinIDE);
exports.NapkinIDE = NapkinIDE;
