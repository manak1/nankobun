<template>
  <div>
    <h1>Hello World</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

type Data = {
  test: string
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
> = {}
export default Vue.extend(options)
</script>
