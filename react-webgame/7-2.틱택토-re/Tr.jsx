import React from 'react'
import Td from './Td'


const Tr = ({boardRow, rowIndex, clickTd, pickedCell}) => {
    

    return(<>
        <tr>
            {boardRow.map((element, index) => (<Td boardCell={element} rowIndex={rowIndex} colIndex={index} clickTd={clickTd} pickedCell={pickedCell}/>))}
        </tr>
    </>);
}

export default Tr;