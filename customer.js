let customers = [];

const table = document.querySelector("#customerTable");
const searchInput = document.querySelector("#searchCustomer");

fetch("customers.json")
    .then(response => response.json())
    .then(data => {

        customers = data;

        displayCustomers(customers);

    });

function displayCustomers(data) {

    table.innerHTML = "";

    if (data.length === 0) {
        table.innerHTML = `
            <tr>
                <td colspan="5">No customers found.</td>
            </tr>
        `;
        return;
    }

    data.forEach(customer => {

        const row = `
            <tr>
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>${customer.phone}</td>
                <td>${customer.city}</td>
            </tr>
        `;

        table.innerHTML += row;
    });
}

searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.toLowerCase();

    const filteredCustomers = customers.filter(customer => {

        return (
            String(customer.id).includes(searchValue) ||
            String(customer.name).toLowerCase().includes(searchValue) ||
            String(customer.email).toLowerCase().includes(searchValue) ||
            String(customer.phone).includes(searchValue) ||
            String(customer.city).toLowerCase().includes(searchValue)
        );

    });

    displayCustomers(filteredCustomers);
});