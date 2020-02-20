import React from 'react';
import './styles.css';

class Timer extends React.Component{

    state = {
        timer: "25:00",
    };

    componentDidMount(){
        this.setState({ timer: "25:00" });
    };

    pomodoro = () => {
        console.log('aqui');
        this.setState({ timer: "25:00" });
    };

    break = () => {
        this.setState({ timer: "05:00" });
    };
    
    render(){
        
        const { timer } = this.state;

        return(
            <div className="timer">
                <button onClick={this.pomodoro} id="pomodoro">Pomodoro</button>
                <button onClick={this.break} id="break">Break</button>
                <h1 id="timer">{timer}</h1>
            </div>
        );
    }
};

export default Timer;