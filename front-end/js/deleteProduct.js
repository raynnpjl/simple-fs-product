function deleteProduct() {
    const callback = (responseStatus, responseData) => {
        console.log("responseStatus:", responseStatus);
        console.log("responseData:", responseData);
    }

    const product_id = document.getElementById('product-delete').value;

    jqueryMethod(`${currentUrl}/api/products/${product_id}`, callback, 'DELETE');
}
