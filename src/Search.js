import { useState, useEffect, useRef } from "react";
import "./search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import useTypewriter from "react-typewriter-hook";

// const MagicOcean = [
//   "Fine, I ' ll show you again",
//   "Yo, did you  see that?",
//   ":) bye :) ",
// ];
let index = 0;

function Search({ hideButtons = false }, props) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  /////////////////////////////////////////////////////////
  // const [magicName, setMagicName] = useState("magic is going to happen");
  // const intervalRef = useRef({});
  // const name = useTypewriter(magicName);
  // useEffect(() => {
  //   intervalRef.current = setInterval(() => {
  //     // index = index + 1 > 2 ? 0 : ++index + 1;
  //     index = index > 2 ? 0 : ++index;
  //     setMagicName(MagicOcean[index]);
  //   }, 5000);
  //   return function clear() {
  //     clearInterval(intervalRef.current);
  //   };
  // }, [magicName]);

  ////////////////////////////////////////////////////

  const search = (e) => {
    e.preventDefault();
    console.log("You hit the search button");
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };

  function pointer() {
    return (
      "" +
      setInterval(() => {
        return;
      }, 500)
    );
  }

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon"></SearchIcon>

        {/* <div className={"search__input__cursor"}>{name}</div> */}
        <input
          // className="search__input__cursor"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={""}
          // placeholder={
          //   name
          //     ? name.length % 2 === 0
          //       ? "" + name + ""
          //       : "" + name + "|"
          //     : name
          // }
        />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky </Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            class="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button class="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
