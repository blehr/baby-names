const fs = require("fs");
const parse = require("csv-parse/lib/sync");

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/babyNames", {
  useMongoClient: true
});
const Name = require("../models/names");

const getFilesArray = () =>
  fs.readdirSync("names").filter(line => line.endsWith(".txt"));

const parseLines = (parsedFile, year) => {
  const docArray = [];
  parsedFile.forEach(line => {
    const newName = new Name();
    newName.year = year;
    newName.name = line[0];
    newName.sex = line[1];
    newName.occurrences = +line[2];

    docArray.push(newName);
  });
  Name.insertMany(docArray, function(err, docs) {
    if (err) return err;
  });
};

function loadDB(allFiles, counter) {
  console.log(counter);

  const len = allFiles.length;

  if (counter === len) return;

  const file = allFiles[counter];

  const fileYear = file.substr(3, 4);
  console.log(fileYear);

  const fileData = fs.readFileSync(`names/${file}`, { encoding: "utf8" });

  const parsedData = parse(fileData);

  parseLines(parsedData, fileYear);

  counter++;

  const timer = setTimeout(() => loadDB(allFiles, counter), 5000);
}

const filesArray = getFilesArray();
loadDB(filesArray, 0);
