import React, {useCallback} from 'react';
import { CLICK_CELL, CHANGE_TURN } from './TicTacToe'


const Td = ({rowIndex, cellIndex, dispatch, cellData}) => {

    const onClickTd = useCallback( () => {
        console.log(rowIndex, cellIndex);
        if (cellData) {
            return;
        }
        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });

            // useReduce는 state가 비동기 처리됨. -> useEffect 사용
    });

    return (
        <td onClick={onClickTd}>{cellData}</td>
    )
};

export default Td;