import React from 'react';
import User from './User';

export default function Users(props) {
    const { users } = props;

    if (!users || users.length <= 0) {
        // The users _array_ is empty, do not display anything (or access props that we do not have)
        return (
            <div className="users-section">
                <h2>Users:</h2>
                <h3>No users available</h3>
            </div>
        );
    }

    return (
        <div className="users-section">
            <h2>Users:</h2>
            <div className="users-container">
                {
                    users.map((user, index) => {
                        return (
                            <User key={index} user={user} />
                        );
                    })
                }
            </div>
        </div>
    );
}