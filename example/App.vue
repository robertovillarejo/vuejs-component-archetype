<template>
  <div id="app">
    <hello-world></hello-world>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import HelloWorldComponent from "../src/index";

Vue.use(HelloWorldComponent, { prefix: "CONACYT dice:" });

export default Vue.extend({});
</script>
