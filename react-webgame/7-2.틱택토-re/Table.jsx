import React from 'react'
import Tr from './Tr'

const Table = ({boardStatus}) => {

    return(<>
        <table>
            {boardStatus.map( (element, index) => (<Tr boardRow={element} rowIndex={index} />))}        
        </table>
    </>);
}

export default Table;