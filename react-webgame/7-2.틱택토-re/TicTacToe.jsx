import React, {useState} from 'react';
import Table from './Table';

const TicTacToe = () => {

    const [sample, setSample] = useState('not changed');

    const event = () => { setSample( sample=='changed' ? 'not changed' : 'changed' ); }

    return(
        <>
            <div>
                <button onClick={event}></button>
                {sample}
                ㅁㄴㅇㄹ
            </div>
            <div>
               <Table />
            </div>
        </>
    );
}

export default TicTacToe;