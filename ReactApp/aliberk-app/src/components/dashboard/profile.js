import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="ui card">
            <div className="image">
                <img src={this.props.avatar} />
            </div>
            <div className="content">
                <a className="header">{this.props.name}</a>
                <div className="meta">
                    <span className="date">Joined in {this.props.date}</span>
                </div>
                <div className="description">
                    {this.props.title}
                </div>
            </div>
            <div className="extra content">
                <a><i className="user icon"></i>{this.props.numFriends} Friends</a>
            </div>
        </div>);
    };
}

export default Profile;