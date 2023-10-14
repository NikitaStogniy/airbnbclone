

<!-- Living README Summary -->
## 🌳 Living Summary

This folder contains multiple TypeScript files, each defining a custom hook with a specific purpose. The hooks handle different functionalities such as retrieving and manipulating country data, favoriting and unfavoriting a listing, managing a login modal, managing a registration modal, managing a rent modal, and managing a search modal. These hooks can be imported and used in other components to implement these functionalities in a React application.


### `useCountries.ts`

📂 This file is a module exporting a custom hook called "useCountries".  
🌍 The hook provides functions to retrieve and manipulate country data.  
🔍 The "getAll" function returns an array of formatted country objects.  
🔑 The "getByValue" function returns a specific country object based on its value.  
🔧 The country data is sourced from the "world-countries" library.  
⚙️ The data is formatted to include the country's value, label, flag, latlng, and region.


### `useFavorites.ts`

💡 The purpose of this file is to define a custom hook called `useFavorite` that handles favoriting and unfavoriting a listing.
💡 The `useFavorite` hook takes in the `listingId` and `currentUser` as parameters.
💡 It uses the `useRouter` hook from Next.js for navigation.
💡 It also uses the `useCallback` and `useMemo` hooks from React for performance optimization.
💡 The hook checks if the current user has favorited the listing by comparing the `listingId` with the `favoriteIds` in the `currentUser` object.
💡 The `toggleFavorite` function is responsible for toggling the favorite status of the listing.
💡 If the user is not logged in, it opens a login modal.
💡 The `toggleFavorite` function makes API requests to add or remove the listing from the user's favorites.
💡 After a successful request, it refreshes the page and displays a success toast message.
💡 If an error occurs during the request, an error toast message is displayed.


### `useLoginModal.ts`

📝 This file defines a hook called `useLoginModal` using the Zustand library.
💼 The `useLoginModal` hook manages the state of a login modal.
🔓 It keeps track of whether the modal is open or closed.
🔍 It provides functions to open and close the modal.
🧩 It uses the `create` function from Zustand to create the hook.
💡 The hook is exported as the default export of the file.


### `useRegisterModal.ts`

📄 This file is a TypeScript module.
🔒 It exports a custom hook called "useRegisterModal".
🚪 The hook manages the state of a modal window for registering.
📝 The state includes a boolean flag to indicate if the modal is open or closed.
🔓 The hook provides functions to open and close the modal.
🔧 It uses the Zustand library to create and manage the state.
🔌 The hook can be used in other components to handle the registration modal.
🔗 Other components can import and use this hook to control the registration modal.
💡 This file provides a reusable and customizable registration modal functionality.


### `useRentModal.ts`

📝 This file defines a custom hook called "useRentModal". 
🏠 The hook manages the state of a modal component used for renting items. 
🔓 It keeps track of whether the modal is open or closed. 
🔐 It provides functions to open and close the modal. 
📦 The hook is created using the Zustand library. 
💡 Zustand is a state management library for React. 
🔄 The hook uses the "create" function from Zustand to create a store. 
🔍 The store contains the state and functions related to the modal. 
🧩 Other components can import and use this hook to manage the rent modal. 
👍 This file can be used as a starting point to implement a rent modal feature in a React application.


### `useSearchModal.ts`

📁 This file is a TypeScript module.     
🔍 It exports a custom hook called `useSearchModal`.     
👀 The hook creates a state for managing the visibility of a search modal.     
✅ The state includes a boolean `isOpen` to track if the modal is open.     
👥 The hook provides two functions: `onOpen` and `onClose`.     
🔧 `onOpen` can be called to set `isOpen` to true.     
🔒 `onClose` can be called to set `isOpen` to false.     
🔧 The hook is created using the `zustand` library.     
📦 The hook is ready to be imported and used in other components.     
🔍 The purpose of this file is to provide a reusable search modal state and actions.     

<!-- Living README Summary -->