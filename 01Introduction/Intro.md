# NodeJS
Node.js is an open-source, server-side runtime environment that allows developers to run JavaScript code on the server. It's built on the V8 JavaScript engine from Google, which is the same engine used in the Chrome web browser.

Node.js was created by Ryan Dahl and was first released in 2009.

Node.js is primarily designed for building scalable network applications, and it has gained popularity due to its non-blocking, event-driven architecture.

## Features of NodeJS

 - Brings raw JS features into our terminal so that we can interact with os based features.

 - **Non-blocking I/O**: This means that when Node.js performs tasks like reading from a file, making network requests, or handling database operations, it doesn't block the entire application, allowing it to handle multiple tasks simultaneously.
 
 - **Event-driven architecture**: Node.js is built around an event loop that continuously listens for events and executes callbacks when events occur. This allows for efficient handling of asynchronous operations.

## Use-Cases of NodeJS

 - create server side apps
 - create Desktop apps
 - create Iot apps
 - access file system
 - access timer (different from browswer based timer)
 - process & runtime variables

## Architecture of NodeJS
Node.js architecture is composed of several key components that work together to enable its event-driven, non-blocking I/O model. Here are the main components of Node.js architecture:

**V8 JavaScript Engine**: Node.js is built on the V8 JavaScript engine, developed by Google, which executes JavaScript code efficiently and compiles it into machine code.

**Event Loop**: The Event Loop is the central component of Node.js. It manages the execution of asynchronous tasks, such as I/O operations, timers, and callbacks, and ensures that the program remains non-blocking and responsive.

**Libuv**: Libuv is a cross-platform library that provides event loop and asynchronous I/O support. It handles tasks such as managing file system operations, networking, and other system-level interactions.

 **Core Modules**: Node.js includes a set of core modules that provide essential functionality for building applications, such as "fs" for file system operations, "http" for creating web servers, and "util" for utility functions.
 
**Event Emitters**: Node.js allows developers to create and work with custom event emitters using the "EventEmitter" class. This component enables event-driven programming and the creation of custom events and event listeners. 

**Buffer**: Buffers are used to efficiently handle binary data, such as reading from or writing to streams or dealing with network protocols.

**Streams**: Streams are a fundamental part of Node.js, allowing the efficient handling of data. They come in various types, including readable streams for reading data and writable streams for writing data.

**npm (Node Package Manager)**: Packages in Node.js are collections of modules and other resources, typically distributed via the Node Package Manager (npm). It provides access to a vast ecosystem of open-source packages and libraries that can be easily integrated into Node.js applications.

**Child Processes**: Node.js allows for the creation of child processes to execute external commands or scripts. This is useful for tasks like spawning additional processes, parallel execution, and interprocess communication.

**Modules**: Node.js follows the CommonJS module system, which allows developers to organize their code into reusable modules. Modules can be built-in or external, and they help keep code organized and maintainable.

**Console**: Node.js provides a "console" object for logging and debugging purposes. It allows developers to output information to the terminal during development.

**Globals**: Node.js includes several global objects and variables, such as "process" and "global," which provide information about the running environment and enable communication with the operating system.

**C/C++ Addons**: Node.js supports the integration of C/C++ code through addons, allowing developers to utilize existing native code or improve performance for certain operations. 

**DNS and Network Functionality**: Node.js provides built-in modules for DNS resolution and network operations, enabling applications to interact with the network and perform tasks like making HTTP requests.

