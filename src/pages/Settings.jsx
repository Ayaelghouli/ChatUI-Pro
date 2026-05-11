import { useSelector, useDispatch } from 'react-redux'
import { updateName, updateAvatar } from '../store/slices/userSlice'
import { toggleDarkMode } from '../store/slices/settingsSlice'
import { useNavigate } from 'react-router-dom'

const avatars = ['👨‍⚕️', '👩‍⚕️', '🧑‍⚕️', '👨‍💼', '👩‍💼']

function Settings() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { name, avatar } = useSelector((state) => state.user)
  const { darkMode } = useSelector((state) => state.settings)

  return (
    <div className="settings">
      <h1>⚙️ Paramètres</h1>

      <div className="setting-group">
        <label>Nom d'affichage</label>
        <input
          type="text"
          value={name}
          onChange={(e) => dispatch(updateName(e.target.value))}
        />
      </div>

      <div className="setting-group">
        <label>Choisir un avatar</label>
        <div className="avatars">
          {avatars.map((av) => (
            <span
              key={av}
              className={avatar === av ? 'selected' : ''}
              onClick={() => dispatch(updateAvatar(av))}
            >
              {av}
            </span>
          ))}
        </div>
      </div>

      <div className="setting-group">
        <label>Mode sombre</label>
        <button onClick={() => dispatch(toggleDarkMode())}>
          {darkMode ? '☀️ Mode clair' : '🌙 Mode sombre'}
        </button>
      </div>

      <button onClick={() => navigate('/')}>
        ← Retour au Dashboard
      </button>
    </div>
  )
}

export default Settings