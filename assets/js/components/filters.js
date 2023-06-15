
export const showCategories = (products, setProducts) => {

    
    const categories = [
        'shirt',
        'hoddie',
        'sweater',
    ]
    
    const categoriesList = document.getElementsByClassName('categories-list')[0]
    
    categories.forEach(category => {
        categoriesList.innerHTML += `
            <li id="${category}" class="filter-item">${category}</li>
        `
    })

    categories.forEach(category => {
        const categoryElement = document.getElementById(category);
        categoryElement.addEventListener('click', () => {
            const productsFiltered = products.filter(p => p.category === category)
            setProducts(productsFiltered)
        })
    })

}
