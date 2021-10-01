import React, {useState} from 'react';
import './App.css';

const NewMessageForm = (prop) => {
  const [inputText, setInputText] = useState('')
  return (
    <div>
      <input
        type="text" 
        data-testid="messageText"
        value={inputText}
        onChange={e => {setInputText(e.target.value)}}
      />
      <button
        data-testid="sendButton"
        onClick={() => {
          prop.send(inputText)
          setInputText('')
        }}
      >
        click
      </button>
    </div>
  )
}

const NewMessageList = (prop) => {
  const {data} = prop
  return (
    <ul>
      {data.map(item => (<li key={item} >{item}</li>))}
    </ul>
  )
}

function App() {
  const [message, setMessage] = useState([])
  const handleSend = newMessage => {
    setMessage([newMessage, ...message])
  }
  return (
    <div className="App">
      <NewMessageForm send={handleSend} />
      <NewMessageList data={message} />
    </div>
  );
}

export default App;
