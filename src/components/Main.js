import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import MsgList from "./MsgList";
import DetailWindow from "./DetailWindow";


export default class Main extends React.Component {
    state = {
        open: false,
        msg: null
    };

    handleOpen(msg) {
        this.setState({open: true, msg: msg});
    }

    handleClose(){
        this.setState({open: false});
    }

    render() {
        const store = this.props.store;
        let detailWindow;
        if (this.state.msg !== null) {
            detailWindow = <DetailWindow
                                message={this.state.msg}
                                open={this.state.open}
                                onClose={this.handleClose.bind(this)}
                            />;
        } else {
            detailWindow = null;
        }
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="MicroProxy GUI"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                    <MsgList
                        msgStore={store}
                        onCellClick={this.handleOpen.bind(this)}
                    />
                    {detailWindow}
                </div>
            </MuiThemeProvider>
        );
    }
}

Main.propTypes = {
    store: React.PropTypes.object
}
