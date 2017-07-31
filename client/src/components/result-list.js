import React from "react";
import PropTypes from "prop-types";
import { List, ListItem } from "material-ui/List";
import PersonIcon from "material-ui/svg-icons/social/person-outline";
import Paper from "material-ui/Paper";

const ResultList = ({ names }) => {
  return (
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
  );
};

ResultList.propTypes = {
  names:  PropTypes.array
};

export default ResultList;
