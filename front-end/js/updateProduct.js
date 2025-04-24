function updateProduct() {
    const callback = (responseStatus, responseData) => {
        console.log("responseStatus:", responseStatus);
        console.log("responseData:", responseData);
    }

    const product_id = document.getElementById('update-product-id').value;
    const product_name = document.getElementById('update-product-name').value;
    const brand = document.getElementById('update-brand').value;
    const image_url = document.getElementById('update-image-url').value;

    data = {
        product_name: product_name,
        brand: brand,
        image_url: image_url
    }
    jqueryMethod(`${currentUrl}/api/products/${product_id}`, callback, 'PUT', data);
}
