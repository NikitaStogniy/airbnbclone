

<!-- Living README Summary -->
## 🌳 Living Summary

This folder contains a collection of React components and files that serve various purposes. It includes components for displaying avatars, buttons, category boxes, empty states, heart buttons, inputs, listings, loaders, maps, modals, and a navbar. These components are designed to be reusable and customizable for use in a React application. The folder also includes files that handle client-side rendering, container styling, and navigation. Overall, the contents of this folder contribute to the user interface and functionality of a larger project.


### `Avatar`

This folder contains a file called Avatar.tsx, which is an implementation of an Avatar component. The component displays an image as an avatar, using the Next.js Image component. It accepts a source URL as a prop, and if no source is provided, it displays a placeholder image. The avatar is displayed as a round image with a height and width of 30 pixels.


### `Button`

This folder contains a file named "Button.tsx" which defines a reusable React component called "Button". The component accepts various props to customize its appearance and behavior, including label, onClick, disabled, outline, small, and icon. The component uses tailwind CSS classes for styling and provides different styles based on the props passed to it. The purpose of this file is to provide a customizable and reusable button component for use in a React application.


### `CategoryBox`

This folder contains a TypeScript file called `CategoryBox.tsx` that exports a React functional component called `CategoryBox`. The `CategoryBox` component displays a box with an icon and a label, and it is used for displaying and navigating categories in a larger project. It uses the `useRouter` and `useSearchParams` hooks from the Next.js library for navigation, and it also imports the `IconType` interface from the `react-icons` library. The appearance of the `CategoryBox` changes based on whether it is selected or hovered, and clicking on it updates the URL query parameter for the category and triggers a navigation.


### `ClientOnly.tsx`

📄 This file contains a React component called "ClientOnly"   
🔌 The purpose of this component is to conditionally render its children only on the client side   
🎯 It uses the useState and useEffect hooks from React   
⚛️ The component checks if it has mounted using the hasMounted state variable   
🏗️ If it hasn't mounted yet, it returns null to prevent rendering   
🚀 Once it has mounted, it renders its children   
💡 This component is useful for scenarios where you only want certain parts of your application to be rendered on the client side   
📝 It requires the children prop, which should be the content to be rendered   
🌐 This file needs to be imported and used in other parts of the application   
👍 It helps improve performance by avoiding unnecessary rendering on the server side


### `Container.tsx`

📝 This file defines a React functional component called "Container".
📦 The component takes in a single prop called "children" of type React.ReactNode.
💻 It renders a div element with a class name of "max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4".
👶 The "children" prop is rendered inside the div, allowing other components to be nested within this container.
🔗 The component is exported as the default export of the file.


### `EmptyState`

This folder contains a single file called EmptyState.tsx, which is a React component that displays a message when there are no exact matches found. It takes in optional props for the title, subtitle, and whether to show a reset button. The component is styled using Tailwind CSS classes and uses the useRouter hook from Next.js for navigation. Clicking the reset button will navigate to the home page.


### `HeartButton.tsx`

This folder contains a TypeScript file called HeartButton.tsx, which implements a React component called HeartButton. The purpose of the HeartButton component is to display a heart icon that can be toggled on and off. It takes in a listingId and currentUser as props, and uses a custom hook called useFavorite to handle the logic for checking if the listing is favorited and toggling the favorite status. When the button is clicked, it calls the toggleFavorite function from the useFavorite hook. The button has hover and transition effects, and renders two heart icons, one filled and one outlined, based on the hasFavorite state from the useFavorite hook.


### `Inputs`

This folder contains various React components that serve different purposes. There is a calendar component that uses the "react-date-range" library, a category input component for selecting categories, a counter component for displaying and updating a counter, a country select component for choosing countries, an image upload component that utilizes Next.js and Cloudinary, and an input component for forms. These components are designed to be reusable and customizable for use in a React application.


### `Listings`

This folder contains three React components: ListingCard, ListingReservation, and ListingsHead. 

The ListingCard component is a reusable component that displays information about a listing, including an image, location, price, and reservation date. It also includes functionality for favoriting the listing and displaying an action button.

The ListingReservation component handles the reservation details for a listing, allowing users to select a date range and calculate the total price. It includes a calendar input, reserve button, and total price display.

The ListingsHead component renders a heading and image for a listing, along with a heart button for favoriting. It fetches location data based on a location value and displays the image using the "next/image" component.

Overall, this folder contains components related to displaying and interacting with listings in a React application.


### `Loader.tsx`

📝 This file contains a React component called "Loader".
🔧 The purpose of this component is to display a loading spinner.
🎯 It is used to indicate that the content is being loaded.
💻 The component is imported from the "react-spinners" library.
🌈 The spinner is a PuffLoader with a size of 100 and a red color.
🖥️ The component is a div with a height of 70vh, centered vertically and horizontally.
👍 The component is exported as the default export.



### `Map`

This folder contains a file called Map.tsx, which is a React component used for rendering a map using the Leaflet library. It uses the MapContainer component from react-leaflet to display the map and allows the center and zoom level to be specified. The map tiles are provided by OpenStreetMap, and a marker can be added to the map at the specified center location. The file also includes some import statements and an interface definition.


### `Modals`

This folder contains multiple TypeScript files that represent React components. Each file focuses on a specific functionality, such as rendering a heading, handling login or registration, creating a listing on Airbnb, or searching and filtering. These components utilize various libraries and hooks for authentication, form validation, API calls, styling, and navigation. The files are well-documented and can be imported and used in other React components.


### `Navbar`

This folder contains files that are part of a property listing website. The files include components for displaying categories, a logo, a menu item, a navbar, a search bar, and a user menu. These components are used to create the user interface and functionality of the website, such as selecting categories, navigating, searching for properties, and managing user actions. The files are written in React and may use various libraries and dependencies for styling, navigation, and authentication.

<!-- Living README Summary -->