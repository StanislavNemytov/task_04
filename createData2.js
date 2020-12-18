const fs = require('fs'); //* Work with files
const { data } = require('./apps.json'); //* db

//* Create screens
function listToMatrix(list, elementsPerSubArray) {
  const matrix = { data: {} };
  let i;
  let k;
  let screenName;
  matrix.data.menu = [...data.slice(0, 5)];
  matrix.data.screenOrder = [];

  for (i = 0, k = 0; i < list.length; i += 1) {
    if (i % elementsPerSubArray === 0) {
      k += 1;
      screenName = `screen-${k}`;
      matrix.data[screenName] = {
        id: screenName,
        apps: {},
        appsOrder: [],
      };
      matrix.data.screenOrder.push(screenName);
    }

    matrix.data[screenName].appsOrder.push(list[i].content);
    matrix.data[screenName].apps[list[i].content] = list[i];
  }
  return matrix;
}
const newDataForDnD = listToMatrix(data.slice(5), 20);

fs.writeFileSync(
  'dataForDnDWithId2.json',
  JSON.stringify(newDataForDnD, null, 2)
);
//* End create screens
