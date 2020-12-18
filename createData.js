const fs = require('fs'); // * Work with files
// const crypto = require('crypto'); // * Creating id
const { data } = require('./apps.json'); //* db

// * Create screens
function listToMatrix(list, elementsPerSubArray) {
  const matrix = { data: {} };
  // eslint-disable-next-line one-var
  let i, k, r, screenName, rowName;
  matrix.data.menu = [...data.slice(0, 5)];
  matrix.data.screenOrder = [];
  for (i = 0, k = 0; i < list.length; i += 1) {
    if (i % elementsPerSubArray === 0) {
      k += 1;
      r = 0;
      screenName = `screen-${k}`;
      rowName = `row-${r}`;
      matrix.data[screenName] = {
        id: screenName,
        apps: {},
        appsOrder: { rowNames: [] },
      };
      matrix.data.screenOrder.push(screenName);
    }
    if (i % 5 === 0) {
      r += 1;
      rowName = `row-${r}`;
      matrix.data[screenName].appsOrder[rowName] = [];
      matrix.data[screenName].appsOrder.rowNames.push(rowName);
    }
    // eslint-disable-next-line no-param-reassign
    list[i].id = list[i].content;
    // crypto
    //   .createHmac('sha256', list[i].content)
    //   .digest('hex')
    //   .slice(0, 16);
    matrix.data[screenName].appsOrder[rowName].push(list[i].id);
    matrix.data[screenName].apps[list[i].id] = list[i];
  }
  return matrix;
}
const newDataForDnD = listToMatrix(data.slice(5), 20);

fs.writeFileSync(
  'dataForDnDWithId.json',
  JSON.stringify(newDataForDnD, null, 2)
);
// * End create screens

// * Create id
// const newArr = [];
// arr.forEach(item => {
//   const newItem = { ...item };
//   newItem.id = crypto.createHmac('sha256', item.content).digest('hex');
//   newArr.push(newItem);
// });
// fs.writeFileSync('apps.json', JSON.stringify(newArr, null, 2));
// * End create id
