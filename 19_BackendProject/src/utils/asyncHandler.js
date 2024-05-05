// Define a higher-order function asyncHandler
const asyncHandler = (requestHandler) => {
  // Return a middleware function that takes req, res, and next parameters
  return (req, res, next) => {
    // Resolve the requestHandler function, which is assumed to be asynchronous and returns a Promise
    Promise.resolve(requestHandler(req, res, next))
      // If the promise resolves successfully, continue to the next middleware or route handler
      .catch((err) => next(err)); // If the promise rejects with an error, pass the error to the next middleware or error handler
  };
};

// Export the asyncHandler function to be used elsewhere in the application
export { asyncHandler };


//another way to handle req


// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };


//Middleware are just functions which apply a check after tking req and getting back the response