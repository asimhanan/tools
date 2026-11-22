# API Developer Test

**Total Questions:** 35  
**Instructions:** Choose the best answer for each question. Check your answers using the Answer Key at the end of the document.

---

### Questions

**1. What happens if you send a POST request to `/students`?**
* A) It retrieves all students
* B) It creates a new student
* C) It deletes a student

**2. Which HTTP method is typically used to retrieve data from an 
API without modifying it?**
* A) GET
* B) PUT
* C) DELETE

**3. What does a `404 Not Found` HTTP status code indicate?**
* A) The server encountered an internal error
* B) The requested resource could not be found on the server
* C) The user is not authorized to view the resource

**4. Which HTTP method is best used to completely replace an 
existing resource, such as updating all fields of `/students/5`?**
* A) GET
* B) PUT
* C) POST

**5. What does a `201 Created` status code mean?**
* A) The request was successful and a new resource was created
* B) The request was accepted, but processing is not complete
* C) The client sent invalid data

**6. What is the primary difference between `PUT` and `PATCH`?**
* A) `PUT` deletes data, while `PATCH` creates data
* B) `PUT` replaces the entire resource, while `PATCH` applies 
partial modifications
* C) `PUT` is secure, while `PATCH` is unencrypted

**7. Which HTTP header is used to tell the server that the request 
body contains JSON data?**
* A) `Accept: text/html`
* B) `Authorization: Bearer`
* C) `Content-Type: application/json`

**8. What does a `401 Unauthorized` status code mean?**
* A) The endpoint URL does not exist
* B) Authentication is required and has failed or has not yet been provided
* C) The server is down for maintenance

**9. In the URL `https://api.school.com/v1/students?grade=10&sort=asc`, 
what is `?grade=10&sort=asc`?**
* A) Path parameters
* B) Request headers
* C) Query parameters

**10. Which HTTP status code indicates a server-side error?**
* A) `200 OK`
* B) `400 Bad Request`
* C) `500 Internal Server Error`

**11. What does REST stand for in the context of web APIs?**
* A) Representational State Transfer
* B) Remote Execution System Technology
* C) Relational Server Transaction

**12. If a client sends malformed JSON in the request body, 
which status code should the API return?**
* A) `204 No Content`
* B) `400 Bad Request`
* C) `403 Forbidden`

**13. What is the purpose of an API Key?**
* A) To encrypt the database
* B) To identify and authenticate the calling project or user
* C) To format JSON responses

**14. What happens when you send a `DELETE` request to `/students/12`?**
* A) It removes the student with ID 12
* B) It retrieves the student with ID 12
* C) It creates 12 new students

**15. Which status code is commonly returned after a successful `DELETE` 
request when there is no response body to send back?**
* A) `204 No Content`
* B) `301 Moved Permanently`
* C) `404 Not Found`

**16. What is a "Payload" in an API request or response?**
* A) The URL of the API endpoint
* B) The actual data being transmitted in the body of the message
* C) The time it takes for the server to respond

**17. In the endpoint `/courses/101/students`, what is `101`?**
* A) A query parameter
* B) A path parameter
* C) A status code

**18. What is the difference between `401 Unauthorized` and `403 Forbidden`?**
* A) `401` means you aren't logged in (unauthenticated);
 `403` means you are logged in, but don't have permission
* B) `401` is for GET requests; `403` is for POST requests
* C) There is no difference; they mean the exact same thing

**19. What does "Idempotent" mean in REST API design?**
* A) The API can only be called once per day
* B) Making the same request multiple times produces the same result as making it once
* C) The API does not require authentication

**20. Which of the following HTTP methods is NOT idempotent?**
* A) GET
* B) DELETE
* C) POST

**21. What is JSON?**
* A) JavaScript Object Notation, a lightweight data-interchange format
* B) Java Standard Output Network, a server protocol
* C) Joint System Online Node, a database type

**22. What does a `429 Too Many Requests` status code indicate?**
* A) The JSON payload is too large
* B) The user has sent too many requests in a given amount of time (Rate Limiting)
* C) Too many users are currently logged into the server

**23. Where are Bearer Tokens typically sent in an HTTP request?**
* A) In the URL query string
* B) In the `Authorization` header
* C) In the `Content-Type` header

**24. What does CORS stand for?**
* A) Cross-Origin Resource Sharing
* B) Central Object Routing System
* C) Client-Oriented Request Standard

**25. Why is API versioning (e.g., `/api/v1/students`) important?**
* A) It makes the API run faster
* B) It allows developers to introduce breaking changes 

without disrupting existing clients
* C) It automatically backs up the database

**26. What is Pagination used for in APIs?**
* A) Splitting large datasets into smaller, manageable chunks
* B) Converting XML into JSON
* C) Securing endpoints against hackers

**27. Which HTTP header allows the client to specify the format of 
data it expects in return (e.g., JSON or XML)?**
* A) `Content-Type`
* B) `Accept`
* C) `User-Agent`

**28. What does `200 OK` signify?**
* A) The request succeeded
* B) The resource was moved to a new URL
* C) The server is overloaded

