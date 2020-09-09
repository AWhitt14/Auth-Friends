import React, {useEffect, useState} from 'react';
import {axiosWithAuth} from '../util/AuthAx';

const UserInt = props => {
    const [friends, setFriends] = useState([]);

    const logOut = () => {
        localStorage.removeItem('token');
        window.location.reload(true);
    }

    useEffect(e => {
        axiosWithAuth()
    .get('/friends')
    .then(res => {
        setFriends(res.data);
        console.log(res);
    })
    .catch(er => {
        console.log(er);
    });}
    );

    return(
        <div>
            <p>private area, you are logged in</p>
            <button onClick={logOut}>logout</button>
            <div>
                {friends.map(f => (
                    <div>
                        <p>{f.name}</p>
                        <p>{f.age}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserInt