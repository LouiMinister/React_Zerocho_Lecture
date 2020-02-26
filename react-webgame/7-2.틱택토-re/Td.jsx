import React from 'react'

const Td = ({boardCell, rowIndex, colIndex, clickTd, pickedCell}) => {
    
    console.log(pickedCell);

    return(<>
        <td style={{backgroundColor : rowIndex === pickedCell.rowIndex && colIndex === pickedCell.colIndex ? 'yellow' : 'white'}}
        onClick={clickTd(rowIndex, colIndex)}>{boardCell}</td>
    </>);
}
export default Td;