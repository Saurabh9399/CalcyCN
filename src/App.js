import { useState } from "react";

function App() {
  const [calc, setClac] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  //Display the value and Calculate

  const updateClac = (value) => {
    if (
      (ops.includes(value) && calc === " ") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setClac(calc + value);

    if (!ops.includes(value)) {
      // eslint-disable-next-line no-eval
      setResult(eval(calc + value).toString());
    }
  };

  // PRint DIgits
  const createDegit = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateClac(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  //CLick  Eqaul to Display
  const calculate = () => {
    // eslint-disable-next-line no-eval
    setClac(eval(calc).toString());
  };

  //Delete Function DEL BUTTON Handel
  const deleteLast = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);
    setClac(value);
  };

  return (
    <div className="App" style={{ background:'#EFC050'}}>
      <h1 className="center">Skill test: Calculator </h1>
      <div className="Calc-Container">
        <div className="calculator">
          <div className="display">
            {result ? <span>({result})</span> : ""}
            {calc || "0"}
          </div>
          <div className="operators">
            <button onClick={() => updateClac("/")}>/</button>
            <button onClick={() => updateClac("*")}>*</button>
            <button onClick={() => updateClac("+")}>+</button>
            <button onClick={() => updateClac("-")}>-</button>

            <button onClick={deleteLast}>DEL</button>
          </div>
          <div className="digits">
            {createDegit()}
            <button onClick={() => updateClac("0")}>0</button>
            <button onClick={() => updateClac(".")}>.</button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;