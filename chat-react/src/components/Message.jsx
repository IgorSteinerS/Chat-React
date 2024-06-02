import React from 'react';

function Message({ sender, text }) {
  const isUser = sender !== 'Atendente';
  return (
    <div className={isUser ? 'usuario' : 'atendente'}>
      <p className={isUser ? 'nome_usuario' : 'nome_atendente'}>{sender} diz:</p>
      <p className={isUser ? 'texto_usuario' : 'texto_atendente'}>{text}</p>
    </div>
  );
}

export default Message;