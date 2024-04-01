const AsyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export { AsyncHandler };

//   -----------Another Method ---------
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {

//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             messsage: err.messsage
//         })
//     }
// }