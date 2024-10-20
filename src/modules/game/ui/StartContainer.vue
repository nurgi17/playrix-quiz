<template>
  <div
    class="flex flex-col items-center w-[1080px] h-[1920px] max-w-[1080px] max-h-[1920px] bg-[url('/src/assets/img/first-back-green.svg')]"
  >
    <Transition name="bounce" appear>
      <PlayrixLogo />
    </Transition>
    <Transition name="bounce" appear>
      <div class="text-white text-[200px] uppercase font-bold pt-[58px]">quiz</div>
    </Transition>
    <Transition name="slide-fade" appear>
      <div class="pt-[58px]">
        <img src="../../../assets/img/rix.svg" alt="rix" />
      </div>
    </Transition>
    <Transition name="slide-fade" appear>
      <div>
        <Button class="pt-[168px]" @click="start" :text="'Начать'" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import PlayrixLogo from '../../../shared/ui/header/PlayrixLogo.vue'
import Button from '../../../shared/ui/button/Button.vue'

import { onMounted } from 'vue'
import { useStartService } from '../entity/service/start.service'
import { useGameService } from '../entity/service/game.service'

const { start } = useStartService(),
  { setNewGame } = useGameService()

onMounted(() => {
  setNewGame()
})
</script>
