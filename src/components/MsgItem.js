import React from "react";

export default class MsgItem extends React.Component {
    render() {
        const {item} = this.props;
        return (
            <li> {item} </li>
        );
    }
}
