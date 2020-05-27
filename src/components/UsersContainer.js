import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'
import './Title.css'

function UsersContainer ({ userData, fetchUsers }) {
    useEffect(() => {
      fetchUsers()
    }, [])
    return userData.loading ? (
      <h2>Loading</h2>
    ) : userData.error ? (
      <h2>{userData.error}</h2>
    ) : (
      <div>
        {/* <h2>Results</h2> */}
        <div className="title">Last but ever the "List"</div>
        <div>
          {userData &&
            userData.users &&
            userData.users.map(user => <p>{user.name}</p>)}
        </div>
      </div>
    )
  }

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
