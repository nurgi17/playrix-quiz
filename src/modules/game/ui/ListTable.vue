<template>
  <div class="flex flex-col justify-center items-center">
    <div class="uppercase text-[64px] font-bold text-[#FFFFFF] text-center">
      Выберите категорию и стоимость вопроса
    </div>
    <div class="flex flex-col gap-5 pt-[40px]">
      <div class="flex flex-row gap-5" v-for="category in categories" :key="category.id">
        <div
          class="flex items-center justify-center text-center w-[392px] h-[118px] text-[#000000] font-bold text-[36px] uppercase bg-[#F0F7E8] rounded-angels"
        >
          {{ category.name }}
        </div>
        <div v-for="point in category.points" :key="point.id">
          <div
            class="flex items-center justify-center text-center w-[159px] h-[117px] text-[#000000] font-bold text-[40px] uppercase active:bg-[#FFDE00] rounded-[6px] cursor-pointer"
            :class="{ 'bg-[#FFDE00]': point.isAnswered, 'bg-[#F0F7E8]': !point.isAnswered }"
            :disable="point.isAnswered"
            @click="point.isAnswered ? '' : goToQuestion(category, point)"
          >
            {{ point.point }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ICategory } from '../entity/model/DTO/game.dto'
import type { PropType } from 'vue'
import { useListTableService } from '../entity/service/list.table.service'

defineProps({
  categories: {
    type: Array as PropType<ICategory[]>,
    default: () => []
  }
})

const { goToQuestion } = useListTableService()
</script>

<style scoped></style>
