<template>
  <div>
    <div class="text-[36px] text-[#FFFFFF] font-bold text-center">
      {{ question.question }}
    </div>
    <div class="flex flex-col items-center gap-[30px] pt-[40px]">
      <div
        v-for="answer in question.answers"
        :key="answer.id"
        class="flex items-center justify-center text-center w-[1004px] h-[119px] text-[#000000] font-bold text-[40px] uppercase bg-[#F0F7E8] hover:bg-[#FFDE00] rounded-angels"
        @click="doAnswer(answer)"
      >
        {{ answer.answer }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { IQuestion } from '../entity/model/DTO/game.dto'
import { useAnswerQuestionService } from '../entity/service/answer.question.service'

defineProps({
  question: {
    type: Object as PropType<IQuestion>,
    default: () => {}
  }
})

const { answer: doAnswer } = useAnswerQuestionService()
</script>

<style scoped></style>
