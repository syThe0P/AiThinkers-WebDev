// Import necessary modules
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Create an instance of Express
const app = express();

// Enable CORS middleware to handle cross-origin requests - Enables Cross-Origin Resource Sharing (CORS), allowing requests from specified origins (process.env.CORS_ORIGIN) and enabling credentials to be sent cross-origin.
app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // Allow requests from specified origin
    credentials: true, // Allow sending cookies cross-origin
  })
);

// Parse JSON requests with a limit of 16kb
app.use(express.json({ limit: "16kb" }));

// Parse URL-encoded requests with a limit of 16kb and enable extended mode - Parses incoming URL-encoded requests, enabling extended mode to allow parsing of nested objects, and limiting the request body size to 16kb.
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse cookies -  Parses cookies attached to the request object. This middleware populates req.cookies with an object containing the parsed cookies.
app.use(cookieParser());

// Export the Express app instance
export { app };
