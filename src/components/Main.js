import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import MsgList from "./MsgList";
import DetailWindow from "./DetailWindow";


export default class Main extends React.Component {
    state = {
        open: false
    };

    handleOpen(msg) {
        console.log(msg);
        this.setState({open: true});
    }

    handleClose(){
        this.setState({open: false});
    }

    render() {
        const store = this.props.store;
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
                    <DetailWindow
                        message="hello"
                        open={this.state.open}
                        onClose={this.handleClose.bind(this)}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

Main.propTypes = {
    store: React.PropTypes.object
}
