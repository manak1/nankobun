<template>
  <div class="pt-4">
    <h2 class="text-xl font-bold text-center">
      身長診断メーカー
    </h2>
    <!-- # TODO: ここの画像 リンゴで身長を図ってる画像にかえる -->
    <img class="h-20 mt-4 mx-auto text-center" src="@/assets/images/logo/human_logo.svg">
    <p class="text-sm mt-5 text-center">
      いろんな物であなたの身長をあらわすことが出来るサイトです。<br />
      サイト内の診断を試してみたり、面白い診断を作ってみてください！
    </p>
    <div class="text-center mt-6">
      <Button>診断してみる</Button>
    </div>
    <ul class="flex space-x-2 mt-12 justify-center">
      <li v-for="(sns,index) in snsList" :key="index">
        <ButtonSns :sns="sns" />
      </li>
    </ul>
    <Latest />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import Latest from "@/pages/-Latest.vue"

type Data = {
  snsList: string[]
}

type Methods = {
  sum: () => Promise<void>
}

type Computed = {}

type Props = {}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  data() {
    return {
      snsList: ['twitter','facebook','line']
    }
  },
  components: {
    Latest,
  },
}
export default Vue.extend(options)
</script>
