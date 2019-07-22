<template>
  <h1>Hello World Component</h1>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Vue } from "vue-property-decorator";

@Component
class HelloWorldComponent extends Vue {}

export default HelloWorldComponent;
</script>
