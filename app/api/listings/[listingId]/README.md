

<!-- Living README Summary -->
## 🌳 Living Summary

This folder contains a TypeScript module file named `route.ts` that handles the deletion of a listing from a database. The function in this file requires authentication, checks for the current user, validates the provided listing ID, and deletes the corresponding listing. It returns a JSON response with the deleted listing. The file also imports other modules and functions for handling responses, database operations, and error handling.


### `route.ts`

📄 This file is a TypeScript module that exports a single function named DELETE.
🔒 It requires authentication, as it checks for the current user before proceeding.
🔑 The function takes a request object and an object with params as arguments.
❌ If there is no current user, it returns an error response.
🔍 It then checks if the listingId parameter is valid and throws an error if it is not.
🗑️ Finally, it deletes a listing from the database that matches the provided listingId and belongs to the current user.
📤 The function returns a JSON response with the deleted listing.
📝 The file imports the NextResponse object from the next/server module and uses it to handle the responses.
💼 It also imports the getCurrentUser function, prisma database client, and the error function from the console module.

<!-- Living README Summary -->