import React from 'react'
import Tr from './Tr'

const Table = ({boardStatus, clickTd, pickedCell}) => {

    return(<>
        <table>
            {boardStatus.map( (element, index) => (<Tr boardRow={element} rowIndex={index} clickTd={clickTd} pickedCell={pickedCell}/>))}        
        </table>
    </>);
}

export default Table;