![enter image description here](https://media.licdn.com/dms/image/D5612AQFVj6bCg39xDA/article-inline_image-shrink_1500_2232/0/1662056038418?e=1702512000&v=beta&t=-oJ7rxU9m0gZH1nfP0zH9yWnRphQ8hxeCospjqgApR4)

1.  **Client Requests**:
    
    -   Clients send requests to a Node.js web server.
2.  **Thread Pool**:
    
    -   Internally, Node.js maintains a limited thread pool to handle client requests. This pool is responsible for performing blocking I/O operations.
3.  **Event Queue**:
    
    -   Upon receiving client requests, the Node.js web server places them into a queue known as the "Event Queue."
4.  **Event Loop**:
    
    -   The core component of Node.js is the "Event Loop." It operates within a single thread and is the heart of the Node.js processing model.
    -   The Event Loop continually checks the Event Queue for incoming requests.
    -   If the queue is empty, the Event Loop waits indefinitely for incoming requests.
5.  **Processing Steps**:
    
    -   When the Event Loop detects a client request in the Event Queue, it picks up that request for processing.
    -   If the request does not require any blocking I/O operations, Node.js processes it within the Event Loop, prepares the response, and sends it back to the client.
6.  **Blocking I/O Operations**:
    
    -   If a client request requires blocking I/O operations such as interacting with a database, file system, or external services, Node.js follows a different approach.
    -   The Event Loop checks the availability of threads from the internal Thread Pool.
7.  **Thread Assignment**:
    
    -   The Event Loop selects an available thread from the Thread Pool and assigns the client request to that thread.
8.  **Thread Processing**:
    
    -   The assigned thread takes responsibility for processing the request.
    -   It performs the necessary blocking I/O operations, prepares the response, and sends it back to the Event Loop.
9.  **Response to the Client**:
    
    -   The Event Loop receives the response from the thread handling the request.
    -   It then sends this response to the respective client, completing the request-response cycle.

## Process vs Thread

**Process:**

-   A process in Node.js represents an independent, standalone instance of the Node.js runtime. Each process has its own memory space, event loop, and resources.

-   Processes are typically used for achieving parallelism, as multiple Node.js processes can run concurrently on a multi-core CPU. This allows you to take advantage of multiple cores and improve the performance of CPU-bound tasks.

-   Communication between processes is typically achieved through inter-process communication (IPC) mechanisms like child processes, message passing, or using external systems like databases or message queues.

**Thread:**

-   Node.js itself is single-threaded. However, Node.js can leverage the underlying operating system's threading capabilities through Worker Threads or other mechanisms to perform CPU-bound tasks more efficiently without blocking the event loop.

-   Threads are lightweight, smaller units of a process that share the same memory space as the main process. They can run concurrently, making them suitable for multi-core systems.

-   Worker Threads, introduced in Node.js, are a way to create and manage threads. They allow you to run JavaScript code in parallel threads while sharing data with the main thread.

## Globals

  
Globals in Node.js are objects and variables that are accessible anywhere in a Node.js application. They are created when the Node.js runtime environment is started and are available to all modules that are loaded into the runtime environment.

There are two types of globals in Node.js:

-   **Built-in globals:**  Built-in globals are provided by the Node.js runtime environment. Some examples of built-in globals include the  `process`  object, the  `console`  object, and the  `global`  object.

-   **User-defined globals:**  User-defined globals are created by the developer. Any variable that is declared outside of a function or module is a user-defined global.

Built-in globals are available in all modules, regardless of whether they are CommonJS modules or ECMAScript modules. User-defined globals are only available in the module in which they are declared.

Here are some examples of built-in globals in Node.js:

-   `process`: The  `process`  object provides information about the Node.js process.
-   `console`: The  `console`  object provides methods for printing to the console.
-   `global`: The  `global`  object provides access to global variables.
-   `Buffer`: The  `Buffer`  class is used to represent binary data.
-   `setImmediate()`: The  `setImmediate()`  method schedules a callback to be executed as soon as possible.
-   `clearImmediate()`: The  `clearImmediate()`  method cancels a callback that was scheduled with the  `setImmediate()`  method.
- `require()`: used to load modules into the Node.js runtime environment.
- `module`:  The module object has a number of properties, such as the `exports` property, the `filename` property, and the `parent` property.

## Module pattern in NodeJS

Module is a mechanism for spiliting js program into seprate manageble chunk called as module, that can be imported whenever needed.

There are two main module systems in Node.js: **CommonJS Modules** and **ES6 Modules**.

Authors can tell Node.js to use the ECMAScript modules loader via the `.mjs` file extension, the `package.json`  [`"type"`] field, or the [`--input-type`] flag. Outside of those cases, Node.js will use the CommonJS module loader.

## Packages in NodeJS

- for creating package.json use npm init command
- 3rd party package manager is NPM package

## Documentation

[NodeJS](https://nodejs.org/en/docs/guides)

