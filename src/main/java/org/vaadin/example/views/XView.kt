package org.vaadin.example.views

import com.vaadin.flow.component.AttachEvent
import com.vaadin.flow.component.ClientCallable
import com.vaadin.flow.component.Html
import com.vaadin.flow.component.Tag
import com.vaadin.flow.component.dependency.JsModule
import com.vaadin.flow.component.html.Div
import com.vaadin.flow.component.littemplate.LitTemplate
import com.vaadin.flow.component.template.Id
import com.vaadin.flow.router.Route


@Tag("x-view")
@JsModule("./views/x-view.ts")
@Route
class XView : LitTemplate() {

    @Id
    private lateinit var content: Div

    init {
    }

    @Suppress("unused")
    @ClientCallable
    fun onMsgEvent(msg: String) {
        System.err.format("onMsgEvent(25): [${msg}] : msg%n")
        element.executeJs("console.log('onMsgEvent(25): [${msg}] : msg')")

        content.add(Html(msg))

    }


    override fun onAttach(attachEvent: AttachEvent) {
        element.setProperty("srvProp1", "Hepp")
//        content.add(getButtonToggleDarkTheme().style("position: absolute; top: 4px; right: 10px; z-index: 1000; opacity: 0.5"))
//        content.add(DivIt(appVersion).style("position: fixed;bottom: 0;left: 0;color: #b2b2b2;padding-left: 3px;font-size: small"))

        content.add("123")
    }
}

                                                                                                                                                   