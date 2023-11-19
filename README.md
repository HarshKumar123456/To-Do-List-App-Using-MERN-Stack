# To-Do-List-App-Using-MERN-Stack
Let's structurised your plans for the by adding and finishing some work or todo.
This project is a robust and dynamic To Do List App Website built using the MERN (MongoDB, Express.js, React, Node.js) stack, now enhanced with the powerful OAuth2.0 Sign in with Google feature experience.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file



#### .env file for `server` folder 
```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/<database>?retryWrites=true&w=majority
SECRET_FOR_TODO=<put any text you want>
FRONT_END_URL=http://localhost:3000/
PORT=8000
CLIENT_ID=<put Google Client Id here>
CLIENT_SECRET=<put Google Client Secret here>
```


#### .env file for `client` folder 
```
REACT_APP_SERVER_URL=http://localhost:8000
```

Replace the placeholders `<username>`, `<password>`, and `<database>` with your MongoDB Atlas cluster credentials:

+ `<username>`: Your MongoDB Atlas database username.
+ `<password>`: Your MongoDB Atlas database password.
+ `<database>`: The name of your MongoDB database.

#### Obtaining MongoDB Atlas Cluster Details

1. `Sign in or Sign up to MongoDB Atlas`: MongoDB Atlas
2. `Create a Cluster`: Follow the instructions on MongoDB Atlas to create a new cluster.
3. `Get Cluster Connection Details`: In your MongoDB Atlas dashboard, navigate to your cluster and click on "Connect." Follow the instructions to obtain your cluster URL, username, password, and database name.
4. `Set Up .env File`: Use the acquired credentials to fill in the placeholders in the .env file in your project.

#### Obtaining Google Client Id and Secret 

## Setting Up OAuth 2.0 on Google Cloud Platform

Follow these steps to configure OAuth 2.0 credentials on Google Cloud Platform for your application:

1. **Navigate to Google Cloud Platform (GCP) Console**
   - Go to [Google Cloud Platform Console](https://console.cloud.google.com/).

2. **Create a New Project or Select an Existing Project**
   - Click on the project selector dropdown at the top of the page.
   - Create a new project or select an existing one where you want to set up OAuth 2.0.

3. **Enable the Google Identity Service**
   - In the GCP Console, navigate to "APIs & Services" -> "Dashboard".
   - Click on "+ Enable APIs and Services".
   - Search for "Google Identity" or "Google Identity Platform" and enable it.

4. **Configure OAuth Consent Screen**
   - In the GCP Console, navigate to "APIs & Services" -> "OAuth Consent Screen".
   - Choose the user type for the app (Internal/External).
   - Fill in the required fields like App Name, User Support Email, Developer Contact Information, etc.
   - Add scopes or additional information required for your application.

5. **Create OAuth 2.0 Credentials**
   - In the GCP Console, navigate to "APIs & Services" -> "Credentials".
   - Click on "+ Create Credentials" and select "OAuth client ID".
   - Choose the application type Web application .
   - Set the authorized redirect URIs `http://localhost:8000/auth/google/secrets` for local development.

6. **Obtain Client ID and Client Secret**
   - After creating the OAuth 2.0 credentials, Google will generate a Client ID and Client Secret.
   - Copy these credentials and securely store them. They'll be used in your application's configuration.

7. **Test OAuth 2.0 Configuration**
   - Use the obtained Client ID and Client Secret in your application's OAuth configuration.
   - Ensure that your application redirects users to Google's OAuth consent screen to authorize access.
   - Test the OAuth flow by signing in with Google in your application.

8. **Manage and Monitor OAuth Credentials**
   - Periodically review and manage your OAuth 2.0 credentials in the GCP Console.
   - Monitor usage and permissions granted to your application.

### Note
- Always secure your client secret and avoid exposing it in public repositories or sharing it openly.
- Review Google's guidelines and best practices for OAuth 2.0 implementation to ensure security and compliance.
- Keep your credentials secure. Avoid sharing them publicly or committing them to version control systems.


## Run Locally

#### Server Setup

```
# Clone the project
git clone https://github.com/HarshKumar123456/Blog-Website-Using-MERN-Stack.git


# Navigate to the project directory
cd To-Do-List-App-Using-MERN-Stack/

# Go to the server folder
cd server

# Install dependencies
npm install

# Setup Environment Variables in `.env` file in `server` folder and then start the server
npm run start

```


#### Client Setup
```
# Go to the project directory
cd To-Do-List-App-Using-MERN-Stack/

# Go to the client folder
cd client

# Install dependencies
npm install

# Setup `Environment Variables` in `.env` file in `client` folder and then  Run the React App
npm run dev


```




#### Open http://localhost:3000/ in Browser and You're all set

