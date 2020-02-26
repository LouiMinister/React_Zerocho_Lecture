import React from 'react'

const Td = ({boardCell, rowIndex, colIndex, clickTd}) => {
    
    return(<>
        <td onClick={clickTd(rowIndex, colIndex)}>{boardCell}</td>
    </>);
}
export default Td;