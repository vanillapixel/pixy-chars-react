import React, { Fragment, Component } from "react";
import Preview from "./components/Preview";

class App extends Component {
  constructor() {
    super();
    this.handleCharactersChange = this.handleCharactersChange.bind(this);
    this.state = {
      charactersDatabase: {
        a: ["ooooo", "oxxxo", "ooooo", "oxxxo", "oxxxo"],
        b: ["oooox", "oxxxo", "oooox", "oxxxo", "oooox"],
        c: ["ooooo", "oxxxx", "oxxxx", "oxxxx", "ooooo"],
        d: ["oooox", "oxxxo", "oxxxo", "oxxxo", "oooox"],
        e: ["ooooo", "oxxxx", "oooxx", "oxxxx", "ooooo"],
        f: ["ooooo", "oxxxx", "oooxx", "oxxxx", "oxxxx"],
        g: ["ooooo", "oxxxx", "oxxoo", "oxxxx", "ooooo"],
        h: ["oxxxo", "oxxxo", "ooooo", "oxxxo", "oxxxo"],
        i: ["o", "o", "o", "o", "o"],
        //TODO: review J
        j: ["xxo", "xxx", "xoo", "xxo", "xxo", "xxo", "oox"],
        k: ["oxxo", "oxox", "ooxx", "oxox", "oxxo"],
        l: ["oxxxx", "oxxxx", "oxxxx", "oxxxx", "ooooo"],
        m: ["oxxxo", "ooxoo", "oxoxo", "oxxxo", "oxxxo"],
        n: ["oxxxo", "ooxxo", "oxoxo", "oxxoo", "oxxxo"],
        o: ["ooooo", "oxxxo", "oxxxo", "oxxxo", "ooooo"],
        p: ["ooooo", "oxxxo", "ooooo", "oxxxx", "oxxxx"],
        q: ["xxxxx", "xxxxx,", "ooooo", "oxxxo", "ooooo", "xxxxo", "xxxxo"],
        r: ["oooox", "oxxxo", "oooox", "oxxox", "oxxxo"],
        s: ["ooooo", "oxxxx", "ooooo", "xxxxo", "ooooo"],
        t: ["ooooo", "xxoxx", "xxoxx", "xxoxx", "xxoxx"],
        u: ["oxxxo", "oxxxo", "oxxxo", "oxxxo", "ooooo"],
        v: ["oxxxo", "oxxxo", "oxxxo", "xoxox", "xxoxx"],
        w: ["oxxxo", "oxxxo", "oxxxo", "oxoxo", "xoxox"],
        x: ["oxxxo", "xoxox", "xxoxx", "xoxox", "oxxxo"],
        y: ["oxxxo", "oxxxo", "ooooo", "xxxxo", "ooooo"],
        z: ["ooooo", "xxxox", "xxoxx", "xoxxx", "ooooo"],
        space: ["xxx", "xxx", "xxx", "xxx", "xxx"],
        heart: ["xoxox", "oxoxo", "oxxxo", "xoxox", "xxoxx"],
      },
      config: {
        blocksDims: {
          width: "20px", // '.on' + '.off'
          height: "20px", // '.on' + '.off'
        },
        blocksGap: {
          horizontal: "0px", // '.on' + '.off'
          vertical: "0px", // '.on' + '.off'
        },
        gapBetweenChars: {
          horizontal: "20px", // '.char'
          vertical: "20px", // '.space'
        },
        blockBorderRadius: 0, // '.on' + '.off'
        colors: {
          blockBorderColor: "red",
          containerBackgroundColor: "inherit",
        },
        misc: {
          limitDisplayedChars: 6,
          containerBorder: "0px",
          containerWrap: false, // same effect as text-wrap
          containerOverflow: false,
          verticalAlign: "center",
          animation: "slide",
        },
      },
      characters: "pitone",
    };
  }
  handleCharactersChange(e) {
    e.preventDefault();
    this.setState({ characters: e.target.value });
  }
  render() {
    return (
      <Fragment>
        <Preview
          database={this.state.charactersDatabase}
          characters={this.state.characters}
        />
        <input
          type="text"
          maxLength={this.state.config.misc.limitDisplayedChars}
          value={this.state.characters}
          onChange={this.handleCharactersChange}
        />
      </Fragment>
    );
  }
}

export default App;
