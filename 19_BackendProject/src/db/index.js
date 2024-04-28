// Import the mongoose library for MongoDB interaction
import mongoose from "mongoose";

// Define a function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Attempt to establish a connection to the MongoDB database
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/videotube` // MongoDB URI to connect to, including the database name ("videotube")
    );
    
    // Log a success message if the connection is established
    console.log(
      `\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}` // Log the host of the connected MongoDB instance
    );
  } catch (error) {
    // Log an error message if connection fails and exit the process with an error code
    console.log("MongoDB connection error", error);
    process.exit(1); // Exit the Node.js process with a non-zero exit code
  }
};

// Export the connectDB function to be used elsewhere in the application
export default connectDB;
