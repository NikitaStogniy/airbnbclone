

<!-- Living README Summary -->
## 🌳 Living Summary

This folder contains multiple TypeScript files that represent React components. Each file focuses on a specific functionality, such as rendering a heading, handling login or registration, creating a listing on Airbnb, or searching and filtering. These components utilize various libraries and hooks for authentication, form validation, API calls, styling, and navigation. The files are well-documented and can be imported and used in other React components.


### `Heading.tsx`

📄 This file contains a React functional component called "Heading".
🎯 The purpose of this component is to render a heading with an optional subtitle.
⚙️ It takes in props for the title, subtitle, and an optional center alignment.
🖥️ The component uses conditional rendering to apply the "text-center" or "text-start" class based on the center prop.
📝 The title is rendered with a "text-2xl" and "font-bold" class.
📝 The subtitle is rendered with a "font-light" and "text-neutral-500" class.
🔑 The "title" prop is required, while the "subtitle" and "center" props are optional.
🏷️ The component is exported as the default export of the file.
🔀 The component can be imported and used in other React components.
🔧 The component's styling classes are not defined within this file.


### `LoginModal.tsx`

📃 This file is a component called "LoginModal".
🔒 It handles the login functionality for a user.
🔑 It uses the NextAuth library for authentication.
🔌 It imports various components and hooks for the login modal.
🔓 It includes form validation using react-hook-form.
🚀 It allows users to log in with their Google or Github accounts.
📧 It requires users to enter their email and password.
📝 It displays error messages if there are any validation errors.
👥 It provides an option for users to create a new account.
❌ It disables the login button while the login process is ongoing.


### `Modal.tsx`

📄 This file contains the code for a modal component in React.
🔒 The modal can be opened and closed.
📝 It accepts various props for customization such as title, body, and footer.
🔌 It also includes functionality for handling submit and secondary actions.
⏱️ The modal has animations for opening and closing.
🎨 It has a responsive design with different widths based on screen size.
🔌 It uses the react-icons/io package for the close button.
💼 The modal is styled using Tailwind CSS classes.
✨ It exports the Modal component as the default export.
📖 The file is well-documented with comments explaining the different sections of the code.


### `RegisterModal.tsx`

📝 This file is a React component called "RegisterModal".
🔒 It handles the registration process for users.
🔑 It uses the react-hook-form library for form validation and submission.
📥 It imports various components and icons for the UI.
📤 It makes API calls to register a user using axios.
🚀 It uses toast notifications to display error messages.
🔒 It has a toggle function to switch between the registration and login modals.
🌐 It provides options to register with Google and GitHub.
⚙️ It is used in an application called AirBnb.
🔒 It is part of a larger codebase and is imported/exported as needed.    


### `RentModal.tsx`

📄 This file is a component called "RentModal" that is used for creating a listing on Airbnb.
🏠 It handles the step-by-step process of gathering information about the listing, such as category, location, amenities, images, description, and price.
📝 It uses React hooks and form handling to manage the state and data input.
📷 It includes components for selecting categories, country, counters, image upload, and input fields.
🔍 It uses dynamic imports for the map component.
💾 It makes use of axios for sending data to the server and react-hot-toast for displaying notifications.
🔄 It uses react-router for navigation purposes.
📑 It defines an enum called "STEPS" to represent the different steps in the listing creation process.
⏭️ It includes functions for moving to the next and previous steps, as well as submitting the listing data.
🌟 It renders a modal component with the appropriate content and actions based on the current step.


### `SearchModal.tsx`

📝 This file is a React component called "SearchModal".
🔍 It is a modal component used for searching and filtering.
🌍 It allows users to select a location, date range, and specify guest, room, and bathroom counts.
🗺️ The location is selected using a map component.
📅 The date range is selected using a calendar component.
👥 The guest, room, and bathroom counts are selected using counter components.
⬅️ Users can navigate back and forth between different steps of the search process.
🔍 When the search is complete, the modal closes and the search results are displayed.
🧩 The component uses various hooks and external libraries to handle state and functionality.
📦 The component is exported as the default export of the file.

<!-- Living README Summary -->