import React from 'react'
import Td from './Td'


const Tr = ({boardRow, rowIndex, clickTd}) => {
    
    return(<>
        <tr>
            {boardRow.map((element, index) => (<Td boardCell={element} rowIndex={rowIndex} colIndex={index} clickTd={clickTd}/>))}
        </tr>
    </>);
}

export default Tr;