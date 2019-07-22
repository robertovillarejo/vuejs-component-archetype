import HelloWorldComponent from "./HelloWorldComponent.vue";

export default {
  install(Vue: any, options: any) {
    Vue.component('hello-world', HelloWorldComponent);
  }
}

export { HelloWorldComponent };