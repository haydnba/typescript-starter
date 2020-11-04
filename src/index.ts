import SomeClass from './someModule'

// Arrays are typed as show here
const someData: number[] = [1, 2, 3, 4, 5]

// Access the static `world` property
const world = SomeClass.world

// Type alias for function accepting and returning `string`
// `input` is optional since we provide a default parameter
type someFunc = (input?: string) => string

/**
 * Function implements the `someFunc` type
 *
 * @param word A word to print
 */
const hello: someFunc = (word: string = world): string => {
  return `Hello, ${word}!`
}

// Interface specifies a contract to be satisfied by some implementation
interface SomeInterface {
  /**
   * A callback function
   */
  callback: () => void

  /**
   * A timeout in milliseconds
   */
  timeout: 1000 | 2000 | 3000 | 4000
}

/**
 * Function declares argument types inline (Note: function's own type inferred)
 *
 * @param callback A callback function
 * @param timeout Timeout in ms
 * @returns `NodeJS.Timeout` (command click to see definitions)
 */
const delayWithInlineType = (callback: () => void, timeout: number) : NodeJS.Timeout => {
  return setTimeout(callback, timeout)
}

/**
 * Function asserts argument must satisfy the `SomeInterface` contract, returns
 * a promise just to see how the return typedef should look...
 *
 * @param input A `SomeInterface`
 * @return `Promise<NodeJS.Timeout>`
 */
const delayWithInterface = (input: SomeInterface) : Promise<NodeJS.Timeout> => {
  const { callback, timeout } = input

  return Promise.resolve(setTimeout(callback, timeout))
}

console.log(someData)

console.log(hello())
// This will fail compilation
// console.log(hello({ name: 'Founders and Coders'}))

delayWithInlineType(() => console.log(hello('Moon')), 1000)
delayWithInterface({ callback: () => console.log(hello('Typescript')), timeout: 2000 })


