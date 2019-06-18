import Home from './pages/Home'
import UsersList from './pages/UsersList'

export default [{
    path: '/',
    ...Home,
    exact: true
}, {
    path:'/users',
    ...UsersList
}]