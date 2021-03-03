import React from "react";
import PropTypes from "prop-types";

function Movies({ id, year, title, summary, poster }) {
  return <h4>{title}</h4>;
}

//api로 얻은 데이터를 보관함
Movies.prototype = {
  id: PropTypes.number.isRequire,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movies;