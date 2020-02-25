import React from 'react'

const Td = ({boardCell, rowIndex, colIndex}) => {
    
    return(<>
        <td>{''+boardCell + rowIndex + colIndex}</td>
    </>);
}
export default Td;