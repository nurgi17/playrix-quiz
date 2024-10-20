export interface IAnswer {
  id: number
  answer: string
  isCorrect: boolean
}

export interface IQuestion {
  id: number
  question: string
  answers: IAnswer[]
  timer: number // in seconds
}

export interface IPoint {
  id: number
  point: number
  questions: IQuestion[]
  isAnswered: boolean
}

export interface ICategory {
  id: number
  name: string
  points: IPoint[]
}

export interface IGame {
  id: number
  name: string
  winAnswer: number
  categories: ICategory[]
}

export interface ITimer {
  minutes: number
  seconds: number
}

export enum IResultType {
  Correct = 'correct',
  Incorrect = 'incorrect',
  Timeout = 'timeout'
}
