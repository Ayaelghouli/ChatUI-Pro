import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page introuvable</p>

      <Link to="/">
        Retour au Dashboard
      </Link>
    </div>
  )
}