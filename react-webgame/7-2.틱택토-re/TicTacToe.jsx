import React, {useState, useCallback, useEffect} from 'react';
import Table from './Table';

const TicTacToe = () => {

    const [sample, setSample] = useState('not changed');
    const [boardStatus, setBoardStatus] = useState([
        ['','',''],
        ['','',''],
        ['','','']
    ]);
    const [pickedCell, setPickedCell] = useState({rowIndex:'', cellIndex:''});
    const [turn, setTurn] = useState('O');
    const [winner, setWinner] = useState('');

    
    const event = ()=>{
        const _boardStatus = [...boardStatus];
        boardStatus.push([99,99,99]);
        boardStatus[1].push(99);
        console.log(boardStatus);
        console.log(_boardStatus);
        console.log("1");
        console.log(" "+_boardStatus + boardStatus);
        console.log(" "+ _boardStatus == _boardStatus);
    };
    const event2 = (text) => useCallback( ()=>{setSample(text)}, [] );

    // state.boardStatus 바뀔 때 마다 게임 결과 파악
    useEffect ( () => {
        const result = '';
        var rowBar =[];
        var colBar =[];
        var diagBar1 = [];
        var diagBar2 = [];

        // 가로, 세로줄 일치여부 확인
        boardStatus.forEach( (boardRow, rowIndex) => {
            boardRow.forEach( (cell, colIndex) => {
                rowBar.push(boardStatus[rowIndex][colIndex]);
                colBar.push(boardStatus[colIndex][rowIndex]);
            });
    
            if(rowBar[0] !== '' && rowBar.every((element => element === rowBar[0]))){
                setWinner(rowBar[0]);
                return;
            }
            if(colBar[0] !== '' && colBar.every((element => element === colBar[0]))){
                setWinner(colBar[0]);
                return;
            }
            rowBar = [];
            colBar = [];

            
            diagBar1.push(boardStatus[rowIndex][rowIndex]);
            diagBar2.push(boardStatus[boardStatus.length-1-rowIndex][rowIndex]);
        });
        console.log(diagBar1);
        console.log(diagBar2);
        if(diagBar1[0]!== '' && diagBar1.every((element => element === diagBar1[0]))){
            setWinner(diagBar1[0]);
            return;
        }
        if(diagBar2[0]!== '' && diagBar2.every((element => element === diagBar2[0]))){
            setWinner(diagBar2[0]);
            return;
        } 
    },[boardStatus]);

    useEffect( () => {
        if (winner !==''){
            clearBoard();
        }
    }, [winner]);


    // 칸 클릭했을 경우 이벤트 핸들링
    const clickTd = (rowIndex, colIndex) => useCallback( ()=>{
        if(boardStatus[rowIndex][colIndex]!=''){
            return;
        }
        // 선택한 셀 state 업데이트
        setPickedCell({rowIndex, colIndex});

        // 턴 변경
        const _turn = (turn === 'O' ? 'X' : 'O');

        // 선택한 td에 체크
        const _boardStatus = [...boardStatus];
        _boardStatus[rowIndex] = [...boardStatus[rowIndex]];
        _boardStatus[rowIndex][colIndex] = _turn;

        setTurn(_turn);
        setBoardStatus(_boardStatus);

        
    },[boardStatus] );

    // 테이블 초기화
    const clearBoard = useCallback ( () => {
        setBoardStatus([
            ['','',''],
            ['','',''],
            ['','','']
        ]);
        setPickedCell('');
    }, []);

    return(
        <>
            <div>
                <button onClick={event}>이벤트1</button>
                <button onClick={clearBoard}>이벤트2</button>
                <button onClick={clickTd(1,1)}>이벤트3</button>
                {sample}
                ㅁㄴㅇㄹㅁㄴㅇㄹ
                승자 : {winner}
            </div>
            <div>
               <Table boardStatus={boardStatus} clickTd={clickTd} pickedCell={pickedCell}/>
            </div>
        </>
    );
}

export default TicTacToe;