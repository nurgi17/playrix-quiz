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
    currentCategory = ref<ICategory>(),
    selectedQuestions = ref(new Set<number>()),
    counter = ref(0)

  const isGameWin = computed(() => {
    return correctAnswers.value === newGame.value!.winAnswer
  })

  function setNewGame() {
    if (counter.value > 4) {
      selectedQuestions.value.clear()
      counter.value = 0
    }
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
              const availableQuestions = point.questions.filter(
                (p) => !selectedQuestions.value.has(p.id)
              )
              const randomIndex = Math.floor(
                Math.random() *
                  (availableQuestions.length ? availableQuestions.length : point.questions.length)
              )
              const selectedQuestion = availableQuestions.length
                ? availableQuestions[randomIndex]
                : point.questions[randomIndex]
              selectedQuestions.value.add(selectedQuestion.id)

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
    counter.value++
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
