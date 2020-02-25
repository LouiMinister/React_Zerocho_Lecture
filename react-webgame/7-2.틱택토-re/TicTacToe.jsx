import React, {useState, useCallback} from 'react';
import Table from './Table';

const TicTacToe = () => {

    const [sample, setSample] = useState('not changed');
    const [boardStatus, setBoardStatus] = useState([
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9']
    ]);
\
    
    const event = () => useCallback( ()=>{setSample( sample=='changed' ? 'not changed' : 'changed' ), [] });
    const event2 = (text) => useCallback( ()=>{setSample(text), [] });

    const clickTd = (rowIndex, colIndex) => useCallback( ()=>{
        
    } );

    return(
        <>
            <div>
                <button onClick={event2("text")}></button>
                {sample}
                ㅁㄴㅇㄹㅁㄴㅇㄹ
            </div>
            <div>
               <Table boardStatus={boardStatus}/>
            </div>
        </>
    );
}

export default TicTacToe;