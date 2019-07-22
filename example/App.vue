<template>
  <div id="app">
    <hello-world></hello-world>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import HelloWorldComponent from "../src/HelloWorldComponent.vue";

export default Vue.extend({
  components: { "hello-world": HelloWorldComponent }
});
</script>
