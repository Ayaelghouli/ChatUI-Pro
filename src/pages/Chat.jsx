import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addMessage, clearMessages } from '../store/slices/messagesSlice'
import { useNavigate } from 'react-router-dom'
import responses from '../data/responses.json'

function Chat() {
const dispatch = useDispatch()
  const navigate = useNavigate()

  const { name, avatar } = useSelector((state) => state.user)
  const messages = useSelector((state) => state.messages.list)

  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const bottomRef = useRef(null)

  // auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [messages, isTyping])

  // trouver réponse intelligente
  const findResponse = (userText) => {
    const text = userText.toLowerCase()

    const matchedResponse = responses.responses.find((item) =>
      item.triggers.some((trigger) =>
        text.includes(trigger.toLowerCase())
      )
    )

    if (matchedResponse) {
      return matchedResponse.message
    }

    return responses.defaultResponses[
      Math.floor(
        Math.random() * responses.defaultResponses.length
      )
    ]
  }

  // envoyer message
  const sendMessage = () => {
    if (!input.trim()) return

    const currentInput = input

    // message utilisateur
    const userMsg = {
      id: Date.now(),
      sender: 'agent',
      text: currentInput,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    }

    dispatch(addMessage(userMsg))

    setInput('')
    setIsTyping(true)

    // délai simulé
    const delay =
      Math.floor(
        Math.random() *
          (responses.typingDelay.max -
            responses.typingDelay.min)
      ) + responses.typingDelay.min

    setTimeout(() => {
      const ariaMsg = {
        id: Date.now() + 1,
        sender: 'aria',
        text: findResponse(currentInput),
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })
      }

      dispatch(addMessage(ariaMsg))

      setIsTyping(false)
    }, delay)
  }

  return (
    <div className="chat">
      <div className="chat-header">
        <button
          className="header-btn"
          onClick={() => navigate('/')}
        >
          ← Retour
        </button>

        <div className="chat-title">
          <h2>
            🤖 {responses.bot.name} — Assistant Médical
          </h2>

          <span>
            {responses.bot.clinic} • v
            {responses.bot.version}
          </span>
        </div>

        <button
          className="header-btn danger"
          onClick={() => dispatch(clearMessages())}
        >
          🗑️ Reset
        </button>
      </div>
      <div className="messages">
        {messages.length === 0 && (
          <div className="welcome">
            <h3>
              Bonjour {name} 👋
            </h3>

            <p>
              Je suis {responses.bot.fullName}.
              Comment puis-je vous aider
              aujourd’hui ?
            </p>
          </div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`bubble ${msg.sender}`}
          >
            <span className="sender">
              {msg.sender === 'agent'
                ? `${avatar} ${name}`
                : `🤖 ${responses.bot.name}`}
            </span>

            <p>{msg.text}</p>

            <span className="time">
              {msg.time}
            </span>
          </div>
        ))}

        {isTyping && (
          <div className="bubble aria typing">
            <span className="sender">
              🤖 {responses.bot.name}
            </span>

            <p>
              ARIA est en train d'écrire...
            </p>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={(e) =>
            e.key === 'Enter' &&
            sendMessage()
          }
          placeholder="Écrire un message..."
        />

        <button onClick={sendMessage}>
          Envoyer
        </button>
      </div>
    </div>
  )
}

export default Chat