import './App.css';
import {FullInput} from "./components/FullInput";

function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const addNewMessage = (title:string)=> {
        let newMessage = {message: title}
        /*let newMessages=[newMessage, ...message];
        setMessage(newMessages)*/
        setMessage([newMessage, ...message])
    }
    return (
        <div className="App">
            < FullInput addNewMessage={addNewMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;