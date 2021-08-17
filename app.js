function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-quantity');
    let productQuantity = productInput.value;
    if (isIncreasing) {
        productQuantity = parseInt(productQuantity) + 1;
    } else {
        if (productQuantity > 1) {
            productQuantity = parseInt(productQuantity) - 1;
        }
    }
    productInput.value = productQuantity;

    //update total
    const caseTotal = document.getElementById(product + '-price');
    caseTotal.innerText = price * productQuantity;
    calculateTotal();
}

//calculate total

function getInputValue(product) {
    const productInput = document.getElementById(product + '-quantity');
    const productQuantity = parseInt(productInput.value);
    return productQuantity;
}

function calculateTotal() {
    const phoneTotalPrice = getInputValue('phone') * 1219;
    const caseTotalPrice = getInputValue('case') * 59;
    const subTotalPrice = phoneTotalPrice + caseTotalPrice;
    const textAmount = subTotalPrice / 10;
    const totalPrice = subTotalPrice + textAmount;
    // update on the html element
    document.getElementById('sub-total').innerText = subTotalPrice;
    document.getElementById('total-tax').innerText = textAmount;
    document.getElementById('total').innerText = totalPrice;
}

calculateTotal();

//handle phone increase decrease event

document.getElementById('phone-minus').addEventListener('click', function(e) {
    updateProductNumber('phone', 1219, false);
});

document.getElementById('phone-plus').addEventListener('click', function(e) {
    updateProductNumber('phone', 1219, true);
});


//handle case increase decrease event

document.getElementById('case-plus').addEventListener('click', function(e) {

    updateProductNumber('case', 59, true);
    // const caseInput = document.getElementById('case-number');
    // let caseNumber = caseInput.value;
    // caseNumber = parseInt(caseNumber) + 1;
    // caseInput.value = caseNumber;
});

document.getElementById('case-minus').addEventListener('click', function(e) {

    updateProductNumber('case', 59, false);
    // const caseInput = document.getElementById('case-number');
    // let caseNumber = caseInput.value;
    // caseNumber = parseInt(caseNumber) - 1;
    // caseInput.value = caseNumber;
});