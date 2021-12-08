import { Auth } from 'shared/services'
import { useHistory } from 'react-router-dom'
import PageAfterLogin from 'shared/layout/PageAfterLogin/PageAfterLogin'
import Tables from 'modules/Tables/container/Tables'

const Home = () => {
  const history = useHistory()
  return (
    <PageAfterLogin>
      <Tables />
    </PageAfterLogin>
  )
}

export default Home
