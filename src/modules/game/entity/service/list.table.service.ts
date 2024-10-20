import { useRouter } from 'vue-router'
import { useGameStore } from '../model/store/game.store'
import type { ICategory, IPoint } from '../model/DTO/game.dto'

export function useListTableService() {
  const router = useRouter(),
    gameStore = useGameStore()

  function goToQuestion(category: ICategory, point: IPoint) {
    gameStore.setCurrentCategory(category)
    gameStore.setCurrentPoint(point)
    router.push({
      name: 'question',
      params: { categoryId: category.id, pointId: point.id }
    })
  }
  return {
    goToQuestion
  }
}
