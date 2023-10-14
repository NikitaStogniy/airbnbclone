

<!-- Living README Summary -->
## 🌳 Living Summary

This folder contains various React components that serve different purposes. There is a calendar component that uses the "react-date-range" library, a category input component for selecting categories, a counter component for displaying and updating a counter, a country select component for choosing countries, an image upload component that utilizes Next.js and Cloudinary, and an input component for forms. These components are designed to be reusable and customizable for use in a React application.


### `Calendar.tsx`

📋 This file is a React component for a calendar.
📅 It uses the "react-date-range" library to display a date range picker.
🎨 The calendar is styled with the default theme provided by the library.
🔧 It accepts props for the initial value, onChange callback, and disabled dates.
⚙️ The component is a functional component using React hooks.
🔒 It prevents selection of disabled dates.
🔳 The calendar is displayed vertically.
🎨 The range color is set to "#262626".
📅 The initial date is set to the current date.
📅 The minimum selectable date is set to the current date.


### `CategoryInput.tsx`

📝 This file contains the definition of a React functional component called CategoryInput.
🔗 It imports the IconType interface from the "react-icons" library.
📋 The CategoryInput component takes in props including an icon, a label, a selected boolean, and an onClick function.
🎨 It renders a styled div that acts as an interactive category input element.
🖱️ When clicked, the onClick function is called with the label value as its argument.
✅ The selected prop determines whether the element is styled as selected or not.
🔽 The icon is rendered using the imported Icon component from the react-icons library.
🔒 The label is displayed as a text inside the component.
🔀 The file exports the CategoryInput component as the default export.
📚 This file serves as an reusable and customizable input component for selecting categories.


### `Counter.tsx`

📋 This file is a React component named "Counter".
🔢 It is used to display a counter with a title, subtitle, and value.
➕ It allows the user to increment the counter by clicking on a plus icon.
➖ It allows the user to decrement the counter by clicking on a minus icon.
🔄 The counter value is updated through a callback function passed as a prop.
📝 The prop types for the component are defined using TypeScript interfaces.
🎨 The component's layout and styling are defined using CSS classes.
🔍 The plus and minus icons are imported from the "react-icons/ai" package.
⚛️ The component is a functional component using the React Hooks API.
📦 The component is exported as the default export of the file.


### `CountrySelect.tsx`

📝 This file is a React component called "CountrySelect" that serves as a select input for choosing countries.
🌍 It imports a custom hook called "useCountries" for fetching country data.
🔗 It also imports the "Select" component from the "react-select" library for rendering the select input.
📄 The component expects a value and onChange function as props.
⚙️ Inside the component, it uses the "useCountries" hook to fetch country data.
🌐 The fetched country data is used as options for the select input.
🖼️ The select input displays the flag, label, and region of each country as the option label.
🎨 The component applies custom styling to the select input using classNames and theme customization.
🔌 The component exports itself as the default export.
💡 The purpose of this file is to provide a reusable and customizable country select input component for use in a React application.


### `ImageUpload.tsx`

📝 This file is a React component for uploading and displaying an image.
📸 It utilizes the Next.js framework and Cloudinary for image uploading.
🔄 The component accepts an `onChange` callback and a `value` prop for managing the uploaded image.
⏫ The uploaded image is displayed using the `next/image` component from Next.js.
📎 The component is styled with Tailwind CSS classes.
📤 The image upload functionality is implemented using the `CldUploadWidget` component from Next Cloudinary.
🎨 The component includes a placeholder and a "Click to upload" message.
🖼️ If an image is already uploaded, it will be displayed in the component.
🖱️ Clicking on the component triggers the image upload process.
🔒 The uploaded image is returned securely using the `secure_url` property of the upload result.


### `Input.tsx`

✏️ This file is an implementation of an Input component in React.
✏️ The component accepts various props to customize its behavior and appearance.
✏️ It renders an input field with a label and optional dollar icon.
✏️ The component handles form registration and validation using react-hook-form.
✏️ It supports disabling the input field and formatting the value as a price.
✏️ The label animates when the input field is focused or has a value.
✏️ Error styles are applied to the input field and label if there are validation errors.
✏️ The component uses Tailwind CSS classes for styling.
✏️ The file exports the Input component as the default export.
✏️ The purpose of this file is to provide a reusable and customizable input component for forms in a React application.

<!-- Living README Summary -->