import React from "react";
import MsgItem from "./MsgItem";

export default class MsgList extends React.Component {
    render() {
        return (
            <ul>
                <MsgItem item={"1"}/>
                <MsgItem item={"1"}/>
                <MsgItem item={"1"}/>
                <MsgItem item={"1"}/>
            </ul>
        );
    } 
}

