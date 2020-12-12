<template>
  <a :href="snsDatas[sns].url" class="flex inline-block py-1 text-white justify-center rounded" style="width:120px;" :class="buttonColor">
    <img class="w-4 mr-2" :src="snsDatas[sns].icon" />
    {{ snsDatas[sns].text }}
  </a>
</template>

/* # TODO SNSシェアリンクの作成 */

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

type Data = {
  snsDatas: {
    twitter: {
      url: string,
      text: string,
      icon: string,
    },
    facebook: {
      url: string,
      text: string,
      icon: string,
    },
    line: {
      url: string,
      text: string,
      icon: string,
    }
  }
}

type Methods = {
  sum: () => Promise<void>
}

type Computed = {
  buttonColor:  string
}

type Props = {
  sns: string
}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  props: {
    sns: {
      type: String,
      default: "twitter"
    },
  },
  data() {
    return {
      snsDatas: {
        twitter: {
          url: "aaa",
          text: "Twitter",
          icon: '/images/sns/twitter-brands.svg',
        },
        facebook: {
          url: "aaa",
          text: "FaceBook",
          icon: '/images/sns/facebook-brands.svg',
        },
        line: {
          url: "aaa",
          text: "Line",
          icon: '/images/sns/line-brands.svg',
        },
      }
    }
  },
  computed: {
    buttonColor() {
      return `c-button__${this.sns}`
    }
  },
}
export default Vue.extend(options)
</script>


<style scoped lang="scss">
.c-button {
  &__twitter {
    background-color: #3c94d8;
  }

  &__facebook {
    background-color:#3d5897;
  }

  &__line {
    background-color: #01c300;
  }

}
</style>
