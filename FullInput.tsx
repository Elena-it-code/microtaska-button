import React, {ChangeEvent, MouseEventHandler, useState} from "react";

export type FullInputPropsType ={
    addNewMessage: (title:string)=>void
}
export const FullInput =(props:FullInputPropsType )=>{
    let[title, setTitle] = useState('')

    const onChangeInputHandler=(event: ChangeEvent<HTMLInputElement>)=>{setTitle(event.currentTarget.value)}
    const onClickHandler =()=>{props.addNewMessage(title); setTitle('')}

    return(
    <div>
        <input value={title} onChange={onChangeInputHandler}/>
        <button onClick={onClickHandler}>+</button>
    </div>
)
}