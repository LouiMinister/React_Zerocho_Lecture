import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NumberBaseBall from "../3.숫자야구/NumberBaseball";
import RSP from "../5.가위바위보/RSP";
import Lotto from "../6.로또/Lotto";

const Games = () => {
    return(
        <BrowserRouter>
            <div>
                <Route path="/number-baseball" component={NumberBaseBall} />
                <Route path="/rock-scissors-paper" component={RSP}/>
                <Route path="/lotto-generator" component={Lotto}/>
            </div>
        </BrowserRouter>
    );
};

export default Games;