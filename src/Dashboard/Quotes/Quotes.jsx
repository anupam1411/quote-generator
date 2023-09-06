import React, { Component } from "react";
import QuoteAuthor from "../Components/QuoteAuthor";
import QuotesText from "../Components/QuotesText";
import Buttons from "../Components/Buttons";
import axios from "axios";

export class Quotes extends Component {
  state = {
    quote: "Peace Has Cost you Your Strength, Victory has Defeated YOU",
    author: "BANE",
    quotesData: [],
    color: "rgb(243,156,18)",
  };

  randomColor = () => {
    let colorPatterns = "1234567890ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += colorPatterns[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  componentDidMount() {
    if (this.state.quotesData.length > 0) {
      return;
    } else {
      this.fetchQuotes();
    }
  }

  fetchQuotes = () => {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((res) => {
        const quotesData = [...res.data.quotes];
        const color = this.randomColor;
        document.body.style.backgroundColor = color;

        this.setState({
          quotesData: quotesData,
          color: color,
        });
      })
      .catch((error) => console.log(error));
  };

  handleClick = () => {
    let randomIndex = Math.floor(Math.random() * 16);
    let { quote, author } = this.state.quotesData[randomIndex];

    const color = this.randomColor();
    document.body.style.color = color;
    document.body.style.backgroundColor = color;

    this.setState({
      quote: quote,
      author: author,
      color: color,
    });
  };

  render() {
    return (
      <div className="flex items-center text-center bg-blend-lighten justify-center min-h-screen">
        <div
          id="quote-box"
          className="bg-white h-60v w-60v rounded-md grid grid-rows-3 grid-flow-col"
        >
          <div className="text-lg font-bold">
            <QuotesText quote={this.state.quote} color={this.state.color} />
          </div>
          <div>
            <QuoteAuthor
              author={this.state.author}
              color={this.state.color}
              className=""
            />
          </div>
          <div className="rounded-full grid grid-cols-3 items-center opacity-50 ">
            <div></div>
            <Buttons handleClick={this.handleClick} color={this.state.color} />
          </div>
        </div>
      </div>
    );
  }
}

export default Quotes;
