import React, { useState } from 'react';

const Component = (props) => <div className={props.name}>{props.children}</div>
// const UserInfo = (props) => <div className="Avatar">{props.children}</div>

function Com(props) {
    return(
        <Component name="comment">
            <Component name="user">
                <img className="Avatar"
                src={props.author.avatarUrl}
                alt={props.author.name}
                />
                <Component name="name">
                    {props.author.name}
                </Component>
            </Component>
            <Component name="Comment-text">
                {props.text}
            </Component>
            <Component name="Comment-date">
                {formatDate(props.date)}
            </Component>
        </Component>
    )
}

export default Com;
