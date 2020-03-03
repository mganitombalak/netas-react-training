import React from 'react';
import faker from 'faker';

const Profile = () =>{
    return <a href="/" className="avatar"><img src={faker.image.avatar()}/></a>
}

export default Profile;