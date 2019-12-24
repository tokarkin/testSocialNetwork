import React from "react";
import s from "./Users.module.css";

let Paginator =(props) =>{

    return <div>
        <ul className={s.list}>
            {props.page.map(p => {
                    return <div
                        onClick={(e) => {props.giveNewPage(p)}}
                        value={props.currentPage} className={props.currentPage ===p && s.current}>
                        <span className={s.li}>{p}</span>
                        <span lassName={s.li}>{p[100]}</span>
                    </div   >
                }
            )
            }
        </ul>
        </div>

}

export default Paginator;