import React from 'react'
import Tr from './Tr'

const Table = ({boardStatus}) => {

    return(<>
        <table>
            {boardStatus.map( (element, index, array) => {return <Tr boardStatus={boardStatus[index]} />}
                
            )}
         
        </table>
    </>);
}

export default Table;