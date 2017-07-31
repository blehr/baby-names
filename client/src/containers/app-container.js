import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../actions";
import Layout from "../components/layout";
import YearSelector from "../components/year-selector";
import SexSelector from "../components/sex-selector";
import NameSelector from "../components/name-selector";
import RaisedButton from "material-ui/RaisedButton";
import ResultList from "../components/result-list";
import LoadingIndictor from "../components/loading-indictor";
import Graph from "../components/graph";

const controlStyleLarge = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  flexWrap: "wrap",
  maxWidth: "600px",
  margin: "auto",
  alignItems: "flex-end"
};
const controlStyleSmall = {
  display: "flex",
  alignItems: "stretch",
  justifyContent: "space-around",
  flexDirection: "column",
  flexWrap: "wrap",
  width: "100%",
  height: "200px"
};

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.setYear = this.setYear.bind(this);
    this.setSex = this.setSex.bind(this);
    this.setName = this.setName.bind(this);
    this.fetchNames = this.fetchNames.bind(this);
    this.setSortOrder = this.setSortOrder.bind(this);
    this.screenSize = "";
  }
  setYear(event, index, value) {
    this.props.setYear(value);
  }
  setSex(event, index, value) {
    this.props.setSex(value);
  }
  setName(event) {
    this.props.setName(event.target.value);
  }
  setSortOrder(event, index, value) {
    this.props.setSortOrder(value);
  }
  fetchNames() {
    this.props.fetchNames(
      this.props.year,
      this.props.sex,
      this.props.name || 0
    );
  }
  render() {
    if (window.matchMedia("(max-width: 600px)").matches) {
      this.screenSize = "small";
    } else {
      this.screenSize = "large";
    }
    return (
      <Layout>
        <div
          style={
            this.screenSize === "large" ? controlStyleLarge : controlStyleSmall
          }
        >
          <YearSelector
            year={this.props.year}
            setYear={this.setYear}
            screenSize={this.screenSize}
          />
          <SexSelector
            sex={this.props.sex}
            setSex={this.setSex}
            screenSize={this.screenSize}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "Column",
            maxWidth: "600px",
            margin: "auto"
          }}
        >
          <NameSelector
            name={this.props.name}
            setName={this.setName}
            screenSize={this.screenSize}
          />
          <RaisedButton
            label="Search"
            primary={true}
            onTouchTap={this.fetchNames}
            style={{ marginBottom: "15px", marginTop: "15px" }}
            fullWidth
          />
        </div>
        <div style={{minHeight: "75vh"}} >
          {this.props.year === 0 && <Graph names={this.props.names} />}
          {this.props.names.length !== 0 &&
            <ResultList
              names={this.props.names}
              year={this.props.year}
              sortBy={this.props.sortBy}
              setSortOrder={this.setSortOrder}
            />}
        </div>
        <LoadingIndictor isFetching={this.props.isFetching} />
      </Layout>
    );
  }
}

AppContainer.propTypes = {
  setYear: PropTypes.func,
  setSex: PropTypes.func,
  setName: PropTypes.func,
  fetchNames: PropTypes.func
};

const mapStateToProps = ({ query, names }) => ({
  year: query.year,
  sex: query.sex,
  name: query.name,
  isFetching: query.isFetching,
  names: names.results,
  sortBy: names.sortBy
});

export default connect(mapStateToProps, actions)(AppContainer);
