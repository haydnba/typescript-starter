export default class {
  /**
   * A static property is available without initialising the class
   * in a concrete object with the `new` keyword
   *
   * https://www.typescriptlang.org/docs/handbook/classes.html#static-properties
   */
  static world = 'World'

  /**
   * A non-static property (public, private, protected) can only be accessed
   * in the instance of the class created with the `new` keyword
   *
   * https://www.typescriptlang.org/docs/handbook/classes.html#public-private-and-protected-modifiers
   */
  public universe = 'Universe'
}
