import React, {useCallback, useEffect, useRef, memo} from 'react';
import { CLICK_CELL, CHANGE_TURN } from './TicTacToe'


const Td = memo(({rowIndex, cellIndex, dispatch, cellData}) => {
    console.log('td rerendered');

    const ref = useRef([]);
    useEffect( () => {
        console.log(cellData);
        ref.current = [rowIndex, cellIndex, dispatch, cellData];
    }, [rowIndex, cellIndex, dispatch, cellData]);

    const onClickTd = useCallback( () => {
        console.log(rowIndex, cellIndex);
        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });

            // useReduce는 state가 비동기 처리됨. -> useEffect 사용
    }, [cellData]);

    return (
        <td onClick={onClickTd}>{cellData}</td>
    )
});

export default Td;