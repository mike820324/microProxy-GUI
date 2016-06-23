import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import MsgList from "./MsgList";

export default class Main extends React.Component {
    render() {
        const store = this.props.store;
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="MicroProxy GUI v0.0.1"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                    <MsgList msgStore={store}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

Main.propTypes = {
    store: React.PropTypes.object
}
