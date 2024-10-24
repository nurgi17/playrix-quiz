import { useRoute, useRouter } from 'vue-router'
import { useGameStore } from '../model/store/game.store'
import type { IAnswer } from '../model/DTO/game.dto'
import { IResultType } from '../model/DTO/game.dto'

export function useAnswerQuestionService() {
  const gameStore = useGameStore(),
    router = useRouter(),
    route = useRoute()

  function answer(ans: IAnswer) {
    if (ans.isCorrect) {
      gameStore.countCorrectAnswers(1)
      gameStore.setPointAnswered(Number(route.params.categoryId), Number(route.params.pointId))
      gameStore.setGamePoints()
    }
    router.push({
      name: 'result',
      params: {
        type: ans.isCorrect ? IResultType.Correct : IResultType.Incorrect
      }
    })
  }
  function getImageUrl(image: string) {
    return new URL(image, import.meta.url).href
  }
  return {
    answer,
    getImageUrl
  }
}
