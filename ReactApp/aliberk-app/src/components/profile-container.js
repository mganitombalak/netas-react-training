import React from 'react';
import Profile from './profile'
import faker from 'faker';
const ProfileContainer = () => {
    return (<div className="ui four column grid">
        <div className="row">
            <div className="column"><Profile
                name={faker.name.firstName()}
                title={faker.name.title()}
                avatar={faker.image.avatar()}
                date={faker.date.weekday()}
                numFriends={faker.random.number(50)} /></div>
            <div className="column">
                <Profile
                    name={faker.name.firstName()}
                    title={faker.name.title()}
                    avatar={faker.image.avatar()}
                    date={faker.date.weekday()}
                    numFriends={faker.random.number(50)} />
            </div>
            <div className="column"></div>
            <div className="column"></div>
        </div>
        <div className="row">
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
        </div>
    </div>);
}

export default ProfileContainer;