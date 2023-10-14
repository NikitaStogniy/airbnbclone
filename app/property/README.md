

<!-- Living README Summary -->
## 🌳 Living Summary

This folder contains two files: "PropertyClient.tsx" and "page.tsx". "PropertyClient.tsx" is a React component that displays a list of property listings, allowing the user to delete listings and showing success/error notifications. "page.tsx" defines the "TripsPage" component, which fetches the current user and their property listings, rendering them using the "PropertyClient" component.


### `PropertyClient.tsx`

📄 This file is a React component called "PropertyClient" that displays a list of property listings. 
🔍 It imports various components and libraries, including axios for making HTTP requests and toast for displaying notifications.
🏢 The component receives a list of property listings and the current user as props.
🗑️ It allows the user to delete a listing by clicking on a "Cancel reservation" button.
🔄 After deleting a listing, the component refreshes the page using the Next.js router.
🔒 While a deletion is in progress, the corresponding button is disabled to prevent multiple deletions.
📝 The component also includes a heading and a container for organizing the listings in a grid layout.
🔧 It uses the "ListingCard" component to render each individual listing.
🌟 Success and error notifications are displayed using the "toast" library.


### `page.tsx`

📝 This file defines the `TripsPage` component. 
🔒 It imports various components and actions. 
🔍 It fetches the current user using `getCurrentUser` action. 
🔑 If there is no current user, it renders an empty state with a login message. 
📋 It then fetches listings for the current user using `getListings` action. 
🚫 If there are no listings, it renders an empty state with a message about no trips found. 
✅ Otherwise, it renders the `PropertyClient` component with the listings and current user. 
📤 The `TripsPage` component is exported as the default export of this file.

<!-- Living README Summary -->