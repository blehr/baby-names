const Name = require("../models/names");

exports.getQuery = async (req, res, next) => {
  const { sex, year, name } = req.params;

  const querySelector = {};

  if (sex !== "0") {
    querySelector.sex = sex;
  }

  if (year !== "0") {
    querySelector.year = year;
  }

  if (name !== "0") {
    querySelector.name = name;
  }

  try {
    const result = await Name.find(querySelector).limit(140).sort({occurrences: -1});

    res.json(result);
  } catch (err) {
    next(err);
  }
};
