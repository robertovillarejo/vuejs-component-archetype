import { Vue } from "vue-property-decorator";
export declare class Options {
    prefix: string;
    constructor(prefix?: string);
}
declare let defaultConfig: Options;
export { defaultConfig };
export default class HelloWorldComponent extends Vue {
    get options(): Options;
}
