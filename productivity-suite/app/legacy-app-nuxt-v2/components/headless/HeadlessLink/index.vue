

<template>
  <a
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener' : undefined"
    @click="onClickLink"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
import { getBus } from "piercing-library";

export default Vue.extend({
  name: 'IndexPage',
  props: {
    href: {
      type: String,
      required: true
    },
    isExternal: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      required: false
    }
  },
  methods: {
    onClickLink(e: any) {
      e.preventDefault()
      getBus().dispatch("href", this.href);
    }
  }
})
</script>
