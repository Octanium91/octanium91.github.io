import React, { Component } from 'react';
import './MainFrame.css';
var PlayButton;

class MainFrame extends Component {

    state = {
        GameRun: false,
        BallPreFrime: 50,
        color: 1,
        ObjectsCount: 0,
        ObjectsMaxCount: 200000,
        frames: 0
    }

    draw_dot = () => {
        var BallsCount = this.state.frames;
        while (BallsCount) {
            BallsCount--
            const ctx = this.refs.canvas.getContext("2d");
            var BallColor = "";
            const RandomColor = Math.floor(Math.random() * 3);
            if (BallColor === "" && RandomColor === 1) {
                BallColor = "red";
                // this.setState({color: 2})
            }
            if (BallColor === "" && RandomColor === 2) {
                BallColor = "white";
                // this.setState({color: 3})
            }
            // if (BallColor === "" && RandomColor === 0) {
            //     BallColor = "black";
            //     this.setState({color: 1})
            // }
            ctx.fillStyle = BallColor;
            ctx.beginPath();
            ctx.arc(Math.floor(Math.random() * 450), Math.floor(Math.random() * 450), 1, 0, 5 * Math.PI);
            ctx.fill();
            // ctx.stroke();
            this.setState({ObjectsCount: this.state.ObjectsCount+1})
        }
    }

    draw_frame = () => {
        this.setState({frames: this.state.frames+1})
        if (this.state.ObjectsCount > this.state.ObjectsMaxCount) {
            const ctx = this.refs.canvas.getContext("2d");
            ctx.clearRect(0, 0, 450, 450);
            this.setState({ObjectsCount: 0})
        }
        this.draw_dot();
        if (this.state.GameRun) {
            requestAnimationFrame(this.draw_frame);
        };
    }

    componentDidMount() {
        if (this.state.GameRun) {
            requestAnimationFrame(this.draw_frame);
        }
    }

    PressPlayBTN = () => {
        if (this.state.GameRun) {
            this.setState({GameRun: false});
        } else {
            this.setState({GameRun: true});
            requestAnimationFrame(this.draw_frame);
        }    
    }

    render() {
        
        if (this.state.GameRun) {
            PlayButton = <button className="PlayBTN" onClick={this.PressPlayBTN}>Pause</button>;
        } else {
            PlayButton = <button className="PlayBTN" onClick={this.PressPlayBTN}>Play</button>;
        }

        return (
            <div>
                <br/>
                <div className="Main_block">
                    <div className="Frame">
                        <canvas className="canvas_frame" ref="canvas" width={450} height={450} />
                        <div>{PlayButton}</div>
                    </div>
                    <div className="text">
                        <p align="left"> Random fill image :)<br/>
                        <br/>
                        Why is this needed?.... press 'Play' and look into the black square<br/>
                        red dots start to appear there fully randomly, and you can see something.<br/>
                        What will you see?... no one knows -_(-_-)_-<br/>
                        It all depends on your brain. It's made just for fun.<br/>
                        <br/>
                        <a href="https://github.com/Octanium91/octanium91.github.io/tree/master/random-fill-react">GitHub</a><br/>
                        <br/>
                        Created on React.</p>
                    </div>
                    {/* <div className="Statistic">
                        <table border="1" width="100%" cellpadding="5">
                        <tr>
                            <th>Statistic:</th>
                            <th>Frames ({this.state.frames})</th>
                            <th>Objects count ({this.state.ObjectsCount})</th>
                        </tr>
                        </table>
                        {/* <div className="Statistic-frames">Frames: {this.state.frames}</div>
                        <div className="Statistic-ObjCount">Objects count: {this.state.ObjectsCount}</div> */}
                    {/* </div>  */}
                </div> 
            </div>
        );
    }
}
export default MainFrame;