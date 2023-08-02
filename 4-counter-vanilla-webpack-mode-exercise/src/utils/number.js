export const addOne = (counter) => counter + 1;

export const addOneError = (counter) => {
  throw new Error(counter);
};
