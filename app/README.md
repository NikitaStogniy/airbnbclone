

<!-- Living README Summary -->
## 🌳 Living Summary

This folder contains various files and folders related to a web application. It includes files for handling user authentication, retrieving user information, fetching listings, managing reservations, and interacting with a database using Prisma. There are also components for displaying listings, favorites, reservations, and error states. Additionally, there are files for managing layout, custom hooks, and global styles. Overall, this folder contributes to the functionality and user interface of a larger project.


### `[listingId]`

This folder contains files related to a listing page in a React application. The `ListingCategory.tsx` file contains the code for a component that renders a category item. The `ListingClient.tsx` file represents the client-side view of the listing page and handles reservations, displays listing information, and allows users to create new reservations. The `ListingInfo.tsx` file displays information about a listing, including the host, description, guest count, room count, bathroom count, category, and location. The `page.tsx` file is the main component for the listing page, fetching data and rendering the appropriate components based on the fetched data.


### `actions`

This folder contains several TypeScript files that handle different aspects of a web application. The files include functions to handle user authentication, retrieve user information, fetch favorite listings, retrieve listings by ID or based on various parameters, and get reservations. The files make use of libraries like `next-auth/next` and `prisma` for server session management and database interactions. They also handle errors and format data for consistency.


### `api`

This folder contains different routes for handling various functionalities of a web application. The `favorites` folder contains a file for adding and removing favorite listings for a user. The `listings` folder handles the creation and deletion of listings from a database. The `register` folder is responsible for creating new users. The `reservations` folder handles requests related to reservations, such as deleting and creating new reservations.


### `components`

This folder contains a collection of React components and files that serve various purposes. It includes components for displaying avatars, buttons, category boxes, empty states, heart buttons, inputs, listings, loaders, maps, modals, and a navbar. These components are designed to be reusable and customizable for use in a React application. The folder also includes files that handle client-side rendering, container styling, and navigation. Overall, the contents of this folder contribute to the user interface and functionality of a larger project.


### `error.tsx`

📝 This file is an implementation of an error state component in a React application.
🎯 It is responsible for displaying an empty state with a title and subtitle when an error occurs.
🔀 The component uses the useEffect hook to log the error to the console whenever it changes.
📦 It imports the EmptyState component from a separate file.
🔗 The component is exported as the default export of the file.



### `favorite`

This folder contains two files: "FavoritesClient.tsx" and "page.tsx". "FavoritesClient.tsx" is a React functional component that displays a list of favorite listings for the current user. It imports various components and types, and renders a container with a heading and a grid layout of listing cards. "page.tsx" is a JavaScript module that exports a function called "ListingPage" which is responsible for rendering a page that displays favorite listings. It imports components and actions, retrieves the user's favorite listings and the current user, and renders the appropriate components based on the presence of favorite listings.


### `globals.css`

📄 This file contains custom styles for a web page.  
🔧 It sets the height of the HTML, body, and root elements to 100%.  
🌿 It modifies the z-index of certain elements for Leaflet, a mapping library.  
📅 It adjusts the width and font size of a calendar component.


### `hooks`

This folder contains multiple TypeScript files, each defining a custom hook with a specific purpose. The hooks handle different functionalities such as retrieving and manipulating country data, favoriting and unfavoriting a listing, managing a login modal, managing a registration modal, managing a rent modal, and managing a search modal. These hooks can be imported and used in other components to implement these functionalities in a React application.


### `layout.tsx`

📄 This file is the root layout component of an Airbnb clone made with Next.js. 
🔧 It imports various components and styles to create the layout of the application. 
📝 The `metadata` object contains information about the application's title and description. 
🔒 The `RootLayout` function is an async function that serves as the main layout for the application. 
🌍 It sets the language of the document to English. 
👶 It fetches the current user information using the `getCurrentUser` function. 
💻 It renders a set of components including modals, navbar, and a toaster provider. 
📚 The layout wraps the children components and applies a font style. 
🔨 The purpose of this file is to provide the overall structure and layout for the Airbnb clone application. 
🔎 The file can be used as a starting point to understand the components and layout structure of the application.


### `libs`

This folder contains a file called `prismadb.ts` that is used to create and export a Prisma client instance. The Prisma client is responsible for interacting with the database. The file checks if a global Prisma client instance already exists, and if not, creates a new one. The created Prisma client instance is exported as the default export of this file. This file is likely to be used in other parts of the codebase to interact with the database.


### `loading.tsx`

📄 This file exports a component called "Loading"
🔄 The component renders a Loader component
⚙️ The purpose of this file is to provide a loading screen for the application


### `page.tsx`

📝 This file exports a component called "Home" that serves as the main page of an application.
🔍 It takes in search parameters as props and fetches listings and current user data.
📦 If there are no listings, it renders an "EmptyState" component.
🖥️ Otherwise, it renders a grid of "ListingCard" components, passing in the fetched data.
🔒 The rendering of components is wrapped in a "ClientOnly" component.
📂 The file also includes import statements for various components and actions.
💡 It defines interfaces for the props used by the "Home" component.
🔁 The "Home" component is an async function that awaits the fetching of data.
🏠 This file is likely part of a larger application, serving as the main page or home screen.


### `prisma`

This folder contains a file called "schema.prisma" which is used to define the data model and relationships for a MongoDB database. It includes models such as "User", "Account", "Listing", and "Reservation" with various fields and relationships between them. The file also includes a generator section for generating the Prisma client. The purpose of this file is to provide a clear and structured way to define the data model and relationships for a MongoDB database using Prisma.


### `property`

This folder contains two files: "PropertyClient.tsx" and "page.tsx". "PropertyClient.tsx" is a React component that displays a list of property listings, allowing the user to delete listings and showing success/error notifications. "page.tsx" defines the "TripsPage" component, which fetches the current user and their property listings, rendering them using the "PropertyClient" component.


### `providers`

This folder contains a file called ToasterProvider.tsx, which is a React component used to integrate a notification system called Toaster into a larger application. The Toaster component is imported from the react-hot-toast library and is responsible for displaying messages. The ToasterProvider file serves as the entry point for using the Toaster component and may include additional logic or configuration specific to the application. It can be exported and used in other parts of the application.


### `reservations`

This folder contains two files: "ReservationsClient.tsx" and "page.tsx". "ReservationsClient.tsx" is a React component that displays a list of reservations and allows the user to cancel a reservation. It requires authentication and uses various dependencies and components. "page.tsx" is the main component for the ReservationsPage. It imports actions to get the current user and reservations. If the current user exists, it renders the ReservationsClient component, otherwise it renders an EmptyState component.


### `trips`

This folder contains two files: `TripsClient.tsx` and `page.tsx`. The `TripsClient.tsx` file is a React component that displays a list of trips and allows the user to cancel reservations. It uses the `useRouter` hook from the `next/navigation` package and renders a container with a heading and a grid of listing cards. Each listing card has a cancel reservation button that triggers a DELETE request to `/api/reservations/{id}`. The `page.tsx` file defines the `TripsPage` component, which checks if there is a current user and displays an empty state component if there isn't. It retrieves reservations for the current user and displays an empty state component if there are no reservations. Otherwise, it renders the `TripsClient` component with the reservations and current user as props. The `TripsPage` component is exported as the default export of the file.


### `types`

This folder contains a file called `index.ts` that defines types for user, listing, and reservation objects. These types are modified versions of the original types, with certain fields removed or added to provide safer versions of the original types. The purpose of this file is to provide these safer types for use in the codebase.

<!-- Living README Summary -->