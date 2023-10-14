

<!-- Living README Summary -->
## 🌳 Living Summary

This folder contains a file called "schema.prisma" which is used to define the data model and relationships for a MongoDB database. It includes models such as "User", "Account", "Listing", and "Reservation" with various fields and relationships between them. The file also includes a generator section for generating the Prisma client. The purpose of this file is to provide a clear and structured way to define the data model and relationships for a MongoDB database using Prisma.


### `schema.prisma`

📄 This file is a Prisma schema file used to define the data model and relationships for a MongoDB database. 
🔒 It defines a "User" model with various fields such as name, email, and hashed password. 
🔗 The "User" model has relationships with other models such as "Account", "Listing", and "Reservation". 
🔑 The "Account" model represents external accounts associated with a user, such as social media or authentication providers. 
🏠 The "Listing" model represents property listings with fields like title, description, and price. 
📅 The "Reservation" model represents reservations made by users for specific listings. 
🔗 There are defined relationships between the models, such as a user having multiple accounts or reservations being associated with a user and a listing. 
🗂️ The file also includes a generator section for generating the Prisma client. 
🔗 The file uses Prisma annotations and directives to define additional metadata and behavior for the models. 
🔍 The purpose of this file is to provide a clear and structured way to define the data model and relationships for a MongoDB database using Prisma.

<!-- Living README Summary -->