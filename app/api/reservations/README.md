

<!-- Living README Summary -->
## 🌳 Living Summary

This folder contains a TypeScript file called `route.ts` that handles DELETE and POST requests related to reservations. The `route.ts` file checks for authentication and performs operations on reservations in the database. The DELETE request deletes a reservation if the current user is the owner, while the POST request updates a listing by creating a new reservation. Both requests return the updated reservation as a JSON response.


### `[reservationId]`

This folder contains a TypeScript file called `route.ts` that handles a DELETE request. It checks if there is a current user, retrieves the reservation ID from the request parameters, and deletes the reservation from the database using the ID. The deletion is allowed if the current user is the owner of the reservation or the listing. The deleted reservation is returned as a JSON response.


### `route.ts`

📝 This file contains a function for handling a POST request. 
🔒 It requires authentication, as it checks for a current user. 
📥 The function expects a JSON body with specific properties: listingId, startDate, endDate, and totalPrice. 
💾 It uses Prisma to update a listing in the database by creating a new reservation. 
📤 The function returns the updated listing reservation as a JSON response.

<!-- Living README Summary -->