import React from "react";
import response from "./response";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";
import { Description } from "@material-ui/icons";

import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // LIVE API CALL
  const { data } = useGoogleSearch(term);

  // MOCK API CALL
  // const data = Response;

  //https://developers.google.com/custom-search/v1/using_rest

  // https://cse.google.com/cse/create/new

  // console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="google logo"
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              {/* <div className="searchPage__option  disable">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div> */}

              <div className="searchPage__option  disable">
                <DescriptionIcon />
                <Link to="#">News</Link>
              </div>
              <div className="searchPage__option  disable">
                <ImageIcon />
                <Link to="#">Images</Link>
              </div>
              <div className="searchPage__option  disable">
                <LocalOfferIcon />
                <Link to="#">Shopping</Link>
              </div>
              <div className="searchPage__option  disable">
                <RoomIcon />
                <Link to="#">Maps</Link>
              </div>
              <div className="searchPage__option  disable">
                <MoreVertIcon />
                <Link to="#">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div>
                <Link to="#">Settings</Link>
              </div>
              <div>
                <Link to="#">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              {item.pagemap?.cse_image?.length > 0 &&
                item.pagemap?.cse_image[0]?.src && (
                  <img
                    className="searchPage__resultImage"
                    src={
                      item.pagemap?.cse_image?.length > 0 &&
                      item.pagemap?.cse_image[0]?.src
                    }
                    alt=""
                  />
                )}

              <a className="searchPage__resultLink" href={item.link}>
                {item.displayLink} ▼
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
