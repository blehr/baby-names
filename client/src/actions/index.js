import axios from "axios";

import {
  SELECTED_YEAR,
  SELECTED_SEX,
  SELECTED_NAME,
  IS_FETCHING,
  SET_RESULTS
} from "./types";

export const setYear = year => ({
  type: SELECTED_YEAR,
  payload: year
});

export const setSex = sex => ({
  type: SELECTED_SEX,
  payload: sex
});

const capitalizeFirstLetter = str => {
  str = str.trim();
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export const setName = name => ({
  type: SELECTED_NAME,
  payload:capitalizeFirstLetter(name)
});

export const isFetchingData = value => ({
  type: IS_FETCHING,
  payload: value
});

export const setResults = data => ({
  type: SET_RESULTS,
  payload: data
})

export const fetchNames = (year, sex, name) => {
  return dispatch => {
    dispatch(isFetchingData(true));
    axios.get(`/api/${year}/${sex}/${name}`)
      .then(response => {
        dispatch(setResults(response.data));
        dispatch(isFetchingData(false));
      }).catch(err => {
        console.log(err.response.data);
        dispatch(isFetchingData(false));
      });
  };
};
