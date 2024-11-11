import React from 'react'
import './UserList.sass'
import UserItem from "./UserItem/UserItem";

const UserList = ({users, deleteUser, sortUsers}) => {
    return (
        <div className={'userList1'}>
            <header>Список сотрудников</header>
            <div className="sortirovka">
                <p>Фильтр</p>
                <button onClick={() => sortUsers('Автоматизация цеха')}>Автоматизация цеха</button>
                <button onClick={() => sortUsers('Модульные конструкции')}>Модульные конструкции</button>
                <button onClick={() => sortUsers('Металлоконструкции')}>Металлоконструкции</button>
                <button onClick={() => sortUsers('Эко-безопасность')}>Эко-безопасность</button>
                <button onClick={() => sortUsers('Сборочные линии')}>Сборочные линии</button>
            </div>
            <br/>
            <div className="users">
                <div className="user-List2">
                    <div className="user_list_container">
                        <div className="container">
                            {
                                users.map((user) => <UserItem user={user} deleteUser={deleteUser}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserList
