import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"

const registerUser = AsyncHandler(async (req, res) => {
    // get user details from the frontend 
    // Validate that all the fields are correct / not empty
    // Check if the user already exists: username , email
    // Check that img is uploaded by the user for avatar
    // Upload the image to cloudinary 
    // create user object - create entry in db 
    // remove password and refresh token field from response
    // check for user creation 
    // return response 

    const { fullName, email, userName, password } = req.body;
    console.log("email: ", email);

    if ([fullName, email, userName, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required.")
    }

    const existedUser = User.findOne({
        $or: [{ userName },{ email}]
    })

    if(existedUser) {
        throw new ApiError(409, "User with email or username already exists.")
    }
})

export { registerUser };