import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import NumberBaseBall from "../3.숫자야구/NumberBaseball";
import RSP from "../5.가위바위보/RSP";
import Lotto from "../6.로또/Lotto";

const Games = () => {
    return(
        <BrowserRouter>
            <div>
                <Link to="/number-baseball" >숫자야구</Link>
                &nbsp;
                <Link to="/rock-scissors-paper">가위바위보</Link>
                &nbsp;
                <Link to="/lotto-generator">로토</Link>
            </div>

            <div>
                <Route path="/number-baseball" component={NumberBaseBall} />
                <Route path="/rock-scissors-paper" component={RSP}/>
                <Route path="/lotto-generator" component={Lotto}/>
            </div>
        </BrowserRouter>
    );
};

export default Games;