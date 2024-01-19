import {Button} from "@hilla/react-components/Button.js";
import {Notification} from "@hilla/react-components/Notification.js";
import {TextField} from "@hilla/react-components/TextField.js";
import {HelloEndpoint} from "Frontend/generated/endpoints.js";
import React, {useState} from "react";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout.js";
import {Link} from "react-router-dom";


export interface HillaViewProps {
    helloMsg: string;
}

export default function HillaView(props: HillaViewProps) {
    const [name, setName] = useState("");

    return (
            <>
                <VerticalLayout className={'p-xl'}>
                    <h3>Hilla View</h3>
                    <h3 style={{backgroundColor: "yellow"}}> {props.helloMsg}</h3>
                    <TextField
                            label="Your name"
                            onValueChanged={(e) => {
                                setName(e.detail.value);
                            }}
                    />
                    <Button
                            onClick={async () => {
                                const serverResponse = await HelloEndpoint.sayHello(name);
                                Notification.show(serverResponse);
                            }}
                    > Say hello </Button>

                    <a href={'/flow'}>Anchor to Flow</a>
                    <Link to="/flow">Link to Flow (react link does not work when called from X view)</Link>
                </VerticalLayout>
            </>
    );
}
