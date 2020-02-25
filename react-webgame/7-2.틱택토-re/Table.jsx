import React from 'react'
import Tr from './Tr'

const Table = ({boardStatus}) => {

    return(<>
        <table>
            {Array(boardStatus.length).fill().map( (element, index, array) => (<Tr boardStatus={boardStatus[index]} />)
                
            )}
         
        </table>
    </>);
}

export default Table;