import React from 'react';

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
                    users.map(user => {
                        return (
                            <div className="user-tile">
                                <h4>{user.name}</h4>
                                <p>Email: {user.email}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}