const xlsToJson = require('xls-to-json');
// excelent package in npm for this... but with csv import thi is sort of meaningless

xlsToJson(
  {
    input: 'Input.xlsx',
    output: 'output.json',
    sheet: 'Sheet1'
  },
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  }
);
