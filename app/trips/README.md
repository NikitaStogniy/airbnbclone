

<!-- Living README Summary -->
## 🌳 Living Summary

This folder contains two files: `TripsClient.tsx` and `page.tsx`. The `TripsClient.tsx` file is a React component that displays a list of trips and allows the user to cancel reservations. It uses the `useRouter` hook from the `next/navigation` package and renders a container with a heading and a grid of listing cards. Each listing card has a cancel reservation button that triggers a DELETE request to `/api/reservations/{id}`. The `page.tsx` file defines the `TripsPage` component, which checks if there is a current user and displays an empty state component if there isn't. It retrieves reservations for the current user and displays an empty state component if there are no reservations. Otherwise, it renders the `TripsClient` component with the reservations and current user as props. The `TripsPage` component is exported as the default export of the file.


### `TripsClient.tsx`

📄 This file is a React component called `TripsClient`.
🔒 It imports various components and types.
🔁 It uses the `useRouter` hook from the `next/navigation` package.
📦 It renders a container with a heading and a grid of listing cards.
🗑️ Each listing card has a cancel reservation button.
🔐 The cancel reservation button triggers a DELETE request to `/api/reservations/{id}`.
🍞 It displays toast notifications for success and error messages.
🔒 The component receives props for reservations and the current user.
🚀 The purpose of this file is to display a list of trips and allow the user to cancel reservations.


### `page.tsx`

📝 This file defines the `TripsPage` component. 
🔒 It imports `EmptyState`, `ClientOnly`, `getCurrentUser`, `getReservations`, and `TripsClient`.
🔐 It checks if there is a current user and displays an empty state component if there isn't.
🔐 It retrieves reservations for the current user and displays an empty state component if there are no reservations.
🔐 Otherwise, it renders the `TripsClient` component with the reservations and current user as props.
🔒 The component is wrapped in `ClientOnly` to ensure it only runs on the client-side.
🔐 The `TripsPage` component is exported as the default export of the file.

<!-- Living README Summary -->