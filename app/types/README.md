

<!-- Living README Summary -->
## 🌳 Living Summary

This folder contains a file called `index.ts` that defines types for user, listing, and reservation objects. These types are modified versions of the original types, with certain fields removed or added to provide safer versions of the original types. The purpose of this file is to provide these safer types for use in the codebase.


### `index.ts`

📄 This file defines types for user, listing, and reservation objects.  
🔐 The SafeUser type removes certain fields from the User type.  
🏷️ The SafeListing type removes the createdAt field from the Listing type.  
📅 The SafeReservation type removes several fields from the Reservation type.  
🔗 The SafeReservation type also includes a SafeListing object.  
📝 The createdAt, updatedAt, and emailVerified fields are added to the SafeUser type.  
🔐 The emailVerified field can be null.  
📝 The createdAt field is added to the SafeListing type.  
📝 The createdAt, startDate, endDate, and listing fields are added to the SafeReservation type.  
🔄 The purpose of this file is to provide safer versions of the original types with modified fields.

<!-- Living README Summary -->