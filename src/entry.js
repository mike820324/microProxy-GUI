import {render} from "react-dom";
import React from "react";

import Main from "./components/Main";
import MsgStore from "./store";

const msgStore = new MsgStore();
render(<Main store={msgStore}/>, document.getElementById('app'));

const ipc = window.require('electron').ipcRenderer;
ipc.on("msg_arrive", (event, msg) => {
    msgStore.addMsg(msg);
});
