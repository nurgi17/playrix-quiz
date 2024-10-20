import { useRoute, useRouter } from 'vue-router'
import { useGameStore } from '../model/store/game.store'
import { computed } from 'vue'
import { IResultType } from '../model/DTO/game.dto'

export function useResultService() {
  const router = useRouter(),
    route = useRoute(),
    gameStore = useGameStore()

  const text1 = computed(() => {
    switch (route.params.type) {
      case IResultType.Correct:
        return 'поздравляем!'
      case IResultType.Incorrect:
        return 'к сожалению,'
      case IResultType.Timeout:
        return 'увы!'
      default:
        return ''
    }
  })

  const text2 = computed(() => {
    switch (route.params.type) {
      case IResultType.Correct:
        return 'Правильный ответ!'
      case IResultType.Incorrect:
        return 'это неправильный ответ!'
      case IResultType.Timeout:
        return 'Вы не успели ответить вовремя!'
      default:
        return ''
    }
  })

  const btnText = computed(() => {
    switch (route.params.type) {
      case IResultType.Correct:
        return gameStore.isGameWin ? 'готово' : 'начать'
      case IResultType.Incorrect:
        return 'готово'
      case IResultType.Timeout:
        return 'готово'
      default:
        return ''
    }
  })

  const totalPoints = computed(() => {
    return gameStore.gamePoints
  })

  function next() {
    if (route.params.type === IResultType.Incorrect || route.params.type === IResultType.Timeout) {
      router.push({ name: 'start' })
      gameStore.setBaseValues()
    } else {
      router.push({ name: 'start' })
      gameStore.setBaseValues()
    }
  }
  return {
    totalPoints,
    text1,
    text2,
    btnText,
    next
  }
}
