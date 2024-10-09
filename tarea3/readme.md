# Tarea 3 - Web Development 2

## Project Setup Instructions

Follow these steps to set up and run the project after cloning the repository.

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

### Steps

1. **Clone the Repository**

    ```bash
    git clone https://github.com/Omarhersan/Tecnologia_desarrollo_servidor.git
    cd Tecnologia_desarrollo_servidor/tarea3
    ```

2. **Install Dependencies**

    Navigate to the project directory and install the required dependencies:

    ```bash
    npm install
    ```
3. **Build the Project**

  To create a production build, run:

  ```bash
  npm run build
  ```


4. **Run the Project**

    Start the development server:

    ```bash
    npm start
    ```

5. **Open in Browser**

    Open your web browser and navigate to:

    ```
    http://localhost:3000
    ```

## Endpoints

### Hello World

- **URL:** `/`
- **Method:** `GET`
- **Description:** Returns a "Hello World" message.

### Upload a File

- **URL:** `/upload`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: multipart/form-data`
- **Body:** Form-data with a file field named `file`.
- **Description:** Uploads a single file.

### Upload Multiple Files

- **URL:** `/uploads`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: multipart/form-data`
- **Body:** Form-data with multiple file fields named `files`.
- **Description:** Uploads multiple files.

### Download a File

- **URL:** `/download`
- **Method:** `GET`
- **Query Parameters:**
  - `file`: The name of the file to download.
- **Description:** Downloads a file from the server.

## Using Postman to Test Endpoints

### Hello World

1. Open Postman.
2. Create a new `GET` request.
3. Enter the URL: `http://localhost:3000/`.
4. Click `Send`.

### Upload a File

1. Open Postman.
2. Create a new `POST` request.
3. Enter the URL: `http://localhost:3000/upload`.
4. Go to the `Body` tab, select `form-data`, and add a file field named `file`.
5. Choose a file to upload.
6. Click `Send`.

### Upload Multiple Files

1. Open Postman.
2. Create a new `POST` request.
3. Enter the URL: `http://localhost:3000/uploads`.
4. Go to the `Body` tab, select `form-data`, and add multiple file fields named `files`.
5. Choose files to upload.
6. Click `Send`.

### Download a File

1. Open Postman.
2. Create a new `GET` request.
3. Enter the URL: `http://localhost:3000/download?file=yourfile.txt`.
4. Click `Send`.

You should receive the file as a response if it exists on the server.
### Troubleshooting

If you encounter any issues, ensure all dependencies are correctly installed and that you are using the correct Node.js version.

### License

This project is licensed under the MIT License.