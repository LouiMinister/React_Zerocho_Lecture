import React from 'react'
import Tr from './Tr'

const Table = ({boardStatus, clickTd}) => {

    return(<>
        <table>
            {boardStatus.map( (element, index) => (<Tr boardRow={element} rowIndex={index} clickTd={clickTd}/>))}        
        </table>
    </>);
}

export default Table;