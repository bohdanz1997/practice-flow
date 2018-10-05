// @flow

type WorkType = 'slow' | 'middle' | 'hard'

type WorkProgress = {
  done: boolean,
  percent: number,
  workType: WorkType,
}

type Animal = {
  name: string,
  age: number,
  speak(): void,
  reportWorkProgress(workType: WorkType): WorkProgress,
}

const createAnimal = (name: string, age: number): Animal => ({
  name,
  age,
  speak() {
    console.log(name, 'speaking')
  },
  reportWorkProgress(workType) {
    return {
      done: false,
      percent: 20,
      workType,
    }
  },
})

const humanizeWorkProgress = (workProgress: WorkProgress) => {
  console.log(workProgress.done ? 'Work done' : 'Work does not done')
  console.log('with percent:', workProgress.percent)
  console.log('and work type:', workProgress.workType)
}

const animal = createAnimal('Bear', 10)
const workProgress = animal.reportWorkProgress('hard')

animal.speak()
humanizeWorkProgress(workProgress)

// functions

const addSome = (a: number, b: number): number => a + b
addSome(2, 4)

const sum = (...numbers: Array<number>): number => (
  numbers.reduce((acc, cur) => acc + cur, 0)
)

type doneCb = (error?: Error | null, value?: string | null) => void

const asyncTask = (done: doneCb) => {
  done(undefined, null)
}

// merged types
type UserT = {|
  id: number,
  name: string,
  createdAt: Date,
|}

type ProductT = {|
  id: number,
  slug: string,
  price: number,
|}

type UserProductT = {| ...UserT, ...ProductT |}

const user: UserProductT = {
  id: 123,
  name: 'Bob',
  createdAt: new Date(),
  slug: 'abs',
  price: 200,
}

// arrays

const numbersList: (?ProductT)[] = [
  { id: 1, slug: 'aaa', price: 200 },
  { id: 1, slug: 'aaa', price: 200 },
  null,
  undefined,
]

type SomeTuple = [number, boolean, string]
const tupleVar: SomeTuple = [12, true, 'abc']

// classes

class Human<T> {
  id: T;

  age: number = 0

  name: string = ''

  alive: boolean = true

  constructor(id: T, name: string, age: number) {
    this.id = id
    this.name = name
    this.age = age
  }
}

const bob: Human<number> = new Human(2, 'bob', 22)

// interfaces

interface Serializable {
  serialize(): string;
}

class Foo {
  serialize() { return '[Foo]' }
}

class Bar {
  serialize() { return '[Bar]' }
}

const foo: Serializable = new Foo() // Works!
const bar: Serializable = new Bar() // Works!

interface MyInterface {
  +propReadOnly: number, // required semicolon or comma
  -propWriteOnly: number,
  method(num: number): number
}
