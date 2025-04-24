function createProduct() {
    const callback = (responseStatus, responseData) => {
        console.log("responseStatus:", responseStatus);
        console.log("responseData:", responseData);
    }
    const product_name = document.getElementById('create-product-name').value;
    const brand = document.getElementById('create-brand').value;
    const product_category = document.getElementById('create-category').value;
    const image_url = document.getElementById('create-image-url').value;

    data = {
        product_name: product_name,
        brand: brand,
        category_id: product_category,
        image_url: image_url
    }

    jqueryMethod(`${currentUrl}/api/products`, callback, 'POST', data);
}
