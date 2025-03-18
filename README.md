#  CLI Postman

CLI Postman is a command-line tool that allows users to send HTTP requests directly from the terminal. It supports GET, POST, PUT, PATCH, and DELETE methods.

## Installation

### For Linux/macOS/GitBash Users:

1. Clone the repository:
   ```sh
   git clone https://github.com/Nikuunj/cli_postman.git
   ```
2. Navigate to the project directory:
   ```sh
   cd cli_postman
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Build the project:
   ```sh
   npm run build
   ```
5. Set up an alias for easier usage (optional):
   ```sh
   alias 100x='node ./dist/index.js'
   ```

### For Windows Users:

1. Clone the repository using Git Bash or Command Prompt:
   ```sh
   git clone https://github.com/Nikuunj/cli_postman.git
   ```
2. Navigate to the project directory:
   ```sh
   cd cli_postman
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Build the project:
   ```sh
   npm run build
   ```
5. Use the following command to run the CLI:
   ```sh
   node ./dist/index.js <method> <url> '<data>'
   ```

## Usage

Run the following commands to send different HTTP requests:

### GET Request

```sh
100x get <url>   # For Linux/macOS/gitBash users (if alias is set)
node ./dist/index.js get <url>  # For Windows users
```

Example:

```sh
node ./dist/index.js get https://jsonplaceholder.typicode.com/posts/1
```

Response:

```json
{ "userId": 1, "id": 1, "title": "Example Title", "body": "This is an example body." }
```

### POST Request

```sh
100x post <url> '<data>'   # For Linux/macOS/gitBash users (if alias is set)
node ./dist/index.js post <url> '<data>'  # For Windows users
```

Example (JSON Data):

```sh
node ./dist/index.js post https://jsonplaceholder.typicode.com/posts '{"name":"John Doe","age":30,"city":"New York"}'
```

Response:

```json
{
  "id": 101,
  "name": "John Doe",
  "age": 30,
  "city": "New York"
}
```

Example (Plain Text Data):

```sh
node ./dist/index.js post https://jsonplaceholder.typicode.com/posts 'Hello, this is a plain text message.'
```

Response:

```json
{
  "message": "Received plain text data",
  "content": "Hello, this is a plain text message."
}
```

### PUT Request

```sh
node ./dist/index.js put <url> '<data>'
```

Example:

```sh
node ./dist/index.js put https://jsonplaceholder.typicode.com/posts/1 '{"title":"Updated Title","body":"Updated body content."}'
```

Response:

```json
{
  "id": 1,
  "title": "Updated Title",
  "body": "Updated body content."
}
```

### PATCH Request

```sh
node ./dist/index.js patch <url> '<data>'
```

Example:

```sh
node ./dist/index.js patch https://jsonplaceholder.typicode.com/posts/1 '{"title":"Partially Updated Title"}'
```

Response:

```json
{
  "id": 1,
  "title": "Partially Updated Title",
  "body": "Original body remains unchanged."
}
```

### DELETE Request

```sh
node ./dist/index.js delete <URL> '<data>'
```

Example:

```sh
node ./dist/index.js delete https://jsonplaceholder.typicode.com/posts/1 '{"title":"Partially Updated Title"}'
```

Response:

```json
{
  "message": "Post deleted successfully"
}
```
