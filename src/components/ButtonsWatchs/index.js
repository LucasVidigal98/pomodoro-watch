import React from 'react';
import Timer from '../Timer';
import './styles.css';

const ButtonsWatchs = () => (

    <div className="watchs">
        <button onClick={Timer.pomodoro} id="pomodoro">Pomodoro</button>
        <button onClick={Timer.break} id="break">Break</button>
    </div>

);

export default ButtonsWatchs;