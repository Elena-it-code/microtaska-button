import React, {useState} from 'react';
import './App.css';

function App() {
    let [a, setState] = useState(1)

    //Variant #1
    const onclickHandler = ()=>{
        setState(++a)
        console.log(a)

    }
    //Variant #2
    // const onclickHandler = ()=>{
    //     let b=a+1;
    //     console.log(b)
    //     setState(b)
    //
    // }

    //Variant #1
    const onclickResetHandler = ()=>{
        console.log(0)
        setState(0)

    }
    //Variant #2
   /* const onclickResetHandler = ()=>{
        let b=0;
        console.log(b)
        setState(b)

    }*/
    return (
        <div className="App">
            <h1>{a}</h1>
            <div>
            <button onClick={onclickHandler}>number</button>
            <button onClick={onclickResetHandler}>reset</button>
        </div>
        </div>
    );
}

export default App;