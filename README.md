# E-Commerce Backend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description

This is a backend code for E-commerce site.

## Table of Contents:

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Packages](#packages)
* [Demo](#demo)

## Installation

* Install [Node.js](https://nodejs.dev/)
* Clone the [Repo](https://github.com/sonali-pandey/e-commerce-backend)
* Run `npm install` on the command prompt to install all the dependencies

## Usage

### Creating the Database:
- Run `mysql -u root -p` in root of your directory

>NOTE: For some systems, you might have to run `export PATH="${PATH}:/usr/local/mysql/bin/"` first!

- Enter your MySQL password
- Run `source ./db/schema.sql` to create the database
- Run `quit;` to get out of MySQL

### Seeding the test data:
- Run `npm run seeds`

### Starting the app:

* **Starting the server:**
   - Run `npm start` : manually stop and start
   - Run `npm run dev` : starts the server through [nodemon](https://www.npmjs.com/package/nodemon); auto-refreshes

* **Testing the APIs**
   - Use [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) to test the API queries
   - Below are the APIs that can be tested:
      
   **GET API : View Data**
   
      1. /api/categories : Displays all the Categories
      2. /api/categories/id:<category_id> : Displays Category detail of the provided id
      
      3. /api/products : Displays all the Products
      4. /api/products/id:<product_id> : Displays Product details of the provided id
      
      5. /api/tags : Displays all the Tags
      6. /api/tags/id:<tags_id> : Displays Tag detail of the provided id

  **POST API : Add Data**
      
      1. /api/categories : Create a new Category
      2. /api/products : Cteate a new Product
      3. /api/tags : Create a new Tag
     
     >NOTE: You need to provide the details of the addition in JSON format

  **PUT API : Update Data**
      
      1. /api/categories/id:<category_id> : Update Category detail of the provided id
      2. /api/products/id:<product_id> : Update Product details of the provided id
      3. /api/tags/id:<tag_id> : Update Tag detail of the provided id

     >NOTE: You need to provide the detail to be updated in JSON format
      
  **DELETE API : Delete Data**
  
      1. /api/categories/id:<category_id> : Delete the Category with the provided id
      2. /api/products/id:<product_id> : Delete the Product with the provided id
      3. /api/tags/id:<tag_id> : Delete the tag with the provided id

     >NOTE: You need to provide the detail to be deleted in JSON format

## Tests
Testing not available

## Packages
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Express](https://expressjs.com/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Sequelize ORM](https://sequelize.org/)

## Demo

### GET API - View All

![View All](./assets/demo/GET-API-View-all.gif)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------

### GET API - View By Id

![View By ID](./assets/demo/GET-API-View-By-ID.gif)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------

### POST API - Add Data

![Add Data](./assets/demo/POST-API-Add-Data.gif)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------

### PUT API - Update Data

![Update Data](./assets/demo/PUT-API-Update-Data.gif)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------

### DELETE API - Delete Data

![Delete Data](./assets/demo/DELETE-API-Delete-Data.gif)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------

## Thank You
### Author Details
**Name:** Sonali Pandey

**GitHub:** [sonali-pandey](https://github.com/sonali-pandey)
