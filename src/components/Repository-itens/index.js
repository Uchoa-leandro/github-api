import React from 'react';

export const RepositoryItem = ({name, fullName, linkToRepo}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h4>{fullName}</h4>
            <a href={linkToRepo} target="_blank" rel="noreferrer">{fullName}</a>
        </div>
    )
}