

<!-- Living README Summary -->
## 🌳 Living Summary

This folder contains a TypeScript file called `route.ts` that handles a DELETE request. It checks if there is a current user, retrieves the reservation ID from the request parameters, and deletes the reservation from the database using the ID. The deletion is allowed if the current user is the owner of the reservation or the listing. The deleted reservation is returned as a JSON response.


### `route.ts`

📝 This file contains a function for handling a DELETE request.  
🔐 It checks if there is a current user and returns an error if not.  
🔍 It retrieves the reservation ID from the request parameters.  
❌ If the reservation ID is missing or not a string, it throws an error.  
🗑️ It deletes a reservation from the database using the reservation ID.  
🔁 The deletion is allowed if the current user is the owner of the reservation or the listing.  
📨 It returns the deleted reservation as a JSON response.

<!-- Living README Summary -->