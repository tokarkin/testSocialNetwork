import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../images/images.png';
import Paginator from "./paginator";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let page = [];

    for (let i = props.currentPage; i <= props.currentPage + 5; i++) {
        page.push(i);
    };

    return <div className={s.container}>
        <ul className={s.list}>
            <Paginator page={page} giveNewPage={props.giveNewPage}/>
        </ul>
        {props.users.map(u => <div key={u.id}>
                <span>
                    <NavLink to={'/profile/'+ u.id}>
                            <div>
                                 <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" height='80px'
                                      width='80px'/>
                            </div>
                            <span>
                                <span>
                                    <div>
                                        {u.name}
                                        <div>
                                               {u.id}
                                        </div>

                                    </div>
                                    <div>
                                        {u.status}
                                    </div>
                                </span>
                            </span>
                    </NavLink>

                       <div>
                        {u.followed ?
                            <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                    withCredentials:true,
                                    headers:{
                                        "API-KEY":'08ed710d-07d6-4700-a583-087538191af2',
                                    },
                                    },
                                ).then(response => {
                                    if (response.data.resultCode === 0){

                                        props.unfollows(u.id);
                                    }
                                })
                            }}>Unfollow</button>
                            :
                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                    withCredentials:true,
                                    headers:{
                                        "API-KEY":'08ed710d-07d6-4700-a583-087538191af2'
                                    }}).then(response => {
                                    if (response.data.resultCode === 0){
                                        props.follows(u.id);
                                    }
                                })

                            }
                            }>Follow</button>
                        };

                    </div>
                </span>
            </div>
        )}

    </div>
}

export default Users;