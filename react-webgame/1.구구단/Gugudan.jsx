const React = require('react');
const {useState, useRef} = React;

const GuGuDan = () => {

    // 변수자리에 배열, 객체 쓰는것 : 비구조화 문법(Destructuring)
    const [first, setFirst] = useState(Math.ceil( Math.random() * 9 ));
    const [second, setSecond] = useState(Math.ceil( Math.random() * 9 ));
    const [value, setValue] = useState('3');
    const [result, setResult] = useState('');

    //
    const inputRef = useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (parseInt(value) === first * second){

            setResult((c) => {
                return '정답: ' + value;
            });
            setFirst(Math.ceil( Math.random() * 9 ));
            setSecond(Math.ceil( Math.random() * 9 ));
            setValue('');
            // 렌더를 비동기로 처리하기 때문에 렌더를 4번 부르지 않는다.

        } else {
            setValue('');
            setResult('땡');

        }
        inputRef.current.focus();
    };

    //console.log("렌더링")
    // state 바뀌면 함수 전체가 다시 렌더링
    return (
        <>
            <div>{first} 곱하기 {second} 는?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} type="number"/>
                <button id="button" className="name">입력!</button>
            </form>
            <div>{result}</div>

        </>
    );
}

module.exports = GuGuDan;