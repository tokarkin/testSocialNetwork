import React from 'react';
import sas from './Post.module.css';


const Post = (props) => {
    return (
        <div className="content">
            <div className={sas.post}>
                <div className={sas.item}>
                    <div className={sas.block}>
                        <div  className={sas.wrapper}>
                            <img className={sas.image}
                                src="https://makehimyours.com.au/wp-content/uploads/2016/11/Depositphotos_9830876_l-2015Optimised.jpg"
                                alt=""/>
                        </div>
                        <h3 className={sas.name}>{props.name} </h3>

                    </div>
                    <p className={sas.text_block}>{props.message}
                        <div className={sas.itemlike}>Like{props.likesCount}
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Post;