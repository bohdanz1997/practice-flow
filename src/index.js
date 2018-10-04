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

class Some {
  handleClick = () => {

  }
}

const addNums = (a: number, b :number): number => a + b

console.log(addNums(10, 5))
