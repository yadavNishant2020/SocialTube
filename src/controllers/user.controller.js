import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import User from "../models/user.model.js"
import uploadOnCloudinary from "../utils/fileUpload.js"
import { ApiResponse } from "../utils/ApiResponse.js";

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
    // console.log("email: ", email);
    if ([fullName, email, userName, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required.")
    }

    const existedUser = User.findOne({
        $or: [{ userName }, { email }]
    })
    // console.log(existedUser);
    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists.")
    }

    console.log(req.files);
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required.");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if (!avatar) {
        throw new ApiError(400, "Avatar file is required.");
    }

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        userName: userName.toLowerCase()
    })

    const createdUser = await User.findNyId(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user.");
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User Registered Successfully")
    )
})

export default registerUser;