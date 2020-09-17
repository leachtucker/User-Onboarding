import React from 'react';

export default function User(props) {
    const { user } = props;

    return (
        <div className="user-tile">
            <h4>{user.name}</h4>
            <div>
                <p>Email:<br /> {user.email}</p>
            </div>
        </div>
    );
}