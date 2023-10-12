// основной скелет для универсальной кнопки именно так пишем!!!
type ButtonsPropsType ={
    name: string
    callback: ()=> void
}
export const Button = (props: ButtonsPropsType)=>{
    props.callback();
    return (
        <button onClick={props.callback}>{props.name}</button>
    )
}