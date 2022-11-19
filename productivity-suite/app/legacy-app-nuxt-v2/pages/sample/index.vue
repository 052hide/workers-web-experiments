<template>
  <div :style="{
    padding: '100px',
    background: '#ffcccc'
  }">
    <p>サンプルページ</p>
    <HeadlessLink href='/login'>Login Link</HeadlessLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeadlessLink from '@/components/headless/HeadlessLink/index.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    HeadlessLink
  },
})
</script>
