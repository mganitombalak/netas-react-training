import React from 'react';
import Profile from '../../components/dashboard/profile'
import Card from '../../components/dashboard/card';
import faker from 'faker';
const ProfileList = () => {
    let Profiles = [{
        firstName: faker.name.firstName(),
        title: faker.name.title(),
        avatar: faker.image.avatar(),
        date: faker.date.weekday(),
        numFriends: faker.random.number(50)
    },
    {
        firstName: faker.name.firstName(),
        title: faker.name.title(),
        avatar: faker.image.avatar(),
        date: faker.date.weekday(),
        numFriends: faker.random.number(50)
    },
    {
        firstName: faker.name.firstName(),
        title: faker.name.title(),
        avatar: faker.image.avatar(),
        date: faker.date.weekday(),
        numFriends: faker.random.number(50)
    }
        , {
        firstName: faker.name.firstName(),
        title: faker.name.title(),
        avatar: faker.image.avatar(),
        date: faker.date.weekday(),
        numFriends: faker.random.number(50)
    }, {
        firstName: faker.name.firstName(),
        title: faker.name.title(),
        avatar: faker.image.avatar(),
        date: faker.date.weekday(),
        numFriends: faker.random.number(50)
    },
    {
        firstName: faker.name.firstName(),
        title: faker.name.title(),
        avatar: faker.image.avatar(),
        date: faker.date.weekday(),
        numFriends: faker.random.number(50)
    },
    {
        firstName: faker.name.firstName(),
        title: faker.name.title(),
        avatar: faker.image.avatar(),
        date: faker.date.weekday(),
        numFriends: faker.random.number(50)
    }
    ];
    //console.log(Profiles);
    return (<div className="ui four column grid">
        {Profiles.map((profile, index) => {
           return <div key={index} className="column">
               <Card><Profile {...profile} /></Card>
           </div>
        //    name={profile.firstName}
        //         title={profile.title}
        //         avatar={profile.avatar}
        //         date={profile.date}
        //         numFriends={profile.numFriends}
        })}

    </div>);
}

export default ProfileList;