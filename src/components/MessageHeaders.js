import React from "react";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from "material-ui/Table";
import {TableRowColumn} from "material-ui/Table";

export default class MessageHeaders extends React.Component {
    render() {
        let rows = [];
        for (var head in this.props.message.headers) {
            rows.push(
                <TableRow>
                    <TableRowColumn style={{width: "25%"}}>{head}</TableRowColumn>
                    <TableRowColumn style={{width: "75%"}}>{this.props.message.headers[head]}</TableRowColumn>
                </TableRow>
            );
        }

        return (
            <Table
                selectable={false}
            >
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                >
                    <TableRow>
                        <TableHeaderColumn tooltip="The ID" style={{width: "25%"}}>Field</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The ID" style={{width: "75%"}}>Value</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}
                    preScanRows={false}
                >
                    {rows}
                </TableBody>
            </Table>
        );
    }
}
