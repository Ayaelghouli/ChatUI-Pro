import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Dashboard() {
  const { name, avatar } = useSelector((state) => state.user)
  const messages = useSelector((state) => state.messages.list)
  const navigate = useNavigate()
  const sessionStart = new Date().toLocaleTimeString()

  return (<>
    <Navbar />
    <div className="dashboard">
      <h1>🏥 NeoCare Medical Hub</h1>

      <div className="agent-info">
        <span className="avatar">{avatar}</span>
        <h2>Bienvenue, {name}</h2>
      </div>

      <div className="stats">
        <div className="stat-card">
          <h4>💬 Messages</h4>
          <p>{messages.length}</p>
        </div>
        <div className="stat-card">
          <h4>🕐 Session démarrée à</h4>
          <p>{sessionStart}</p>
        </div>
      </div>

      <div className="actions">
        <button className="main-btn" onClick={() => navigate('/chat')}>
          💬 Aller au Chat
        </button>
        <button className="main-btn" onClick={() => navigate('/settings')}>
          ⚙️ Paramètres
        </button>
      </div>
    </div>
  </>
)
}

export default Dashboard