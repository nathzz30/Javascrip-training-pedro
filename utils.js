//le llega un array y un callback, el callback se va a ejecutar con cada valor del array creando un nuevo array con los valores
//resultante

const _map = ( arr, callback ) => {
  const newArray = []
  for(i=0; i<arr.length ; i++) {
    newArray[i] = callback(arr[i]);
  }
  return newArray;
}

//toma el prev y el current y se lo pasa al callback para que se ejecute, devuelve los valores en un nuevo arr

const _reduce = ( arr, callback, initial ) => {
  let result;
  let prev;

  if (initial === 0 || initial) {
    prev = initial;
    for(i=0; i<arr.length; i++) {
      prev = callback(prev, arr[i]);
      result = prev;
    }
  }
  else {
    prev = arr[0];
    for(i=1; i<arr.length; i++) {
      prev = callback(prev, arr[i]);
      result = prev;
    }
  }
  

  return result;
}

//retorna un array con los elementos que cumplen con la condicion del callback

const _filter = ( arr, callback ) => {
  const newArray = []
  for(i=0; i<arr.length ; i++) {
    if(callback(arr[i])){
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

module.exports = {
  _map,
  _reduce,
  _filter
};