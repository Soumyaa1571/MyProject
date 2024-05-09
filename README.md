# KRS Quiz Project

The KRS Quiz Site is an innovative tool designed to enhance the learning experience of students. This site revolutionizes the traditional post-class quizzes by incorporating advanced features for user engagement, progress tracking, and healthy competition among students.

This is a backend project built with Node.js and MongoDB. It uses several libraries, including:

Express - a fast, minimalist web framework for Node.js

Bcrypt - a library to help hash passwords

Jsonwebtoken - a library to generate JWT tokens

Mongoose - a MongoDB object modeling tool
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

DATABASE: the MongoDB connection string

SECRET_KEY: the secret used to sign JWT token

PORT: Contains the port on which server will run

You can create a .env file in the root directory of the project to set these variables.## API Reference



| Methods | Route      | Description                  | Request               | Response              |
| ------- | ---------- | ---------------------------- | --------------------- | --------------------- |
| POST    | /signin  | User Signin                  | { "email": "user@example.com", "password": "password" } | { "email": "user@example.com", "token": "authentication_token", "role": "user_role" } |
| POST    | /register| User Registration            | { "name": "User Name", "email": "user@example.com", "phone": "1234567890", "password": "password", "dob": "YYYY-MM-DD", "role": "student", "domain": "Your Domain" } | { "email": "user@example.com", "token": "authentication_token", "role": "user_role" } |
| POST    | /questions | Add Quiz Question         | { "ques": "Question Text", "option1": "Option 1", "option2": "Option 2", "option3": "Option 3", "option4": "Option 4", "correctans": "Correct Option" } | { "message": "Question added successfully" } |
| GET     | /gettest   | Retrieve Quiz Questions   | N/A                   | [ { "ques": "Question Text", "option1": "Option 1", "option2": "Option 2", "option3": "Option 3", "option4": "Option 4", "correctans": "Correct Option" }, ... ] |
| POST    | /Sheet     | Make Announcement         | { "heading": "Announcement Heading" } | { "message": "Announcement made successfully" } |
| GET     | /getSheet  | Retrieve Announcements    | N/A                   | [ { "heading": "Announcement Heading" }, ... ] |
| POST    | /feedback  | Submit Feedback           | { "name": "User Name", "email": "user@example.com", "message": "Feedback Message" } | { "message": "Feedback submitted successfully" } |
| GET     | /getfeedback | Retrieve Feedback       | N/A                   | [ { "name": "User Name", "email": "user@example.com", "message": "Feedback Message" }, ... ] |


The middleware function is responsible for following:
- User authentication using JSON Web Tokens (JWTs)
- User registration
- Adding quiz questions
- Retrieving quiz questions
- Making announcements
- Retrieving announcements
- Submitting feedback
- Retrieving feedback
- Checking if a test has been attempted
- Storing test results
- Retrieving test results




