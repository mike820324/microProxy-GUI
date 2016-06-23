import React from "react";
import {observer} from "mobx-react";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from "material-ui/Table";
import {TableRowColumn} from "material-ui/Table";

@observer
class MsgList extends React.Component {
    handleCellClick(index) {
        const msg_detail = this.props.msgStore.msg_list[index];
        this.props.onCellClick(msg_detail);
    }

    render() {
        const {msg_list} = this.props.msgStore;
        return (
            <Table
                height={"80%"}
                selectable={true}
                onCellClick={this.handleCellClick.bind(this)}
            >
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                >
                    <TableRow>
                        <TableHeaderColumn tooltip="The ID" style={{width: "50px"}}>Status</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The ID" style={{width: "50px"}}>Method</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The ID" style={{width: "25%"}}>Host</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The ID">Path</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}
                    preScanRows={false}
                >
                    {
                        msg_list.map((item) => {
                            const {request, response} = item;
                            return (
                                <TableRow>
                                    <TableRowColumn style={{width: "50px"}}>{response.code}</TableRowColumn>
                                    <TableRowColumn style={{width: "50px"}}>{request.method}</TableRowColumn>
                                    <TableRowColumn style={{width: "25%"}}>{request.headers.Host}</TableRowColumn>
                                    <TableRowColumn>{request.path}</TableRowColumn>
                                </TableRow>
                            );
                        }) 
                    }
                </TableBody>
            </Table>
        );
    }
}

MsgList.propTypes = {
    msgStore: React.PropTypes.object.isRequired,
    onCellClick: React.PropTypes.func.isRequired
};

export default MsgList;

