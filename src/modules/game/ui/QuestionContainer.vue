<template>
  <div
    class="flex flex-col items-center w-[1080px] h-[1920px] max-w-[1080px] max-h-[1920px] bg-[url('/src/assets/img/second-back-green.svg')]"
  >
    <Transition name="bounce" appear>
      <PlayrixLogo />
    </Transition>
    <Transition name="bottom-fade" appear>
      <div v-if="getQuestion" class="flex flex-col items-center mt-[279px]">
        <QuestionTimer :timer="getQuestion[0].timer" />
        <AnswerQuestion class="mt-[40px]" :question="getQuestion[0]" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useQuestionInService } from '../entity/service/question.in.service'

import PlayrixLogo from '../../../shared/ui/header/PlayrixLogo.vue'
import QuestionTimer from './QuestionTimer.vue'
import AnswerQuestion from './AnswerQuestion.vue'

const { getQuestion } = useQuestionInService()
</script>

<style scoped></style>
