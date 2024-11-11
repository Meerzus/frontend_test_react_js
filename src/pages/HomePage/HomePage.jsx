import React from 'react'
import {mockUsers} from "../../mock";
import './HomePage.sass'
import UserList from "../../components/UserList/UserList";
import UserForm from "../../components/UserForm/UserForm";
import AppSettings from "../../components/AppSettings/AppSettings";

const HomePage = () => {
    let users = mockUsers;

    const postNewUser = (newUser) => {
        users.push(newUser);
        console.log('postNewUser')
    }

    const deleteUser = (id) => {
        users = users.filter((user) => user.id !== id);
        console.log('deleteUser')
    }

    const sortUsers = (project) => {
        users = users.filter((user) => user.project === project);
        console.log('sortUsers')
    }

    console.log(users)

    let theme = 'Светлая'

    const setTheme = (newTheme) => {
        theme = newTheme
    }

    let lang = 'Русский'

    const changeLanguage = (newLanguage) => {
        lang = newLanguage
    }

    return (
        <div className={'page homePage'}>
            <AppSettings theme={theme} setTheme={setTheme} lang={lang} changeLanguage={changeLanguage}/>
            <h3>Сотрудники завода №52</h3>
            <UserList users={users} deleteUser={deleteUser} sortUsers={sortUsers}/>
            <UserForm postNewUser={postNewUser}/>
            {console.log(mockUsers)}
        </div>
    );
}
export default HomePage
