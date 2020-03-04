import React from 'react';
import DataRow from './data-row'
export default class DataTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let result;
        if(this.props.data){
            result=this.props.data.map((item, index) => {
                return <DataRow
                    key={index}
                    index={index}
                    {...item}
                    startColIndex={0}
                    endColIndex={5}
                />
            })
        } else {
            result =<tr><td>No Data</td></tr>
        }
        return (<table className="ui celled table">
            <thead>
                <tr>
                    {this.props.headers.map((headerColum, index) => <th key={index}>{headerColum}</th>)}
                </tr>
            </thead>
            <tbody>{result}</tbody>
        </table>);
    }
}