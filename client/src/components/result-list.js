import React from "react";
import PropTypes from "prop-types";
import { List, ListItem } from "material-ui/List";
import PersonIcon from "material-ui/svg-icons/social/person-outline";
import Paper from "material-ui/Paper";
import SortResults from "./sort-results";

const ResultList = ({ names, year, sortBy, setSortOrder }) => {
  return (
    <div>
      {year === 0 &&
        <Paper
          style={{
            maxWidth: "600px",
            margin: "auto",
            marginBottom: "10px",
            padding: "8px 15px"
          }}
        >
          <SortResults sortBy={sortBy} setSortOrder={setSortOrder} />
        </Paper>}
      <Paper style={{ maxWidth: "600px", margin: "auto" }}>
        <List style={{ maxWidth: "600px", margin: "auto" }}>
          {names.map(name =>
            <ListItem
              primaryText={
                <div>
                  {name.name}{" "}
                  <span style={{ fontSize: "85%" }}> - {name.year}</span>
                </div>
              }
              secondaryText={
                <p>
                  {name.sex === "M" ? "Male" : "Female"}, {name.occurrences}{" "}
                  Occurrences
                </p>
              }
              leftIcon={<PersonIcon />}
              key={name._id}
            />
          )}
        </List>
      </Paper>
    </div>
  );
};

ResultList.propTypes = {
  names: PropTypes.array,
  year: PropTypes.number,
  sortBy: PropTypes.string,
  setSortOrder: PropTypes.func
};

export default ResultList;
