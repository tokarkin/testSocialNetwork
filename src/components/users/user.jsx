import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../images/images.png';
import Paginator from "./paginator";

let Users = (props) => {
    let page = [];

    for (let i = props.currentPage  ; i <=props.currentPage+5 ; i++ ){
        page.push(i);
    };
    return <div className={s.container}>
        <ul className={s.list}>
          <Paginator page = {page} giveNewPage={ props.giveNewPage} />
        </ul>
        {props.users.map(u => <div key={u.id}>
                <span>

                    <div>
                         <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" height='80px'
                              width='80px'/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollows(u.id);
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                props.follows(u.id);
                            }
                            }>Follow</button>
                        }

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
                </span>
            </div>
        )}

    </div>
}

export default Users;