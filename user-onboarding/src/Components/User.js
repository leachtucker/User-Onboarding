import React from 'react';

export default function User(props) {
    const { user } = props;

    return (
        <div className="user-tile">
            <h4 className="user-name">{user.name}</h4>
            <div>
                <p className="user-email">Email:<br /> {user.email}</p>
            </div>
        </div>
    );
}