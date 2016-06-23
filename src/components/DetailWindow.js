import React from "react";

import Dialog from "material-ui/Dialog";
import {Tabs, Tab} from "material-ui/Tabs";
import FlatButton from "material-ui/FlatButton";

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
                modal={true}
                actions={actions}
                open={this.props.open}
            >
                <Tabs>
                    <Tab label="REQUEST">
                        <h2> Headers </h2>
                        <ul>
                            <li> blah blah blah </li>
                            <li> blah blah blah </li>
                            <li> blah blah blah </li>
                            <li> blah blah blah </li>
                        </ul>
                        <h2> Body </h2>
                    </Tab>
                    <Tab label="RESPONSE">
                        <h1> Headers </h1>
                        <ul>
                            <li> blah blah blah </li>
                            <li> blah blah blah </li>
                            <li> blah blah blah </li>
                            <li> blah blah blah </li>
                        </ul>
                        <h1> Body </h1>
                    </Tab>
                </Tabs>
            </Dialog>
        );
    }
}
