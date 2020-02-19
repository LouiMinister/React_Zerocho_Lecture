import React, {useState, useCallback, useContext} from 'react';
import {START_GAME, TableContext} from "./MineSearch";

const Form = () => {
    const [row, setRow] = useState(10);
    const [cell, setCell] = useState(10);
    const [mine, setMine] = useState(20);
    const {dispatch} = useContext(TableContext);

    const onChangeRow = useCallback( (e) => {
        setRow(e.target.value);
    }, []);

    const onChangeCell = useCallback( (e) => {
        setRow(e.target.value);
    }, []);

    const onChangeMine = useCallback( (e) => {
        setRow(e.target.value);
    }, []);

    const onClickBtn = useCallback( (e) => {
        dispatch({type: START_GAME, row, cell, mine});
    }, [row,cell,mine]);

    return (
        <div>
            <input type="number" placeholder="세로" value={row} onChange={onChangeRow} />
            <input type="number" placeholder="세로" value={cell} onChange={onChangeCell} />
            <input type="number" placeholder="세로" value={mine} onChange={onChangeMine} />
            <button onClick={onClickBtn}시작< /button>
        </div>
    )
};

import React, {useState} from 'react';

const Form = () => {
    const [row, setRow] = useState(10);
    const [cell, setCell] = useState(10);
    const [mine, setMine] = useState(20);

    const oncChangeRow = useCallback( (e) => {
        setRow(e.target.value);
    }, [])

    return (
        <div>
            <input type="number" placeholder="세로" value={row} onChange={onChangeRow} />
            <input type="number" placeholder="세로" value={cell} onChange={onChangeCell} />
            <input type="number" placeholder="세로" value={mine} onChange={onChangeMine} />
        </div>
    )
};

