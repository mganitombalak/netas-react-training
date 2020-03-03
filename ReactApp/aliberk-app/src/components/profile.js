import React from 'react';

const Profile = (props) =>{
    //console.log(props);
    return (<div className="ui card">
                <div className="image">
                <img src={props.avatar}/>
                </div>
                <div className="content">
                <a className="header">{props.name}</a>
                <div className="meta">
                    <span className="date">Joined in {props.date}</span>
                </div>
                <div className="description">
                    {props.title}
                </div>
                </div>
                <div className="extra content">
                <a><i className="user icon"></i>{props.numFriends} Friends</a>
                </div>
            </div>);
}

export default Profile;