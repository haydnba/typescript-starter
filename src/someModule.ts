export default class {
  /**
   * A static property is available without initialising the class
   * in a concrete object with the `new` keyword
   */
  static world: string = 'World'

  /**
   * A non-static property (public, private, protected) can only be accessed
   * in the instance of the class created with the `new` keyword
   */
  public universe: string = 'Universe'
}
