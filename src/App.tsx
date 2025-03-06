import { useState } from "react";
import "./App.css";
function Counter({ title, initValue }: { title: string; initValue: number }) {
    const [value, setValue] = useState(initValue);
    const up = () => {
        // setValue((prev) => prev + 1);
        setValue(value + 1);
    };
    const down = () => setValue(value - 1);
    return (
        <>
            <h1>{title}</h1>
            <button onClick={up}>+</button>
            <button onClick={down}>-</button>
            {value}
        </>
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
