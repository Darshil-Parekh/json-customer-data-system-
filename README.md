# 👥 JSON Customer Data System

A simple and responsive **Customer Data Management System** built using **HTML, CSS, and JavaScript**.

This project demonstrates how JavaScript can work with a local **JSON file** to load, display, search, and manage customer information dynamically without using a traditional database.

## 🔗 Live Demo

👉 **Live Website:**
https://darshil-parekh.github.io/json-customer-data-system-/

---

## ✨ Features

* 👥 Display customer data dynamically
* 🔎 Search customers by name or available information
* 📋 Display customer records in a structured table
* 📄 Store customer information in a JSON file
* ⚡ Load JSON data using the JavaScript Fetch API
* 🔄 Dynamically update the table
* ❌ Display a message when no matching customer is found
* 📱 Responsive user interface
* 💻 Simple and beginner-friendly JavaScript
* 🚀 Hosted using GitHub Pages

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Data Storage

* JSON

### APIs / JavaScript Features

* Fetch API
* JSON
* DOM Manipulation
* Event Listeners
* Array Methods

### Development Tools

* Visual Studio Code
* Git
* GitHub
* GitHub Pages

---

## 📂 Project Structure

```text
json-customer-data-system/
│
├── index.html
├── style.css
├── script.js
├── customers.json
│
└── README.md
```

---

## ⚙️ How It Works

The project uses a JSON file as a simple data source instead of a traditional database.

### 1. Customer data is stored in JSON

Customer information is stored inside:

```text
customers.json
```

The JSON file contains customer records such as:

```json
[
    {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "9876543210"
    }
]
```

The exact fields can be changed according to the requirements of the project.

---

### 2. JavaScript fetches the JSON file

When the webpage loads, JavaScript uses the **Fetch API** to request the customer data.

```javascript
fetch("customers.json")
    .then(response => response.json())
    .then(data => {

        customers = data;

        displayCustomers(customers);

    });
```

The JSON response is converted into a JavaScript object/array using:

```javascript
response.json()
```

---

### 3. Customer data is stored

The received data is stored in a JavaScript array.

```javascript
let customers = [];
```

After fetching the JSON file:

```javascript
customers = data;
```

This allows the application to work with the customer records using JavaScript.

---

### 4. Customer records are displayed

A JavaScript function is used to generate the table rows dynamically.

```javascript
function displayCustomers(data) {

    table.innerHTML = "";

    // Display customer records
}
```

Instead of manually writing every customer inside the HTML, the records are generated from the JSON data.

---

### 5. Customer search

The search input allows the user to find specific customers.

When the user enters a search term, JavaScript checks the customer data and displays the matching records.

```text
User enters search
        ↓
JavaScript gets search value
        ↓
Customer data is filtered
        ↓
Matching customers are found
        ↓
Table is updated
```

If there are no matching records, the application displays a message such as:

```text
No customers found
```

---

## 🔄 Application Flow

```text
        Page Loads
            ↓
      JavaScript Starts
            ↓
      Fetch customers.json
            ↓
       JSON Response
            ↓
     Convert JSON → Object
            ↓
    Store Data in Array
            ↓
    Display Customer Table
            ↓
      User Searches
            ↓
      Filter Customer Data
            ↓
       Update Table
```

---

## 🔎 Search Functionality

The search feature demonstrates how JavaScript array methods can be used to filter data.

For example:

```javascript
const filteredCustomers = customers.filter(customer => {

    return customer.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());

});
```

This allows the user to search without reloading the webpage.

---

## 🚀 How to Run the Project Locally

### Step 1 – Clone the Repository

```bash
git clone https://github.com/Darshil-Parekh/json-customer-data-system-.git
```

### Step 2 – Open the Project

```bash
cd json-customer-data-system-
```

Open the project folder in **Visual Studio Code**.

---

### Step 3 – Start Live Server

Install the **Live Server** extension in VS Code if you haven't already.

Then:

1. Open `index.html`
2. Right-click the file
3. Select **Open with Live Server**

The project will open in your browser.

> **Important:** It is recommended to use Live Server instead of directly opening `index.html`, because the browser may block Fetch API requests to local JSON files when using the `file://` protocol.

---

## 📊 Data Flow

```text
customers.json
      ↓
   Fetch API
      ↓
JavaScript Array
      ↓
Filter / Search
      ↓
DOM Manipulation
      ↓
Customer Table
```

---

## 📚 What I Learned

While building this project, I practiced:

* JavaScript Fetch API
* Working with JSON
* Reading external/local JSON files
* Promises
* `.then()`
* Array methods
* `.filter()`
* String methods
* `toLowerCase()`
* `includes()`
* DOM manipulation
* Dynamic HTML generation
* Event listeners
* Search functionality
* Conditional rendering
* Handling empty search results

---

## 🔮 Future Improvements

The project can be extended with more advanced functionality.

### 👤 Customer Management

* ➕ Add new customers
* ✏️ Edit customer information
* 🗑️ Delete customers
* 👁️ View customer details

### 🔎 Advanced Search

* Search by customer ID
* Search by email
* Search by phone number
* Multiple search filters

### 📊 Dashboard

* Total customers
* New customers
* Customer statistics
* Customer activity

### 💾 Backend Integration

The JSON file can eventually be replaced with a real backend and database such as:

* Node.js
* Express.js
* MongoDB
* MySQL
* Django
* REST API

This would allow customer data to be permanently added, updated, and deleted.

---

## ⚠️ Current Limitations

This project currently uses a **JSON file as its data source**.

Therefore:

* Data is not stored in a real database.
* Changes made using JavaScript are not permanently saved to the JSON file.
* The project is mainly intended for learning and frontend practice.
* A backend would be required for persistent customer management.

---

## 🌐 Deployment

The project is deployed using **GitHub Pages**.

### Live Website

https://darshil-parekh.github.io/json-customer-data-system-/

GitHub Pages allows the frontend files to be hosted and accessed directly through a public URL.

---

## 📸 Screenshots

You can add screenshots of your application here.

For example:

```markdown
![Customer Data System](screenshots/customer-system.png)
```

Recommended structure:

```text
screenshots/
└── customer-system.png
```

---

## 👨‍💻 Author

**Darshil Parekh**

B.E. IT Engineering Student

### GitHub

https://github.com/Darshil-Parekh

---

## 📄 License

This project was created for **learning and educational purposes**.

Feel free to explore, modify, and improve the project.

---

⭐ **If you found this project useful, consider giving the repository a star!**
