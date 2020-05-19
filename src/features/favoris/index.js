import React from "react";
import FavoriList from "./components/favoris-list/FavorisList";
import { Loaded } from "../../components";

export default (props) => {
  return (
    <div className="d-flex flex-row flex-fill pt-4 p-2">
      {props.loaded ? (
        <div className="d-flex flex-row flex-fill pt-4 p-2">
          <FavoriList
            favoris={props.favoris}
            removeFavori={props.removeFavori}
          />
        </div>
      ) : (
        <Loaded />
      )}
    </div>
  );
};
