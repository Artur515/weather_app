import React from 'react';
import style from './style.module.css'

const Loader = (props) => {
    const word = props.props.split('').reverse()

    // console.log(word)
    return (
        <div className={style.load}>
            {word.map((char) => {
                return <div key={char}>{char}</div>
            })}
            {/*<div>G</div>*/}
            {/*<div>N</div>*/}
            {/*<div>I</div>*/}
            {/*<div>D</div>*/}
            {/*<div>A</div>*/}
            {/*<div>O</div>*/}
            {/*<div>L</div>*/}
        </div>
    );
};

export default Loader;