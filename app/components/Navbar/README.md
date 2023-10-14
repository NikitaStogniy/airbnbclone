

<!-- Living README Summary -->
## 🌳 Living Summary

This folder contains files that are part of a property listing website. The files include components for displaying categories, a logo, a menu item, a navbar, a search bar, and a user menu. These components are used to create the user interface and functionality of the website, such as selecting categories, navigating, searching for properties, and managing user actions. The files are written in React and may use various libraries and dependencies for styling, navigation, and authentication.


### `Categories.tsx`

📝 This file defines the categories and icons used in a property listing website.
📝 It exports an array of category objects that include labels, icons, and descriptions.
📝 It also exports a component called Categories that displays the category boxes on the main page.
📝 The component uses the useSearchParams and usePathname hooks from the next/navigation package.
📝 It checks if the current page is the main page and returns null if not.
📝 The component renders a container with a row of category boxes.
📝 Each category box has a label, icon, and a selected state based on the current category parameter.
📝 The file imports various icon components from different packages like react-icons and next/navigation.
📝 The purpose of this file is to provide the necessary data and components for displaying and selecting categories on the property listing website.
📝 It is part of a larger codebase and is likely used in conjunction with other files and components.


### `Logo.tsx`

📁 This file contains the code for a Logo component.  
🖼️ It imports the necessary dependencies for the component.  
🔗 It uses the `useRouter` hook from Next.js for navigation.  
🖱️ The Logo is wrapped in an `Image` component from Next.js.  
🔍 Clicking on the Logo triggers a navigation to the home page.  
🖼️ The `alt` attribute provides alternative text for the Logo.  
💼 The Logo has a CSS class that hides it on small screens.  
📐 The Logo has a fixed height and width of 100 pixels.  
📂 The Logo image file is located in the `/images` directory.  
📤 The Logo component is exported as the default export of the file.


### `MenuItem.tsx`

📄 This file is a React component called MenuItem.  
⚛️ It receives two props: onClick (a function) and label (a string).  
🖱️ When clicked, it triggers the onClick function.  
💻 It renders a div element with some styling and the label text.  
🎨 The div has hover effects and a transition.  
🔤 The label text is displayed in a bold font.  
👀 It's likely used as a menu item in a larger application.


### `Navbar.tsx`

📄 This file contains the code for the Navbar component of a web application.
🔎 It imports various components and types from other files.
👨‍💻 The Navbar component takes in a currentUser prop and displays a fixed navigation bar at the top of the page.
🔍 The navigation bar includes a logo, a search bar, and a user menu.
🔧 The Navbar component is responsible for rendering the categories component as well.
💡 It uses Tailwind CSS classes for styling.
🧩 The Navbar component is a functional component written in React.
📦 It exports the Navbar component as the default export of the file.
💻 The file also includes a console.log statement for debugging purposes.


### `Search.tsx`

📝 This file is a React component called "Search" that is used for rendering a search bar.
🔍 It includes various hooks and functions for handling search functionality.
🌍 The component uses a hook called "useCountries" to get country data.
⏳ It also uses the date-fns library to calculate the duration between two dates.
👥 The search bar displays the selected location, duration, and guest count.
🔗 The search bar is clickable and opens a search modal.
🎨 The component has CSS classes for styling and responsiveness.
🖼️ It renders a search icon using the BiSearch component from the react-icons library.
🔖 The component is exported as the default export of the file.


### `UserMenu.tsx`

📝 This file contains the implementation of the UserMenu component in a React application. 
👤 The UserMenu component is responsible for rendering a menu for the current user, allowing them to perform various actions. 
🔒 If the user is logged in, the menu displays options such as "My trips", "My favorites", and "Log Out". 
🔓 If the user is not logged in, the menu displays options such as "Sign up" and "Log in". 
🏠 Additionally, there is an option to "Airbnb your home", which is displayed for both logged-in and logged-out users. 
📝 The component uses various hooks and imports, such as useRouter and next-auth/react, to handle navigation and authentication-related functionality. 
💻 The component is implemented using functional components and React hooks. 
🖼️ It also uses the Avatar component to display the user's profile image. 
📄 The component is exported as the default export of the file. 
⚙️ The component's appearance and behavior can be customized using CSS styles and event handlers.

<!-- Living README Summary -->