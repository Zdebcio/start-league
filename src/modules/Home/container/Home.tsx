import { Auth } from 'shared/services'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()
  return (
    <div>
      <div style={{ maxWidth: 300, wordWrap: 'break-word' }}>
        {`Bearer ${Auth.getToken()}`}
      </div>
      <button
        type="button"
        onClick={() => {
          localStorage.clear()
          history.push('/')
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default Home
