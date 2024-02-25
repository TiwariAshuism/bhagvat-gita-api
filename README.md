# Bhagavad Gita API

This API provides access to data related to the Bhagavad Gita, a sacred Hindu scripture. It offers endpoints to retrieve chapter information and individual slokas (verses) from the text.

## Getting Started

To use this API, you can send HTTP GET requests to the specified endpoints to retrieve the desired data. Below are the available endpoints:

### Chapter Data

- **Endpoint:** `/chapter/:ch?`
- **Description:** Retrieves information about a specific chapter of the Bhagavad Gita.
- **Parameters:**
  - `ch` (optional): Chapter number. If provided, returns data for the specified chapter. If omitted, returns data for all chapters.
- **Example Requests:**
  - Retrieve data for all chapters:
    ```
    GET /chapter
    ```
  - Retrieve data for Chapter 3:
    ```
    GET /chapter/3
    ```

### Sloka Data

- **Endpoint:** `/slok/:ch/:sl`
- **Description:** Retrieves a specific sloka (verse) from a particular chapter of the Bhagavad Gita.
- **Parameters:**
  - `ch`: Chapter number.
  - `sl`: Sloka number.
- **Example Request:**
  - Retrieve Sloka 5 from Chapter 2:
    ```
    GET /slok/2/5
    ```

## Error Handling

- If a requested chapter or sloka is not found, the API returns a 404 error with an appropriate message.
- Internal server errors are handled, and a 500 error response is sent with details about the error.

## Prerequisites

Before using the API, ensure you have Node.js installed on your system.

## Installation

1. Clone this repository to your local machine.
2. Install dependencies using npm:
    ```
    npm install
    ```

## Usage

1. Set up a `.env` file with the required environment variables. See `.env.example` for reference.
2. Run the server:
    ```
    npm start
    ```
3. You can now send HTTP requests to the specified endpoints to retrieve Bhagavad Gita data.


## License

This project is licensed under the [MIT License](LICENSE).
