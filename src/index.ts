import SomeClass from './someModule'

// Access the static `world` parameter
const world = SomeClass.world

// Type alias for function accepting and returning `string`
// `input` is optional since we provide a default parameter
type someFunc = (input?: string) => string

// Function implements the `someFunc` type
const hello: someFunc = (word: string = world): string => {
  return `Hello, ${word}!`
}

// Interface specifies a contract to be satisfied by any implementation
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

// Function declares argument types inline
const delayWithInlineType = (callback: () => void, timeout: number) : NodeJS.Timeout => {
  return setTimeout(callback, timeout)
}

// Function asserts argument must satisfy the `SomeInterface` contract
const delayWithInterface = (input: SomeInterface) : NodeJS.Timeout => {
  const { callback, timeout } = input

  return setTimeout(callback, timeout)
}

console.log(hello())
// This will fail compilation
// console.log(hello({ name: 'Founders and Coders'}))

delayWithInlineType(() => console.log(hello('Moon')), 2000)
delayWithInterface({ callback: () => console.log(hello('Typescript')), timeout: 4000 })


