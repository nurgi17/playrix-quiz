import { useRouter } from 'vue-router'
import { useGameStore } from '../model/store/game.store'
import { computed } from 'vue'
export function useQuestionInService() {
  const router = useRouter(),
    gameStore = useGameStore()

  const getQuestion = computed(() => {
    return gameStore.currentPoint?.questions
  })

  return {
    getQuestion
  }
}
