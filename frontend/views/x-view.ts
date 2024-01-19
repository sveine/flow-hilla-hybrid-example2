import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import HillaView from "Frontend/views/hilla/HillaView";
import {createRoot} from "react-dom/client";
import {createElement} from "react";

// import HillaWrapper from './HillaWrapper';

@customElement('x-view')
export class XView extends LitElement {

    createRenderRoot() {
        return this;
    }

    srvYellow(message: string) {
        //@ts-ignore
        // noinspection JSUnresolvedReference
        this.$server.onMsgEvent(`<div style="padding: 4px;background: yellow">${message}</div>`);
    }


    @property()
    private srvProp1!: string;

    protected updated() {
        createRoot(document.getElementById("hillaViewId")!).render(createElement(HillaView,{"helloMsg":`Hello From Lit + ${this.srvProp1}`} ));
    }

    render() {
        return html`
            <div style="padding: 4px;background: #dcdcdc">
                <div id="hillaViewId"></div>

                <HillaView helloMsg="Cannot use react view this way"></HillaView>
            </div>

            <div>
                ${this.srvProp1}
                <div id="content"></div>
                <vaadin-button @click="${() => this.srvYellow('hepp')}">Click me</vaadin-button>
            </div>
        `;
    }
}
