<template>
  <div className="login-page">
    <p>Login Page</p>
    <HeadlessLink href='/sample'>Sample Link</HeadlessLink>
    <piercing-fragment-outlet fragment-id="login" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeadlessLink from '@/components/headless/HeadlessLink/index.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    HeadlessLink,
  }
})
</script>

<style scoped>
.login-page {
  padding: 4rem;
}
</style>
