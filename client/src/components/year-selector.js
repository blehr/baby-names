import React from "react";
import PropTypes from "prop-types";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const createYearsArray = (begin, end) => {
  const yearsArray = [];
  let count = begin;
  while (count <= end) {
    yearsArray.push(count);
    count++;
  }
  return yearsArray;
};

const items = createYearsArray(1880, 2016).map(year =>
  <MenuItem value={year} key={year} primaryText={year} />
);

items.push(<MenuItem value={0} key={0} primaryText="All Years" />);

const YearSelector = ({ year, screenSize, setYear }) => {
  return (
    <div>
      <SelectField
        value={year}
        onChange={setYear}
        maxHeight={200}
        floatingLabelText="Select Year"
        fullWidth={screenSize === "small"} 
      >
        {items}
      </SelectField>
    </div>
  );
};

YearSelector.propTypes = {
  year: PropTypes.number,
  screenSize: PropTypes.string,
  setYear: PropTypes.func
};

export default YearSelector;
