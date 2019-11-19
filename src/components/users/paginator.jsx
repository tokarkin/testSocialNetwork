import React from "react";
import s from "./Users.module.css";

let Paginator =(props) =>{
    return <div>
        <ul className={s.list}>
            {props.page.map(p => {
                    return <li
                        onClick={(e) => {props.giveNewPage(p)}}
                        value={props.currentPage} className={props.currentPage ===p && s.current}>
                        {p}
                    </li>
                }
            )
            }
        </ul>
        </div>

}

export default Paginator;