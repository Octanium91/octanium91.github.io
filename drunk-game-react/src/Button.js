import React, { Component } from "react";
import "./App.css";
var button;

class Button extends Component {

    render() {

        if (this.props.StateGet("MainBtnDis")) {
            button = <button className="send" disabled title="Сначала выбери действие - дружок">Испытай свою удачу!</button>
        } else {
            button = <button className="send" title="Сначала выбери действие - дружок" onClick={this.GemaOn}>Испытай свою удачу!</button>
        }

        return( 
            <div>{button}</div>   
        );
        
    }

    GemaOn = () => {
        this.props.StateSet({
          pcChoiceRock: false,
          pcChoiceScissors: false,
          pcChoicePaper: false,
          GameUpText: this.ReturnPodeb(),
          StartGame: true});
        this.props.StateSet({
          GameText: this.AnswerFromPC(
            this.props.StateGet("UserSelect"),
            Math.floor(Math.random() * 3).toString()
          )
        });
    };

    ReturnPodeb = () => {
        let phrases = [
          "хм... неплохой выбор",
          "Уверен?",
          "Говно выбор",
          "Ты говно как и твой выбор",
          "Мне кажется ты продуешь :)",
          "Выбор хорош, но ты гей",
          "Гейский выбор..."
        ];
    
        return phrases[Math.floor(Math.random() * phrases.length)];
    };
    
    AnswerFromPC = (user, pc) => {
    
        if (pc === '0') this.props.StateSet({ pcChoiceRock: true})
        if (pc === '1') this.props.StateSet({ pcChoiceScissors: true})
        if (pc === '2') this.props.StateSet({ pcChoicePaper: true})
    
        if (user === pc) {
          return "Никто не победил! Попробуй еще раз";
        } else if (user === '0') {
          if (pc === '1') {
            return "Сегодня твой день! Камень победил!";
          } else {
            return "Не повезло, дружок! Бумага победила!";
          }
        } else if (user === '2') {
          if (pc === '0') {
            return "Сегодня твой день! Бумага победила!";
          } else {
            return "Не повезло, дружок! Ножницы победили!";
          }
        } else if (user === '1') {
          if (pc === '2') {
            return "Сегодня твой день! Ножницы победили!";
          } else {
            return "Не повезло, дружок! Камень победил!";
          }
        }
    };

}

export default Button;