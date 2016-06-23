import {observable} from "mobx";

class MsgStore {
    @observable msg_list = [];

    addMsg(msg) {
        this.msg_list.push(msg);
    }
}

export default MsgStore;
