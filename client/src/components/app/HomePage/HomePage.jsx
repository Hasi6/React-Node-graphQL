import React from "react";
import { connect } from "react-redux";
import { getApiData } from "../../../redux/actions/async/asyncAction";

const HomePage = ({ getApiData }) => {
  return <button onClick={() => getApiData()}>Get Data</button>;
};

export default connect(null, { getApiData })(HomePage);
