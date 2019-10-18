const xlsToJson = require('xls-to-json');

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
