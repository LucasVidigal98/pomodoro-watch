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
                <h1 id="timer">{timer}</h1>
                <button onClick={this.break}>aaa</button>
                <button onClick={this.pomodoro}>bbbb</button>
            </div>
        );
    }
};

export default Timer;