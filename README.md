# mess-management-app
## Introduction

Welcome to the Mess Complaint Web Portal, a centralized platform dedicated to simplifying the process of submitting and managing mess-related complaints. This web application is designed with the goal of enhancing communication between users and the mess management team, ensuring a more efficient and transparent resolution process.

### Key Features

#### User-friendly Interface
Our portal boasts an intuitive and user-friendly interface, making it easy for users to navigate and submit complaints seamlessly.

#### Real-time Updates
Experience the convenience of real-time complaint tracking. Users can monitor the status of their submitted complaints, providing them with immediate feedback and transparency into the resolution process.

#### Secure Authentication
We prioritize the security of user data. The portal implements a robust authentication system to safeguard user information and ensure the privacy of their interactions.

#### Admin Dashboard
For mess management teams, our portal includes a dedicated admin, accountant and chief warden dashboard. This allows administrator to efficiently manage and respond to complaints, streamlining the overall complaint resolution process.

### Why Choose Mess Complaint Web Portal?

- **Efficiency**: Streamline the complaint submission and resolution process for both users and administrators.
- **Transparency**: Provide real-time updates on the status of complaints, fostering transparency and trust.
- **Security**: Implement a secure authentication system to protect user data and maintain privacy.

Whether you're a student submitting a complaint or a mess administrator managing requests, the Mess Complaint Web Portal aims to create a seamless and effective platform for addressing and resolving mess-related concerns.
## Getting Started

To get the Mess Complaint Web Portal up and running on your local machine, follow these instructions.

### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [MongoDB](https://www.mongodb.com/) (Make sure it's running on your local machine)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/anujtyagi234/mess-management-app.git

2. **Navigate to the Project Directory**

   ```bash
   cd MESS-MANAGEMENT-APP

3. **Install Server Dependencies**
   
   ```bash
   cd backend
   npm install

4. **Install Client Dependencies**

   ```bash
    cd ../frontend
    npm install

5. **Set Up Environment Variables:**
   Create a .env file in the root of the backend directory and add the following variables:

  JWTPRIVATEKEY=your_private_key
  
  SALT=10
  
  MONGODB_URI=mongodb://127.0.0.1:27017/MESS-MANAGEMENT
  
  GMAIL_USERNAME=messproject572@gmail.com
  
  GMAIL_PASSWORD=rssdbugyekmjzjjb

6.**Run the Application:**
  
  In the backend directory:
  
      node index

  In the frontend directry: You have to use 2 terminals for frontned
  
  a. First terminal :
  
        npm run dev
  b. Second terminal :
  
        json-server --watch db.json --port 8000

7.**Access the Application:**

      Open your web browser and go to http://localhost:5173/.
      
   
   
