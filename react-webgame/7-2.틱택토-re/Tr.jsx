import React from 'react'
import Td from './Td'


const Tr = ({boardStatus}) => {
    
    return(<>
        <tr>
            <Td boardStatus={boardStatus}/>
            <Td boardStatus={boardStatus}/>
            <Td boardStatus={boardStatus}/>
        </tr>
    </>);
}

export default Tr;