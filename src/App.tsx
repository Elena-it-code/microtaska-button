import React from 'react';
import './App.css';
import { MouseEvent } from 'react'; /*// Но надо обязательно добавить : import { MouseEvent } from 'react';
в импорты) а то  на event:MouseEvent<HTMLButtonElement> будет ругацца.*/
function App() {

    const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Hello I am VASA!")
    }
    const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Hello I am IVAN!")
    }

    const onClickHandler = (name: string) => {
        console.log(name)
    }

    const for1 = (event: MouseEvent<HTMLButtonElement> /*можно не указывать event: MouseEvent<...*/)=> { // ничего не передаем
        console.log("100200")
    }

    const for2 = (number:number)=> { /*передать йифру 100200*/
        console.log(number)
    }
    return (
        <div className="App">
            <button onClick={(event)=>{console.log("Hello")}}>MyYuoTubeChanel-01</button>
             <button onClick={myFirstSubscriber}>MyYuoTubeChanel-1</button>
            <button onClick={mySecondSubscriber}>MyYuoTubeChanel-2</button>

            <button onClick={(event) => onClickHandler("VASA")}>MyYuoTubeChanel-1</button>
            <button onClick={(event) => onClickHandler("IVAN")}>MyYuoTubeChanel-2</button>

            <button onClick={for1}>1</button>  {/*ничего не передаем*/}
            <button onClick={({/*можно также и указать event: React....*/})=> for2(100200)}>2</button>   {/*передать йифру 100200*/}
        </div>
    );
}

export default App;
