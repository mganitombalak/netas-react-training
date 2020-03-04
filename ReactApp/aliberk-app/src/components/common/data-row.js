import React from 'react';


const DataRow = (props) => {
    return <tr>
         {Object.keys(props).slice(props.startColIndex, props.endColIndex).map((col, index) => (
      <td key={"gentd-" + index}>{props[col]}</td>
    ))}
    </tr>
}

export default DataRow;