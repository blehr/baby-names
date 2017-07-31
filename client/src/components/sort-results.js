import React from "react";
import PropTypes from "prop-types";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const SortResults = ({ sortBy, setSortOrder }) => {
  return (
    <div>
      <SelectField
        floatingLabelText="Sort Results"
        value={sortBy}
        onChange={setSortOrder}
        fullWidth={true}
      >
        <MenuItem key={1} value="Occurrences" primaryText="Occurrences" />
        <MenuItem key={2} value="Year" primaryText="Year" />
      </SelectField>
    </div>
  );
};

SortResults.propTypes = {
  sortBy: PropTypes.string,
  setSortOrder: PropTypes.func
};

export default SortResults;
