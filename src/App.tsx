import { useEffect, useState } from "react";
import "./App.css";
import s from "./App.module.css";
function Counter({ title, initValue }: { title: string; initValue: number }) {
    const [value, setValue] = useState(initValue);
    const changeHandler = (_value: number) => {
        const option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ value: _value }),
        };
        fetch("http://localhost:9999/counter", option)
            .then((resp) => resp.json())
            .then((result) => setValue(result.value));
    };
    const up = () => changeHandler(value + 1);
    const down = () => changeHandler(value - 1);
    const style = {
        margin: "5px",
        backgroundColor: "red",
    };
    useEffect(() => {
        fetch("http://localhost:9999/counter")
            .then((resp) => resp.json())
            .then((result) => {
                console.log("useEffect 안이에요!!", result.value);
                setValue(result.value);
            });
    }, []);

    return (
        <div className="counter-root">
            <h1 className={s.em}>{title}</h1>
            <button onClick={up} style={style}>
                +
            </button>
            <button onClick={down} style={style}>
                -
            </button>
            {value}
        </div>
    );
}

function App() {
    return (
        <>
            <Counter title="counter" initValue={10}></Counter>
        </>
    );
}

export default App;
