<template>
  <span class="text-center">
    <nuxt-link v-if="to" :class="buttonClass" :to="to"><slot /></nuxt-link>
    <a v-if="!to" href="#" :class="buttonClass" @click.prevent="click">
      <slot />
    </a>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

type Data = {
}

type Methods = {
}

type Computed = {
  buttonClass: string
}

type Props = {
  to: string
}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  props: {
    to: {
      type: String,
      default: null
    },
  },
  computed: {
    buttonClass() {
      return "inline-block mx-auto bg-blue-500 text-white py-2 w-32 text-center shadow rounded-md" 
    }
  },
}
export default Vue.extend(options)
</script>
