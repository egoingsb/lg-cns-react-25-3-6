import "./App.css";
type CounterProps = {
    title: string;
    initValue: number;
};
function Counter(props: CounterProps) {
    return (
        <>
            <h1>{props.title}</h1>
            <button>+</button> {props.initValue}
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
