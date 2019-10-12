import React, { Component } from "react";
import "./App.css";
import ImgRock from "./img/rock.png";
import ImgScissors from "./img/scissors.png";
import ImgPaper from "./img/paper.png";
var button;

class App extends Component {
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

  render() {
    if (this.state.MainBtnDis) {
      button = <button className="send" disabled title="Сначала выбери действие - дружок">Испытай свою удачу!</button>
    } else {
      button = <button className="send" title="Сначала выбери действие - дружок" onClick={this.GemaOn}>Испытай свою удачу!</button>
    }

    const stGame = this.state.StartGame && <p className="game">{this.state.GameText}</p>
    const pcChoiceRock = this.state.pcChoiceRock && <div className="pc-choice" ><p>Я выбрал камень!</p></div>
    const pcChoiceScissors = this.state.pcChoiceScissors && <div className="pc-choice" ><p>Я выбрал ножницы!</p></div>
    const pcChoicePaper = this.state.pcChoicePaper && <div className="pc-choice" ><p>Я выбрал бумагу!</p></div>

    return (
      <div className="Main">
        <h1>Привет Друг, давай сыграем с тобой в игру!</h1>
        <p>{this.state.GameUpText}</p>
        <br />
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
          {button}
          <div>{stGame}</div>
        </div>
      </div>
    );
  }

  SelectGroup = object => {
    this.setState({ UserSelect: object.target.value });
    this.setState({ MainBtnDis: false,
      StartGame: false,
      pcChoiceRock: false,
      pcChoiceScissors: false,
      pcChoicePaper: false });
    this.setState({ GameUpText: this.ReturnPhrase_lp() });
  };

  GemaOn = () => {
    this.setState({
      pcChoiceRock: false,
      pcChoiceScissors: false,
      pcChoicePaper: false });
    this.setState({
      GameText: this.AnswerFromPC(
        this.state.UserSelect,
        Math.floor(Math.random() * 3).toString()
      )
    });
    this.setState({ GameUpText: this.ReturnPodeb() });
    this.setState({ StartGame: true });
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

    if (pc === '0') this.setState({ pcChoiceRock: true})
    if (pc === '1') this.setState({ pcChoiceScissors: true})
    if (pc === '2') this.setState({ pcChoicePaper: true})

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

export default App;
