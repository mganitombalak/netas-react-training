import React from 'react';
import faker from 'faker';

const Profile = () =>{
    return <img src={faker.image.avatar()}/>
}

export default Profile;