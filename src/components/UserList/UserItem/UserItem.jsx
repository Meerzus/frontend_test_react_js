import React from 'react'
import './UserItem.sass'

const UserItem = ({user, deleteUser}) => {
    return (
        <div className={'UserItem'}>
            <p className={'USER'}>
                <div>
                    <img src={user.photo} alt=""/>
                    <span>{user.name}</span>
                    <button onClick={() => deleteUser(user.id)}>
                        x
                    </button>
                </div>
                <div>
                    <p>{user.position}</p>
                    <span>{user.project}</span>
                </div>
            </p>
        </div>
    )
}
export default UserItem
