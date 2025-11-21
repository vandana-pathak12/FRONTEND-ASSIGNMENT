
const products = [
    { name: "Laptop", category: "electronics" },
    { name: "Mobile", category: "electronics" },
    { name: "Headphones", category: "electronics" },
    { name: "T-Shirt", category: "clothing" },
    { name: "Jeans", category: "clothing" },
    { name: "Jacket", category: "clothing" },
    { name: "Watch", category: "electronics" },
    { name: "Shoes", category: "clothing" },
    { name: "Camera", category: "electronics" },
    { name: "Sweater", category: "clothing" }
];

const productList = document.getElementById("productList");


displayProducts(products);

function displayProducts(items) {
    productList.innerHTML = "";
    items.forEach(p => {
        const li = document.createElement("li");
        li.textContent = p.name;
        productList.appendChild(li);
    });
}

function filterProducts(category) {
    if (category === "all") {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

function searchProduct() {
    const keyword = document.getElementById("search").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
    displayProducts(filtered);
}
