import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { ICategory, IGame, IPoint } from '../DTO/game.dto'
import categories from '../data/questions'

const STORE_ID = 'game'

export const useGameStore = defineStore(STORE_ID, () => {
  const newGame = ref<IGame>(),
    gamePoints = ref(0),
    correctAnswers = ref(0),
    currentPoint = ref<IPoint>(),
    currentCategory = ref<ICategory>()

  const isGameWin = computed(() => {
    return correctAnswers.value === newGame.value!.winAnswer
  })

  function setNewGame() {
    newGame.value = {
      id: 1,
      name: 'playrix quiz',
      winAnswer: 3,
      categories: categories.map((category) => {
        return {
          id: category.id,
          name: category.name,
          points: category.points
            .map((point) => {
              const randomQuestionIndex = Math.floor(Math.random() * point.questions.length)
              const selectedQuestion = point.questions[randomQuestionIndex]
              return {
                id: point.id,
                point: point.point,
                questions: [selectedQuestion],
                isAnswered: point.isAnswered
              }
            })
            .filter(Boolean)
        }
      })
    }
  }

  function setGamePoints() {
    gamePoints.value += currentPoint.value!.point
  }

  function countCorrectAnswers(num: number) {
    correctAnswers.value += num
  }

  function setCorrectAnswers(num: number) {
    correctAnswers.value = num
  }

  function setCurrentPoint(point: IPoint) {
    currentPoint.value = point
  }

  function setCurrentCategory(category: ICategory) {
    currentCategory.value = category
  }

  function setPointAnswered(categoryId: number, pointId: number) {
    const index1 = newGame.value!.categories.findIndex((category) => category.id === categoryId)
    const index2 = newGame.value!.categories[index1].points.findIndex(
      (point) => point.id === pointId
    )
    newGame.value!.categories[index1].points[index2].isAnswered = true
  }

  function setBaseValues() {
    correctAnswers.value = 0
    gamePoints.value = 0
  }

  return {
    newGame,
    setNewGame,
    gamePoints,
    setGamePoints,
    countCorrectAnswers,
    setCorrectAnswers,
    currentPoint,
    currentCategory,
    setCurrentPoint,
    setCurrentCategory,
    setPointAnswered,
    isGameWin,
    setBaseValues
  }
})
