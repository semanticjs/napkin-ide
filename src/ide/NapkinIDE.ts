import { NapkinFlow } from '../flow/NapkinFlow';
function SJSElement<T extends { new (...args: any[]): any }>(constructor: T) {
  return class extends constructor {
      //  Fields
      protected mountedEl?: HTMLElement;

      //  API Methods
      public Mount(selector: string | HTMLElement): void {
          if (typeof selector === "string") {
              selector = <HTMLElement>(
                  document.querySelector(<string>selector)
              );
          }

          this.mountedEl = this.mountToElement(<HTMLElement>selector);
      }

      //  Helpers
      protected mountToElement(el: HTMLElement): HTMLElement {
          if (super.mountToElement) {
              return super.mountToElement(el);
          } else {
              return el;
          }
      }
  };
}

@SJSElement
export class NapkinIDE {
  //  Fields

  //  Properties
  public Flow?: NapkinFlow;

  //  Constructors
  constructor() {
    // this.Example = "Hello World";
  }

  //  API Methods
  public ChangeExample(example: string): void {
    // this.Example = example;
  }

  //  Helpers
  protected mountToElement(el: HTMLElement) {
    // doesn't actually attach to the DOM right now
    document.createDocumentFragment

    //setting up the canvas
  
    // el.appendChild
    // this.example = !this.example;
  }
}
    