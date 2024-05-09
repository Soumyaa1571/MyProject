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

You can create a .env file in the root directory of the project to set these variables.

## Running the project Locally

Clone the repository:https://github.com/Soumyaa07/MyProject.git

Install dependencies:
cd 'server'

npm Install

Start the server:npm run app

The server will listen to PORT NO. 5000 by default.




## API Reference



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

# Landing Page
 ![LandingPage](https://github.com/Soumyaa1571/MyProject/assets/155560816/7967882a-bc7e-43b5-8401-94b7dc095996)
# Header Section

The Navbar component serves as the navigation bar for the web application. It includes the "KRS Quizzes" title/logo and navigation links to different sections of the application.

### Title

The "KRS Quizzes" title, displayed as a Link component, serves as a clickable element that navigates users to the home page ("/").

### Navigation Links

The navigation links consist of NavLink components from React Router, allowing users to navigate to different sections of the application:

- **About:** Navigates users to the "/about" route, providing information about the application.
- **Announcements:** Navigates users to the "/announcements" route, where they can view announcements.
- **Quizzes:** Navigates users to the "/quizzes" route, allowing them to access quizzes.
- **Contact Us:** Navigates users to the "/contact" route, providing contact information.

### Login/Logout Button

This component conditionally renders a “Login” or “Logout” link based on the isLoggedIn state.

- ![Screenshot 2024-05-09 204539](https://github.com/Soumyaa1571/MyProject/assets/155560816/0c17f610-edcc-48a8-b094-e20a7bb8ae1d)
 # The Login Page

The Login form includes the following input fields:

- **Email:** This field allows users to enter their email address for authentication purposes.
- **Password:** This field is for entering the user's password.

Below the input fields, there is a "Sign in" button for submitting the login credentials.

# The SignUp page

![Screenshot 2024-05-09 211728](https://github.com/Soumyaa1571/MyProject/assets/155560816/b4909b05-7f7e-4f40-a4fc-c2e46f28be2c)

The SignUp form includes the following input fields:

- **Name:** This field allows users to enter their name.
- **Email:** This field allows users to enter their Email id.
- **Enter Password:** This field allows users to enter their Password.
- **Re-enter Password:** This field allows users to re-enter their password.
- **Your Domain:** This field allows users to enter their Domain.
- **Role:** This field is a special input where users enter 'Student' if they are a Student or 'Member' if they are admin.
- **Phone:** This field allows users to enter their Phone No.
- **Birth Date:** This field allows users to enter their Date of Birth.

Below the input fields, there is a "Sign Up" button for submitting the signup details.

# The About page

![Screenshot 2024-05-09 141708](https://github.com/Soumyaa1571/MyProject/assets/155560816/95bbc8dd-38df-4ae5-911a-978054a9cf3e)

# Announcement Page

![Screenshot 2024-05-09 141800](https://github.com/Soumyaa1571/MyProject/assets/155560816/6f9b90a1-9300-4970-a380-c1c19d0a7561)

# Announcement Page Components

The Announcement Page consists of the following components:

1. **Make an Announcement:**
   - Visibility: Only accessible to Members.
   - Description: This component allows Members to create and publish announcements. It is not visible or accessible to Students.
![Screenshot 2024-05-09 141926](https://github.com/Soumyaa1571/MyProject/assets/155560816/8bad53d8-7d0c-4ce5-9ccf-e2d6907ba7b5)


2. **View the Announcements:**
   - Visibility: Visible to both Members and Students.
   - Description: This component allows both Members and Students to view published announcements.
   - ![Screenshot 2024-05-09 141943](https://github.com/Soumyaa1571/MyProject/assets/155560816/34e4b7f8-6dc0-4a91-b2cc-1cc7c7e8b825)


3. **View Feedbacks:**
   - Visibility: Only accessible to Members.
   - Description: This component allows Members to view feedback provided by users. It is not visible or accessible to Students.
   - ![Screenshot 2024-05-09 231443](https://github.com/Soumyaa1571/MyProject/assets/155560816/03f22204-a55e-444b-8476-aa18dd2173cc)

4. **View Result:**
   - Visibility: Only accessible to Members.
   - Description: This component allows Members to view results or outcomes. It is not visible or accessible to Students.
   - ![Screenshot 2024-05-09 232627](https://github.com/Soumyaa1571/MyProject/assets/155560816/79771380-445f-4fe8-9899-5e5ac4283440)

# Quize Page

![Screenshot 2024-05-09 141820](https://github.com/Soumyaa1571/MyProject/assets/155560816/e882909a-237d-46fd-881f-0f81a1eaf8c2)

# Quiz Page Components

The Quiz Page consists of the following components:

1. **Create a Quiz:**
   - Accessibility: Only accessible to Members.
   - Description: This component opens a form that allows Members to create quiz questions.
   - ![Screenshot 2024-05-09 141902](https://github.com/Soumyaa1571/MyProject/assets/155560816/6d3208a5-8eef-4424-baf6-4e837f94bf84)


2. **Start Quiz:**
   - Accessibility: Accessible to both Students and Members.
   - Description: This component allows both Students and Members to start the quiz.
   - ![Screenshot 2024-05-10 000456](https://github.com/Soumyaa1571/MyProject/assets/155560816/2dcdcc22-dcef-40d3-83ce-92a9256e51b3)

# Contact Page
This page contains a feedback form where users can put their valuable feedback along with name and Email.
  ![Screenshot 2024-05-10 000928](https://github.com/Soumyaa1571/MyProject/assets/155560816/cd0ede07-c6ea-4232-b618-5c400a911253)



