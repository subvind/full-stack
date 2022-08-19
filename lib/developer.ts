import { Application } from './application'

/**
 * The Builder interface specifies methods for creating the different parts of
 * the Product objects.
 */
export interface Developer {
  producePartBackend(): void;
  producePartAPI1(): void;
  producePartAPI2(): void;
  producePartAPI3(): void;
  producePartFrontend(): void;
  producePartWebpage1(): void;
  producePartWebpage2(): void;
  producePartWebpage3(): void;
  producePartMobile(): void;
  producePartView1(): void;
  producePartView2(): void;
  producePartView3(): void;
}

/**
* The Concrete Builder classes follow the Builder interface and provide
* specific implementations of the building steps. Your program may have several
* variations of Builders, implemented differently.
*/
export class ConcreteDeveloper implements Developer {
  private application: Application;

  /**
   * A fresh builder instance should contain a blank product object, which is
   * used in further assembly.
   */
  constructor() {
    this.reset();
  }

  public reset(): void {
    this.application = new Application();
  }

  /**
   * All production steps work with the same product instance.
   */
  public producePartBackend(): void {
    this.producePartAPI1()
    this.producePartAPI2()
    this.producePartAPI3()
  }

  public producePartAPI1(): void {
    this.application.parts.push('PartAPI1');
  }

  public producePartAPI2(): void {
    this.application.parts.push('PartAPI2');
  }

  public producePartAPI3(): void {
    this.application.parts.push('PartAPI3');
  }

  public producePartFrontend(): void {
    this.producePartWebpage1()
    this.producePartWebpage2()
    this.producePartWebpage3()
  }

  public producePartWebpage1(): void {
    this.application.parts.push('PartWebpage1');
  }

  public producePartWebpage2(): void {
    this.application.parts.push('PartWebpage2');
  }

  public producePartWebpage3(): void {
    this.application.parts.push('PartWebpage3');
  }

  public producePartMobile(): void {
    this.producePartView1()
    this.producePartView2()
    this.producePartView3()
  }

  public producePartView1(): void {
    this.application.parts.push('PartView1');
  }

  public producePartView2(): void {
    this.application.parts.push('PartView2');
  }

  public producePartView3(): void {
    this.application.parts.push('PartView3');
  }

  /**
   * Concrete Builders are supposed to provide their own methods for
   * retrieving results. That's because various types of builders may create
   * entirely different products that don't follow the same interface.
   * Therefore, such methods cannot be declared in the base Builder interface
   * (at least in a statically typed programming language).
   *
   * Usually, after returning the end result to the client, a builder instance
   * is expected to be ready to start producing another product. That's why
   * it's a usual practice to call the reset method at the end of the
   * `getProduct` method body. However, this behavior is not mandatory, and
   * you can make your builders wait for an explicit reset call from the
   * client code before disposing of the previous result.
   */
  public getApplication(): Application {
    const result = this.application;
    this.reset();
    return result;
  }
}
