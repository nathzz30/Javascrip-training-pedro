const { _map, _reduce, _filter } = require('./utils');
  // const arrMap = [2,3,4,5];
  // console.log("valores del array inicial: ", arrMap);
  // console.log("testing mi _map function", _map(arrMap, (ele) => {return (ele + "1")}));

  // const arrRed = [2,3,4,5];
  // console.log("valores del array inicial: ", arrRed);
  // console.log("testing mi _reduce function", _reduce( arrRed, (prev, actual) => {return (prev + actual)}, 6));
  const users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' },
    { id: 12, name: 'Adam', age: 17, group: 'editor' },
    { id: 48, name: 'John', age: 24, group: 'admin' },
    { id: 86, name: 'William', age: 12, group: 'editor' },
    { id: 98, name: 'Oliver', age: 16, group: 'admin' },
    { id: 99, name: 'Willson', age: 25, group: 'admin' }
  ]
  // console.log("valores del array inicial: ", users);
  // console.log("testing mi _reduce function", _reduce( users, (prev, actual) => {
  //   if(actual.group === 'admin' && actual.age > 17) {
  //     prev.push(actual);
  //   }
  //   return prev;
  // }, []));

  // const numbers = [1,2,3,4,5,6];

  // console.log("valores del array inicial: ",  numbers);
  // console.log("testing mi _reduce function", _reduce( numbers, (prev, actual) => { return prev * actual },2));

  const numbers = [1,2,3,4,5,6];

  console.log("valores del array inicial: ",  numbers);
  console.log("testing mi _filter function", _filter( numbers, (number) => { return number > 3}));
