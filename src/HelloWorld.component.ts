import Component from "vue-class-component";
import { Vue } from "vue-property-decorator";

export class Options {

    public prefix: string;

    constructor(
        prefix?: string
    ) {
        this.prefix = prefix || '';
    }

}

let defaultConfig = new Options();
export { defaultConfig };
@Component
export default class HelloWorldComponent extends Vue {
    public get options(): Options {
        return (<any>this).$HELLO_WORLD_DEFAULT_OPTIONS || defaultConfig;
    }
}