

<!-- Living README Summary -->
## 🌳 Living Summary

This folder contains different routes for handling various functionalities of a web application. The `favorites` folder contains a file for adding and removing favorite listings for a user. The `listings` folder handles the creation and deletion of listings from a database. The `register` folder is responsible for creating new users. The `reservations` folder handles requests related to reservations, such as deleting and creating new reservations.


### `favorites`

This folder contains a file called `route.ts` that handles the functionality for adding and removing favorite listings for a user. It includes two functions: POST for adding a listing ID to the user's favorites, and DELETE for removing a listing ID. These functions require the user to be logged in, update the user's favorites in the database, and return the updated user object as a JSON response.


### `listings`

This folder contains a TypeScript module file named `route.ts` that handles the creation and deletion of listings from a database. The `route.ts` file requires authentication, checks for the current user, validates the provided listing ID or payload, and performs the corresponding database operation. It returns a JSON response with the created or deleted listing.


### `register`

This folder contains a single file called "route.ts" which is a server-side function for handling a POST request. It uses bcrypt to hash passwords, creates new users in a database using Prisma ORM, and returns the created user as a JSON response.


### `reservations`

This folder contains a TypeScript file called `route.ts` that handles DELETE and POST requests related to reservations. The `route.ts` file checks for authentication and performs operations on reservations in the database. The DELETE request deletes a reservation if the current user is the owner, while the POST request updates a listing by creating a new reservation. Both requests return the updated reservation as a JSON response.

<!-- Living README Summary -->