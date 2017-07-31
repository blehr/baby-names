import React from "react";
import PropTypes from "prop-types";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const items = [
  <MenuItem value="M" key="M" primaryText="Male" />,
  <MenuItem value="F" key="F" primaryText="Female" />
];

const SexSelector = ({ sex, screenSize, setSex }) => {
  return (
    <div>
      <SelectField
        value={sex}
        onChange={setSex}
        floatingLabelText="Select Gender"
        fullWidth={screenSize === "small"}
      >
        {items}
      </SelectField>
    </div>
  );
};

SexSelector.propTypes = {
  screenSize: PropTypes.string,
  setSex: PropTypes.func
};

export default SexSelector;
