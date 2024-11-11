import React, {useEffect, useState} from 'react';
import './HomePage.sass'
import {mockUsers} from "../../mock";

function HomePage() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        setUsers(mockUsers)
    }, []);

    useEffect(() => {
        if (users.length > 0) console.log(users)
    }, [users]);

    return (
        <div className={'page homePage'}>
            {
                users.length > 0
                    ? users.map((user, i) => <img src={user.photo} alt="" key={i}/>)
                    : null
            }
        </div>
    );
}

export default HomePage;