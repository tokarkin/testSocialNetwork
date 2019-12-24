import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../images/images.png';
import Paginator from "./paginator";
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let page = [];
console.log(props);
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
                            <button disabled={props.followingInProgress.some(id => id===u.id)} onClick={() => {
                               props.unfollow(u.id)}}>Unfollow</button>
                            :
                            <button disabled={props.followingInProgress.some(id => id===u.id)}  onClick={() => {
                                props.follow(u.id)}}>Follow</button>
                        };
                    </div>
                </span>
            </div>

        )}

    </div>
}

export default Users;