<template>
  <div>
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { registerPiercingFragmentOutlet } from "piercing-library";
import {  } from "shared";

registerPiercingFragmentOutlet();

export default Vue.extend({
  name: 'DefaultLayout',
})
</script>

<style>
body {
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #4d4d4d;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
  background: #fff;

  --primary-color: #0051c3;
  --primary-color-lightest: #aed0ff;
  --secondary-color: #120090;
  --secondary-color-lighter: #1900ce;
}
</style>
