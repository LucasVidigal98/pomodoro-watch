import React from 'react';
import './styles.css';

class Timer extends React.Component{

    state = {
        timer: "",
        watch: new Number(), //Pomodoro 1, break 2
        temp: new Number(), //seconds - 1500 (25 min) 300 (5min)
        start: new Boolean(),
        stop: new Boolean(),
        reset: new Boolean()
    };

    componentDidMount(){
        this.setState({ timer: "25:00", watch: 1, temp:1500, start: false, stop: false, reset: false});
    };

    pomodoro = () => {
        this.setState({ timer: "25:00", watch: 1, temp: 1500, start: false, reset: true});
    };

    break = () => {
        this.setState({ timer: "05:00", watch: 2, temp: 300, start: false, reset: true });
    };

    sleep = (ms) => { return new Promise(resolve => setTimeout(resolve, ms)) };

    startTimer = async () => {
        var { watch, temp, start } = this.state;

        if(start) return;
        else this.setState({ start: true, stop: false, reset: false });
        
        while(true){
            if((temp-1) >= 0){
                var min = parseInt(temp/60);
                var sec = temp%60;

                if(min >= 10 && sec >= 10){
                    let t = "" + min + ":" + sec;
                    this.setState({ timer: t });
                }else if(min >= 10 && sec < 10){
                    let t = "" + min + ":0" + sec;
                    this.setState({ timer: t });
                }else if(min < 10 && sec >= 10){
                    let t = "0" + min + ":" + sec;
                    this.setState({ timer: t });
                }else{
                    let t = "0" + min + ":0" + sec;
                    this.setState({ timer: t });
                }

                temp = temp - 1;
                this.setState({ temp: temp });

                await this.sleep(1000);
                
                const { reset, stop } = this.state;
                if ((reset || stop)) break;

            }else{
                this.setState({ start:false });

                if(watch === 2){ 
                    this.pomodoro() 
                    alert('Break is finished, Go to work');
                }else{ 
                    this.break();
                    alert('Pomodoro if finished, Take a Break!'); 
                }

                return;
            }
        }
    }
    
    stop = () => {
        this.setState({ start: false, stop: true });
    }

    reset = () => {
        const { watch } = this.state;

        if(watch === 1){ this.pomodoro(); }else{ this.break(); }
    }

    render(){
        
        const { timer } = this.state;

        return(
            <div className="timer">
                <button onClick={this.pomodoro} id="pomodoro">Pomodoro</button>
                <button onClick={this.break} id="break">Break</button>
                <h1 id="timer">{timer}</h1>
                <button onClick={this.startTimer} className="btn-timer" id="start">Start</button>
                <button onClick={this.stop} className="btn-timer" id="stop">Stop</button>
                <button onClick={this.reset} className="btn-timer" id="reset">Reset</button>
            </div>
        );
    }
};

export default Timer;