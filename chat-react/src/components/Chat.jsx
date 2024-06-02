import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Message from './Message';

function Chat() {
  const location = useLocation();
  const userName = location.state?.name || 'Você';
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (message) {
      setMessages([...messages, { sender: userName, text: message }]);
      setMessage('');
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Atendimento On-line</h1>
      </header>
      <main>
        <div id="conversa">
          {messages.map((msg, index) => (
            <Message key={index} sender={msg.sender} text={msg.text} />
          ))}
        </div>
      </main>
      <div>
        <form onSubmit={handleSendMessage}>
          <textarea
            required
            placeholder="Digite sua mensagem..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;