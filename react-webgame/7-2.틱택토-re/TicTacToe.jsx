import React, {useState, useCallback, useEffect} from 'react';
import Table from './Table';

const TicTacToe = () => {

    const [sample, setSample] = useState('not changed');
    const [boardStatus, setBoardStatus] = useState([
        ['','',''],
        ['','',''],
        ['','','']
    ]);
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

    useEffect ( () => {
        const result = '';
        var prevTd ='';

        // 가로줄 일치여부 확인
        boardStatus.forEach( (boardRow, index) => {
            boardRow.forEach( (cell, index) => {
                // 처음 열에서는 조건 체크 안하고 prev에 값 등록
                if(index==0){
                    prevTd = cell;
                // 두번째 부터는 값 체크
                } else {
                    // 저번 cell의 값과 이번 cell 의 값이 다르면 loop break
                    if(prevTd !== cell){ break;}
                    // 저번 cell의 값과 이번 cell의 값이 같으면 prevTd에 등록하고 진행
                    else {
                        prevTd = cell;
                        // 현재 보고 있는 cell이 마지막 셀이면 승자 결정
                        if(index === boardStatus.length-1){
                            setWinner(prevTd);
                        }
                    } 
                }
            });
        });
        
    },[boardStatus]);




    // 칸 클릭했을 경우 이벤트 핸들링
    const clickTd = (rowIndex, colIndex) => useCallback( ()=>{
        if(boardStatus[rowIndex][colIndex]!=''){
            return;
        }
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
    }, []);

    



    return(
        <>
            <div>
                <button onClick={event}>이벤트1</button>
                <button onClick={clearBoard}>이벤트2</button>
                <button onClick={clickTd(1,1)}>이벤트3</button>
                {sample}
                ㅁㄴㅇㄹㅁㄴㅇㄹ
            </div>
            <div>
               <Table boardStatus={boardStatus} clickTd={clickTd}/>
            </div>
        </>
    );
}

export default TicTacToe;