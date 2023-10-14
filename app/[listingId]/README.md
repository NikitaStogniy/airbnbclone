

<!-- Living README Summary -->
## 🌳 Living Summary

This folder contains files related to a listing page in a React application. The `ListingCategory.tsx` file contains the code for a component that renders a category item. The `ListingClient.tsx` file represents the client-side view of the listing page and handles reservations, displays listing information, and allows users to create new reservations. The `ListingInfo.tsx` file displays information about a listing, including the host, description, guest count, room count, bathroom count, category, and location. The `page.tsx` file is the main component for the listing page, fetching data and rendering the appropriate components based on the fetched data.


### `ListingCategory.tsx`

📄 This file contains the code for a React functional component called "ListingCategory".  
🔍 The component takes in props for an icon, label, and description.  
🖼️ It renders a category item with the provided icon, label, and description.  
🎨 The category item is styled using Tailwind CSS classes.  
📦 The component is exported as the default export of the file.


### `ListingClient.tsx`

📄 This file is a React component called "ListingClient" that represents the client-side view of a listing page.
🔒 It imports various components, types, and utility functions.
📅 It handles reservations for the listing, including displaying reservation information and allowing users to create new reservations.
💰 It calculates the total price of a reservation based on the selected date range and the listing's price per day.
📝 It displays information about the listing, such as the title, image, location, description, and amenities.
📆 It uses the react-date-range library to allow users to select a date range for their reservation.
🔓 If the user is not logged in, it displays a login modal when attempting to create a reservation.
🔄 It uses axios to make API requests to create reservations.
🔁 It updates the total price whenever the selected date range or the listing's price changes.
🌐 It is used within a Container component to provide consistent styling and layout.


### `ListingInfo.tsx`

📄 This file contains the implementation of the `ListingInfo` component in a React application.
🏠 The purpose of this component is to display information about a listing, including the host, description, guest count, room count, bathroom count, category, and location.
🧩 It imports various dependencies and components, such as `Avatar`, `useCountries`, `IconType`, `ListingCategory`, and `Map`.
📝 The component receives props such as `user`, `description`, `guestCount`, `roomCount`, `bathroomCount`, `category`, and `locationValue`.
🖼️ It renders the host information, guest and room counts, category (if provided), description, and a map component.
🌍 The map component is rendered with coordinates obtained from the `useCountries` hook.
🔒 The component is exported as the default export of the file.



### `page.tsx`

📄 This file contains the code for the ListingPage component. 
🏢 It imports functions for getting the current user, getting a listing by its ID, and getting reservations.
🏠 It also imports the ClientOnly and EmptyState components.
📝 The ListingPage component takes in a listing ID as a parameter.
✅ It fetches the listing, reservations, and the current user using the imported functions.
🔒 If there is no listing, it renders the EmptyState component inside the ClientOnly component.
🌟 Otherwise, it renders the ListingClient component inside the ClientOnly component, passing in the fetched listing, reservations, and current user as props.
🔗 The ListingPage component is the default export of this file.

<!-- Living README Summary -->