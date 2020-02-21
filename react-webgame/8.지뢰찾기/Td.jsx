import React, {useContext, useCallback} from 'react'
import {CLICK_MINE, CODE, NORMALIZE_CELL, OPEN_CELL, QUESTION_CELL, TableContext, FLAG_CELL} from "./MineSearch";

const getTdStyle = (code) => {
    switch (code) {
        case CODE.NORMAL:
        case CODE.MINE:
            return {
                background: '#444',
            };
        case CODE.OPENED:
            return {
                background: 'white',
            };
        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
            return {
                background: 'yellow',
            };
        case CODE.FLAG:
        case CODE.FLAG_MINE:
            return {
                background: 'red',
            };
        default:
            return {
                background: 'white'
            };
    }
};

const getTdText = (code) => {
    switch (code) {
        case CODE.NORMAL:
            return '';
        case CODE.MINE:
            return 'X';
        case CODE.CLICKED_MINE:
            return '펑';
        case CODE.FLAG_MINE:
        case CODE.FLAG:
            return '!';

        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
            return '?';
        default:
            return
    }
};


const Td = ({rowIndex, cellIndex}) =>{
    const {tableData, halted, dispatch} = useContext(TableContext);

    if (halted) {
        return;
    }

    const onClickTd = useCallback(() =>{
        switch (tableData[rowIndex][cellIndex]) {
            case CODE.OPENED :
            case CODE.FLAG_MINE :
            case CODE.FLAG :
            case CODE.QUESTION_MINE :
            case CODE.QUESTION :

            case CODE.NORMAL:
                dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
                return;
            case CODE.MINE :
                dispatch({type: CLICK_MINE, row: rowIndex, cell: cellIndex});
                return ;

            default:
                return '';

        }
    }, []);

    const onRightClickTd = useCallback((e) =>{
        e.preventDefault(); // 기본적으로 우클릭할 때 메뉴가 뜨는것을 방지함
        if (halted){
            return;
        }
        switch (tableData[rowIndex][cellIndex]) {
            case CODE.NORMAL:
            case CODE.MINE:
                dispatch({type: FALG_CELL, row:rowIndex, cell: cellIndex});
                return;
            case CODE.FLAG:
            case CODE.FLAG_MINE:
                dispatch({type: QUESTION_CELL, row:rowIndex, cell: cellIndex});
                return;
            case CODE.QUESTION:
            case CODE.QUESTION_MINE:
                dispatch({type: NORMALIZE_CELL, row:rowIndex, cell:cellIndex});
                return;
            default:
                return;
        }
    }, [tableData[rowIndex][cellIndex]]);

    return(
        <td style={getTdStyle(tableData[rowIndex][cellIndex])}
        onClick={onClickTd}>
        onContextMenu={onRightClickTd}
            {getTdText(tableData[rowIndex][cellIndex])}
        </td>
    );
};

export default  Td;