export const replaceMongoIdInArray = (arr) => 
  arr.map(item => ({
    ...item,
    id: item._id.toString()
  }));

  export const replaceMongoIdInObject = (obj) => {
    const updatedObj = {
      ...obj,
      id: obj._id.toString()
    };
    return updatedObj;
  }

