

<!-- Living README Summary -->
## 🌳 Living Summary

This folder contains three React components: ListingCard, ListingReservation, and ListingsHead. 

The ListingCard component is a reusable component that displays information about a listing, including an image, location, price, and reservation date. It also includes functionality for favoriting the listing and displaying an action button.

The ListingReservation component handles the reservation details for a listing, allowing users to select a date range and calculate the total price. It includes a calendar input, reserve button, and total price display.

The ListingsHead component renders a heading and image for a listing, along with a heart button for favoriting. It fetches location data based on a location value and displays the image using the "next/image" component.

Overall, this folder contains components related to displaying and interacting with listings in a React application.


### `ListingCard.tsx`

📝 The file defines a React functional component called `ListingCard`.
🔗 The component takes in various props, including data about a listing, reservation details, and user information.
🔍 It uses hooks and functions from other files to fetch and format data.
🎨 The component renders a card displaying information about a listing, including an image, location, price, and reservation date.
🖱️ The card is clickable and redirects to a specific listing page when clicked.
❤️ It includes a heart button for favoriting a listing.
🔒 The component can also display an action button with a customizable label.
📥 The action button can be disabled based on a boolean prop.
✨ The purpose of this file is to define the structure and behavior of a reusable listing card component in a React application.


### `ListingReservation.tsx`

📝 This file is a React functional component called "ListingReservation".
🔄 It takes in various props such as price, dateRange, totalPrice, onChangeDate, onSubmit, disabled, and disabledDates.
💻 The component renders a container with a price display, a calendar input, a reserve button, and a total price display.
📅 The calendar input uses the "react-date-range" library and is prepopulated with the date range passed in as props.
🔒 Certain dates can be disabled based on the "disabledDates" prop.
🔒 The reserve button is disabled based on the "disabled" prop and triggers the "onSubmit" function when clicked.
📝 The purpose of this component is to display and handle the reservation details for a listing, including selecting a date range and calculating the total price.


### `ListingsHead.tsx`

📝 This file is a React component called "ListingsHead".
🖼️ It renders a heading and an image for a listing.
❤️ It also includes a heart button component for favoriting listings.
🌍 The location of the listing is displayed based on a location value.
🌐 The location value is used to fetch the corresponding location data using the "useCountries" hook.
📷 The image for the listing is displayed using the "next/image" component.
🔍 The image is set to fill the container and is styled as an object cover.
🖤 The heart button component is rendered in the top-right corner of the image.
🔒 The heart button component is conditionally rendered based on the current user.
📄 The component takes in props such as the title, location value, image source, id, and current user.

<!-- Living README Summary -->