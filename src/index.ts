import { defaultConfig } from './HelloWorld.component';
import HelloWorldComponent from "./HelloWorldComponent.vue";

export default {
  install(Vue: any, globalOptions: any) {
    const options = { ...defaultConfig, ...globalOptions };
    Vue.prototype.$HELLO_WORLD_DEFAULT_OPTIONS = options;
    Vue.component('hello-world', HelloWorldComponent);
  }
}

export { HelloWorldComponent };