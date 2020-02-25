import React from 'react'
import Td from './Td'


const Tr = ({boardRow, rowIndex}) => {
    
    return(<>
        <tr>
            {boardRow.map((element, index) => (<Td boardCell={element} rowIndex={rowIndex} colIndex={index}/>))}
        </tr>
    </>);
}

export default Tr;