const callback = (responseStatus, responseData) => {
    console.log("responseStatus:", responseStatus);
    console.log("responseData:", responseData);

    const productList = document.getElementById("product-table-body");
    var counter = 0;
    console.log(responseData.data)
    responseData.data.forEach((product) => {
        console.log(counter)
        counter++;
        const displayItem = document.createElement("tr");
        displayItem.id = `${counter}`;
        displayItem.innerHTML = `
                <td>${product.product_id}</td>
                <td>${product.product_name}</td>
                <td>${product.brand}</td>
                <td>${product.category_id}</td>
                <td>${product.image_url}</td>
        `
        productList.appendChild(displayItem)
    });
};

jqueryMethod(`${currentUrl}/api/products`, callback)