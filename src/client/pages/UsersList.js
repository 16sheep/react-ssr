import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UsersList extends React.Component {
    componentDidMount() {
        this.props.fetchUsers()
    }

    renderUsers() {
        return this.props.users.map(user => 
            <li key={user.id}>{user.name}</li>
        )
    }

    render() {
        return(<div>
           <h1>USERS:</h1>
           <ul>{this.renderUsers()}</ul>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return { users: state.users }
}

const loadData = (store) => {
    return store.dispatch(fetchUsers())
}
export {loadData }
export default connect(mapStateToProps, {fetchUsers})(UsersList)