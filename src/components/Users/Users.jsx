import React from 'react'
import UserProfile from "./Post/UsersProfil";
import s from './Users.module.css'

const Users = (props) => {

   if(props.users.length===0){
       let users =[
           {
               id: '1',
               photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG-8YvBQ8-fLzhFkEBkryb4BzeHmhtdabVl1FpwzxwV0MfDhTi',
               followed: true,
               fullName: 'Svetlana M.',
               status: 'I am so pretty',
               location: {city: 'Minsk', country: 'Belarus,'}
           },
           {
               id: '2',
               photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG-8YvBQ8-fLzhFkEBkryb4BzeHmhtdabVl1FpwzxwV0MfDhTi',
               followed: false,
               fullName: 'Andrew T.',
               status: 'I like football!!!',
               location: {city: 'Minsk', country: 'Belarus,'}
           },
           {
               id: '3',
               photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG-8YvBQ8-fLzhFkEBkryb4BzeHmhtdabVl1FpwzxwV0MfDhTi',
               followed: true,
               fullName: 'Dmitry K.',
               status: 'I am looking for a Job right now...',
               location: {city: 'Minsk', country: 'Belarus,'}
           },
           {
               id: '4',
               photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG-8YvBQ8-fLzhFkEBkryb4BzeHmhtdabVl1FpwzxwV0MfDhTi',
               followed: false,
               fullName: 'Aleks',
               status: 'I am a boss',
               location: {city: 'Minsk', country: 'Belarus,'}
           },
       ];
       props.setUsers(users)
   }


    let user = props.users.map(post => <UserProfile key={post.id} props={post} setFollow={props.setFollow} setUnFollow={props.setUnFollow}/>);
    return (
        <div className={s.wrapper}>
            {user}
            <button className={s.button}>Show more</button>
        </div>
    )
};

export default Users;




