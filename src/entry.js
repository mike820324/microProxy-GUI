import {render} from "react-dom";
import React from "react";
import Main from "./components/Main";

render(<Main/>, document.getElementById('app'));

const ipc = window.require('electron').ipcRenderer;

ipc.on("msg_arrive", (event, msg) => {
    console.log(msg);
});
