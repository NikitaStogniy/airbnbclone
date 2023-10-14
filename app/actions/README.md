

<!-- Living README Summary -->
## 🌳 Living Summary

This folder contains several TypeScript files that handle different aspects of a web application. The files include functions to handle user authentication, retrieve user information, fetch favorite listings, retrieve listings by ID or based on various parameters, and get reservations. The files make use of libraries like `next-auth/next` and `prisma` for server session management and database interactions. They also handle errors and format data for consistency.


### `getCurrentUser.ts`

📝 This file contains a default async function called `getCurrentUser()` and an async function called `getSession()`. 
🔒 The purpose of this file is to handle user authentication and retrieve the current user's information. 
💻 It uses the `next-auth/next` library to get the server session and the `prisma` library to interact with the database. 
⚡️ `getSession()` retrieves the current user's session, while `getCurrentUser()` fetches the user's information based on the session. 
🔐 If the session or the user's email is not available, it returns `null`. 
📅 The user's creation and update timestamps are converted to ISO strings. 
✉️ The `emailVerified` property is either the user's email verification timestamp or `null`. 
❌ If any errors occur during the process, it also returns `null`.


### `getFavoriteListings.ts`

📄 The purpose of this file is to fetch a list of favorite listings for the current user. 
🔒 It first checks if there is a logged-in user, and if not, returns an empty array. 
🔍 It then queries the database using Prisma to find the listings that match the user's favoriteIds. 
🔐 To ensure data safety, it converts the createdAt field of each listing to an ISO string. 
📥 Finally, it returns the safeListings array. 
❗️ If there is any error during the process, it throws an error.


### `getListingById.ts`

📄 This file contains a function called "getListingById" that retrieves a listing by its ID from a database. 
📁 It imports a module called "prismadb" which is used to interact with the database. 
🔍 The function takes an optional parameter "listingId" which is the ID of the listing to be retrieved. 
🔐 It makes use of async/await syntax to handle asynchronous operations. 
🔍 Inside the function, it uses the "prisma.listing.findUnique" method to find the listing with the provided ID. 
🔍 It includes the associated "user" object in the query result. 
⚠️ If no listing is found, it returns null. 
✉️ It formats the retrieved data and converts certain values to strings. 
⚠️ If an error occurs, it throws an error with the error message.


### `getListings.ts`

📄 This file exports a function called `getListings` that retrieves listings based on various parameters.
🔍 The function takes in an object `params` which contains optional parameters for filtering the listings.
🛌 The optional parameters include `userId`, `guestCount`, `bathroom`, `roomCount`, `locationValue`, `category`, `startDate`, and `endDate`.
🔀 The function constructs a query object based on the provided parameters to filter the listings.
⏰ If both `startDate` and `endDate` are provided, the function adds a NOT condition to exclude listings that have reservations overlapping with the specified dates.
🔍 The function uses the `prisma` library to query the database and retrieve the listings.
🗂️ The retrieved listings are then processed to ensure the `createdAt` field is in ISO format.
📩 The function returns the processed listings.
❌ If an error occurs during the execution of the function, it is thrown with an error message.
📚 The file imports the `prisma` library, which is likely a database client used for querying and manipulating data.


### `getReservations.ts`

📝 This file is a TypeScript module exporting an async function called "getReservations".
🔍 The function takes in an object of parameters and returns a safe version of reservations.
📚 It imports a module called "prisma" from "@/app/libs/prismadb".
🔒 The function wraps the main logic in a try-catch block to handle potential errors.
🔍 The function builds a query object based on the provided parameters.
🔍 It uses the query object to fetch reservations from the "prisma" database, including associated listing information.
🔄 The function transforms the fetched reservations and their associated listing data into a safe format.
⏰ The function converts date fields to ISO strings for consistency.
❌ If any errors occur during the execution of the function, they are thrown as an error.

<!-- Living README Summary -->