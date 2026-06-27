export const sampleMiddleWare = async (req, res, next) => {
  console.log("I am sample middleware 1");
  next();
};
export const sampleMiddleWare2 = async (req, res, next) => {
  console.log("I am sample middleware 2");
  next();
};
