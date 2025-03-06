import { useState } from "react";
import "./App.css";
function Counter({ title, initValue }: { title: string; initValue: number }) {
    const [value, setValue] = useState(initValue);
    const up = () => {
        // setValue((prev) => prev + 1);
        setValue(value + 1);
    };
    const down = () => setValue(value - 1);
    const style = {
        margin: "5px",
        backgroundColor: "red",
    };
    return (
        <div className="counter-root">
            <h1>{title}</h1>
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
            <Counter title="카운터" initValue={100}></Counter>
        </>
    );
}

export default App;
