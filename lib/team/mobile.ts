import { Developer } from '../developer'

/**
 * The Director is only responsible for executing the building steps in a
 * particular sequence. It is helpful when producing products according to a
 * specific order or configuration. Strictly speaking, the Director class is
 * optional, since the client can control builders directly.
 */
export class MobileCoder {
  private developer: Developer;

  /**
   * The Director works with any builder instance that the client code passes
   * to it. This way, the client code may alter the final type of the newly
   * assembled product.
   */
  public setDeveloper(developer: Developer): void {
    this.developer = developer;
  }

  /**
   * The Director can construct several product variations using the same
   * building steps.
   */
  public buildMinimalViableProduct(): void {
    this.developer.producePartView1();
  }

  public buildFullFeaturedProduct(): void {
    this.developer.producePartView1();
    this.developer.producePartView2();
    this.developer.producePartView3();
  }
}