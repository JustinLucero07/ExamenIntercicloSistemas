# Angular WebSocket Application

This project is a distributed application that consists of two main services: an Angular web application and a WebSocket service. The Angular application serves as the user interface, while the WebSocket service enables real-time communication.

## Project Structure

```
angular-websocket-app
├── angular-app          # Angular web application
│   ├── src              # Source files for the Angular app
│   ├── Dockerfile       # Dockerfile for building the Angular app
│   ├── package.json     # npm configuration for Angular app
│   └── angular.json     # Angular project configuration
├── websocket-service     # WebSocket service
│   ├── server.js        # WebSocket server implementation
│   ├── package.json     # npm configuration for WebSocket service
│   └── Dockerfile       # Dockerfile for building the WebSocket service
├── docker-compose.yml    # Docker Compose configuration
└── README.md            # Project documentation
```

## Getting Started

To run the application, you need to have Docker and Docker Compose installed on your machine.

### Running the Application

1. Clone the repository:
   ```
   git clone <repository-url>
   cd angular-websocket-app
   ```

2. Build and run the application using Docker Compose:
   ```
   docker-compose up
   ```

3. Open your browser and navigate to `http://localhost:80` to access the Angular application.

### Features

- Displays a static welcome message.
- Connects to a WebSocket server to receive dynamic messages.
- Updates the interface in real-time based on messages received from the WebSocket service.

### Stopping the Application

To stop the application, press `CTRL+C` in the terminal where Docker Compose is running. You can also run:
```
docker-compose down
```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.