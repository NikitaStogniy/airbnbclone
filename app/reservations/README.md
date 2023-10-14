

<!-- Living README Summary -->
## 🌳 Living Summary

This folder contains two files: "ReservationsClient.tsx" and "page.tsx". "ReservationsClient.tsx" is a React component that displays a list of reservations and allows the user to cancel a reservation. It requires authentication and uses various dependencies and components. "page.tsx" is the main component for the ReservationsPage. It imports actions to get the current user and reservations. If the current user exists, it renders the ReservationsClient component, otherwise it renders an EmptyState component.


### `ReservationsClient.tsx`

📝 This file is a React component called "ReservationsClient".
📚 It displays a list of reservations and allows the user to cancel a reservation.
🔒 It requires the user to be authenticated.
📝 The reservations are passed as a prop to the component.
🔑 The current user's information is also passed as a prop.
🗂️ It imports various dependencies and components.
📝 The component uses the react-hot-toast library for displaying toast messages.
🔄 The component uses axios for making HTTP requests.
🔀 It uses the useRouter hook from the next/navigation module for navigation.
📝 The component renders a Container component with a Heading component and a grid of ListingCard components.


### `page.tsx`

📄 This file is the main component for the ReservationsPage.    
🔒 It imports the EmptyState and ClientOnly components.    
🔍 It imports getCurrentUser and getReservations actions.    
📝 It defines the ReservationsPage function component.    
🔐 It retrieves the currentUser using getCurrentUser.    
🔁 If the currentUser doesn't exist, it renders an EmptyState component.    
📋 It retrieves reservations using getReservations.    
🔄 If there are no reservations, it renders an EmptyState component.    
📑 Otherwise, it renders the ReservationsClient component.    
📤 The ReservationsPage is exported as the default component.    

<!-- Living README Summary -->