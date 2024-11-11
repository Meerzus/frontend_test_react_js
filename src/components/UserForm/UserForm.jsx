import React from 'react'
import './UserForm.sass'

const UserForm = ({postNewUser}) => {
    let id = ''
    let name = ''
    let project = ''
    let position = ''
    let photo = ''

    return (
        <div className={'userform'}>
            <h4>Создание пользователя</h4>
            <span>ID</span>
            <input type="text" className={'id'} value={id} onChange={e => id = id + e.target.value} placeholder={'ID'}/>
            <span>Имя</span>
            <input type="text" className={'name'} value={name} onChange={e => name = name + e.target.value} placeholder={'Имя'}/>
            <span>Проект</span>
            <input type="text" id={'project'} value={project} onChange={e => project = project + e.target.value} placeholder={'Проект'}/>
            <span>Должность</span>
            <input type="text" id={'position'} value={position} onChange={e => position = position + e.target.value} placeholder={'Должность'}/>
            <span>Фото (необязательно)</span>
            <input type="text" id={'photo'} value={photo} onChange={e => photo = photo + e.target.value} placeholder={'Фото (необязательно)'}/>

            <button onClick={() => postNewUser({
                id: id,
                name: name,
                project: project,
                position: position,
                photo: photo
            })}>Добавить пользователя</button>
        </div>
    )
}
export default UserForm
