import React from "react";

import Dialog from "material-ui/Dialog";
import {Tabs, Tab} from "material-ui/Tabs";
import FlatButton from "material-ui/FlatButton";
import MessageHeaders from "./MessageHeaders";

export default class DetailWindow extends React.Component {
    handleClose() {
        this.props.onClose();
    }

    render() {
        const msg_detail = this.props.message;
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />
        ];

        return (
            <Dialog
                modal={false}
                actions={actions}
                open={this.props.open}
                autoScrollBodyContent={true}
            >
                <Tabs>
                    <Tab label="REQUEST">
                        <h2> Headers </h2>
                        <MessageHeaders message={this.props.message.request}/>
                        <h2> Body </h2>
                    </Tab>
                    <Tab label="RESPONSE">
                        <h2> Headers </h2>
                        <MessageHeaders message={this.props.message.response}/>
                        <h2> Body </h2>
                    </Tab>
                </Tabs>
            </Dialog>
        );
    }
}
