
# README

## Instructions to Run the Program

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-repo.git
    cd your-repo
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the server:**
    ```bash
    npm start
    ```

## Endpoints

### Create a User

- **URL:** `/api/users`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
     "username": "exampleUser",
     "password": "examplePassword",
     "email": "user@example.com"
  }
  ```

## Using Postman to Create a User

1. Open Postman.
2. Create a new `POST` request.
3. Enter the URL: `http://localhost:3000/api/users`.
4. Go to the `Headers` tab and add:
    - `Key`: `Content-Type`
    - `Value`: `application/json`
5. Go to the `Body` tab, select `raw`, and enter the JSON body:
    ```json
    {
      "username": "exampleUser",
      "password": "examplePassword",
      "email": "user@example.com"
    }
    ```
6. Click `Send`.

You should receive a response indicating the user was created successfully.