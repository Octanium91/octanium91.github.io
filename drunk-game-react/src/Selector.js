import React, { Component } from "react";
import "./App.css";
import ImgRock from "./img/rock.png";
import ImgScissors from "./img/scissors.png";
import ImgPaper from "./img/paper.png";
import Button from "./Button";
var button;

class Selector extends Component {

    state = {
        MainBtnDis: true,
        StartGame: true,
        GameText: "Да начнеться игра!",
        GameUpText: "Ahahahah!! Нуже, выбирай!Не бойся",
        UserSelect: null,
        pcChoiceRock: false,
        pcChoiceScissors: false,
        pcChoicePaper: false
    };

    StateSet = (MassValues) => {
        this.setState(MassValues)
    };

    StateGet = (StateName) => {
        return(this.state[StateName]);
    };

    render() {

        if (this.state.MainBtnDis) {
            button = <button className="send" disabled title="Сначала выбери действие - дружок">Испытай свою удачу!</button>
        } else {
            button = <button className="send" title="Сначала выбери действие - дружок" onClick={this.GemaOn}>Испытай свою удачу!</button>
        };

        if (this.state.GameUpText !== this.props.StateGet("GameUpText")) {
            this.props.StateSet({GameUpText: this.state.GameUpText});
        }
      
        const stGame = this.state.StartGame && <p className="game">{this.state.GameText}</p>
        const pcChoiceRock = this.state.pcChoiceRock && <div className="pc-choice" ><p>Я выбрал камень!</p></div>
        const pcChoiceScissors = this.state.pcChoiceScissors && <div className="pc-choice" ><p>Я выбрал ножницы!</p></div>
        const pcChoicePaper = this.state.pcChoicePaper && <div className="pc-choice" ><p>Я выбрал бумагу!</p></div>

        return (           
            <div className="Selector">
          <div className="select-group">
            <div className="select-box">
            {pcChoiceRock}
              <label className="select">
                <input
                  type="radio"
                  name="user-choice"
                  value={0}
                  className="checkbox"
                  onClick={this.SelectGroup}
                />
                <span>
                  <img src={ImgRock} alt="" />
                  <p>Камень</p>
                </span>
              </label>
            </div>
            <div className="select-box">
            {pcChoiceScissors}
              <label className="select">
                <input
                  type="radio"
                  name="user-choice"
                  value={1}
                  className="checkbox"
                  onClick={this.SelectGroup}
                />
                <span>
                  <img src={ImgScissors} alt="" />
                  <p>Ножницы</p>
                </span>
              </label>
            </div>
            <div className="select-box">
            {pcChoicePaper}
              <label className="select">
                <input
                  type="radio"
                  name="user-choice"
                  value={2}
                  className="checkbox"
                  onClick={this.SelectGroup}
                />
                <span>
                  <img src={ImgPaper} alt="" />
                  <p>Бумага</p>
                </span>
              </label>
            </div>
          </div>
          <Button StateSet={this.StateSet} StateGet={this.StateGet}/>
          <div>{stGame}</div>
        </div>

        );
    }

    SelectGroup = object => {
        this.setState({ 
          UserSelect: object.target.value,
          MainBtnDis: false,
          StartGame: false,
          pcChoiceRock: false,
          pcChoiceScissors: false,
          pcChoicePaper: false,
          GameUpText: this.ReturnPhrase_lp() });
        this.props.StateSet({GameUpText: this.state.GameUpText});
      };
    
      ReturnPhrase_lp = () => {
        let phrases = [
          "Сделай выбор!",
          "Давай сыграем еще!",
          "Куколд выбирай давай!",
          "Камень? Ножницы? или Бумага? что выберешь?",
          "Если не выберешь в течении 5 секунд ты ГЕЙ!",
          "Давай еще!",
          "Если не сыкун, сделаешь выбор :D"
        ];
    
        return phrases[Math.floor(Math.random() * phrases.length)];
      };

}

export default Selector;