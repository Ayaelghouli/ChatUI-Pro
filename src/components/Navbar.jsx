import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '14px 30px',
      background: 'var(--gradient)',
      boxShadow: 'var(--glow)'
    }}>
      <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', cursor: 'pointer' }}
        onClick={() => navigate('/')}>
        🏥 NeoCare
      </span>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button className="header-btn" onClick={() => navigate('/')}>Dashboard</button>
        <button className="header-btn" onClick={() => navigate('/chat')}>Chat</button>
        <button className="header-btn" onClick={() => navigate('/settings')}>Paramètres</button>
      </div>
    </nav>
  )
}

export default Navbar