**29. What is a Webhook?**
* A) A tool used to test APIs manually
* B) An automated message/HTTP POST sent from an app when a 
specific event happens
* C) A type of database index

**30. Which HTTP status code indicates a `405 Method Not Allowed` error?**
* A) Sending a `POST` request to an endpoint that only supports `GET`
* B) Sending an expired password
* C) Requesting a webpage that has been deleted

**31. What does "Stateless" mean in REST architecture?**
* A) The server does not store any client context/session data between requests
* B) The API cannot save data to a database
* C) The API works without an internet connection

**32. What is Swagger / OpenAPI used for?**
* A) Hosting databases in the cloud
* B) Designing, building, and documenting RESTful APIs
* C) Encrypting SSL certificates

**33. If an API endpoint `/students` requires a `name` field, and you omit it in a `POST` request, what status code should you expect?**
* A) `200 OK`
* B) `400 Bad Request` (or `422 Unprocessable Entity`)
* C) `503 Service Unavailable`

**34. What is the main advantage of GraphQL over traditional REST APIs?**
* A) It doesn't use HTTP
* B) Clients can request the exact data fields they need, avoiding over-fetching or under-fetching
* C) It automatically generates frontend UI

**35. What does a `503 Service Unavailable` status code usually mean?**
* A) The client's internet is disconnected
* B) The server is temporarily unable to handle the request due to maintenance or overloading
* C) The API key has expired

---

### Answer Key & Explanations

1. **Correct: B** — `POST` creates a new student using the JSON body.
2. **Correct: A** — `GET` is used strictly to read or retrieve data without altering the server state.
3. **Correct: B** — `404` means the server is reachable, but the specific endpoint or resource ID does not exist.
4. **Correct: B** — `PUT` replaces the entire target resource with the newly provided payload.
5. **Correct: A** — `201 Created` is the standard response when a `POST` request successfully creates a new record.
6. **Correct: B** — `PUT` updates the whole object, whereas `PATCH` only updates the specific fields sent in the request.
7. **Correct: C** — `Content-Type: application/json` informs the server how to parse the incoming request body.
8. **Correct: B** — `401` indicates missing or invalid authentication credentials (like a bad token or API key).
9. **Correct: C** — Everything after the `?` in a URL consists of key-value query parameters used for filtering or sorting.
10. **Correct: C** — Status codes starting with `5xx` (like `500`) indicate that the server failed to fulfill a valid request.
11. **Correct: A** — REST stands for Representational State Transfer, an architectural style for designing networked applications.
12. **Correct: B** — `400 Bad Request` tells the client that the syntax of their request (such as broken JSON) is invalid.
13. **Correct: B** — An API Key is a unique identifier used to authenticate a user, developer, or calling program to an API.
14. **Correct: A** — `DELETE` targets the specific resource ID (`12`) and removes it from the system.
15. **Correct: A** — `204 No Content` confirms the action succeeded, so there is no need to return a body payload.
16. **Correct: B** — The payload is the core data carried inside the HTTP body (e.g., the student's name and age).
17. **Correct: B** — `101` is a path parameter (or route parameter) embedded directly into the URL path to identify a specific course.
18. **Correct: A** — `401` is an authentication issue (who are you?), while `403` is an authorization issue (you aren't allowed here).
19. **Correct: B** — Idempotency ensures that repeating the exact same call (like `DELETE /students/5`) won't cause unintended side effects.
20. **Correct: C** — Calling `POST /students` multiple times will create multiple duplicate student records, making it non-idempotent.
21. **Correct: A** — JSON (JavaScript Object Notation) is the standard, human-readable text format for modern API data exchange.
22. **Correct: B** — `429` is triggered by rate limiters to protect the API from spam or denial-of-service attacks.
23. **Correct: B** — Standard security practice places tokens in the header as `Authorization: Bearer <your_token>`.
24. **Correct: A** — CORS is a browser security feature that restricts web pages from making requests to a different domain than the one that served the page.
25. **Correct: B** — Versioning (like `/v1/` and `/v2/`) ensures older apps don't break when the API is updated.
26. **Correct: A** — Pagination (e.g., `?page=2&limit=20`) prevents performance bottlenecks when returning thousands of records.
27. **Correct: B** — The `Accept` header tells the server what content types the client is able to understand.
28. **Correct: A** — `200 OK` is the standard response for successful HTTP requests.
29. **Correct: B** — Often called "reverse APIs," webhooks push real-time data to another URL when an event occurs (e.g., a payment succeeds).
30. **Correct: A** — `405` occurs when the URL exists, but the specific HTTP verb (`GET`, `POST`, etc.) is not supported on it.
31. **Correct: A** — Every request from the client must contain all the information necessary for the server to understand and process it.
32. **Correct: B** — OpenAPI (formerly Swagger) provides a standard specification for documenting and testing API endpoints interactively.
33. **Correct: B** — Validation errors due to missing required fields result in a `400` or `422` client error.
34. **Correct: B** — GraphQL allows clients to structure their own queries, avoiding receiving too much data (over-fetching) or needing multiple calls (under-fetching).
35. **Correct: B** — `503` is a temporary server-side issue, often seen during scheduled downtime or traffic spikes.