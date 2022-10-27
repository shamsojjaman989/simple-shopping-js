function caseShoped(product, amount, isIncrease) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if (isIncrease == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * amount;

    // calculate total call 
    calculateTotal();
}

// total amount added into the function 
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseFloat(productInput.value);
    return productNumber;
}

function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = (subTotal - 10) / 100;
    const finalTotal = subTotal + tax;

    // update html code for subTotal, taxamount , total amount 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('final-total').innerText = finalTotal;

}

const phonePlus = document.getElementById('phone-plus').addEventListener('click', function() {
    caseShoped('phone', 1219, true);

});
const phoneMinus = document.getElementById('phone-minus').addEventListener('click', function() {
    caseShoped('phone', 1219, false)
});
const casePlus = document.getElementById('case-plus').addEventListener('click', function() {
    caseShoped('case', 59, true);
});
const caseMinus = document.getElementById('case-minus').addEventListener('click', function() {
    caseShoped('case', 59, false)
});




/* 
update only uporer part 
function caseShoped(product, amount, isIncrease) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if (isIncrease == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * amount;
}

const phonePlus = document.getElementById('phone-plus').addEventListener('click', function() {
    caseShoped('phone', 1219, true);

});
const phoneMinus = document.getElementById('phone-minus').addEventListener('click', function() {
    caseShoped('phone', 1219, false)
});
const casePlus = document.getElementById('case-plus').addEventListener('click', function() {
    caseShoped('case', 59, true);
});
const caseMinus = document.getElementById('case-minus').addEventListener('click', function() {
    caseShoped('case', 59, false)
}); */