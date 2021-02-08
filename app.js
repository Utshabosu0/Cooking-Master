fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => response.json())
    .then(data => displayUser(data))

const displayUser = categories => {


    const categoriesDiv = document.getElementById("categories-container");
    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        const categoryDiv = document.createElement('div');
        const countryInfo = `
        <img src="${category.image}">
        <h3 >${category.strCategory}</h3>
        `
        categoryDiv.innerHTML = categoryInfo;
        categoriesDiv.appendChild(categoryDiv);


    }
}