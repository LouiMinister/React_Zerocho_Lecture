import React, {useState} from 'react';
import Table from './Table'

const initialState = {
    winner: '',
    turn: 'O',
    tableDate: [['','',''],['','',''],['','','']],
};



const TicTacToe = () => {



    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('O');
    // const [tableData, setTableData] = useState([['','',''],['','',''],['','','']]);


    return (
        <>
            <Table />
            {winner && <div>{winner}님의 승리</div>}
        </>
    )
};

export default TicTacToe;
