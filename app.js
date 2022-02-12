
function totalAmound() {
    const caseTotalAmount = document.getElementById("case-total")
    const phoneTotalAmount = document.getElementById("phone-total")
    const subTotal = document.getElementById("sub-total")
    const taxAmount = document.getElementById("tax-amount")
    const mainTotal = document.getElementById("total-price")

    const subTotalPrice = parseFloat(caseTotalAmount.innerText) + parseFloat(phoneTotalAmount.innerText)
    const taxPrice = subTotalPrice * 15 / 100
    const finalPrice = subTotalPrice - taxPrice
    subTotal.innerText = subTotalPrice
    taxAmount.innerText = taxPrice
    mainTotal.innerText = finalPrice


}
totalAmound()






function priceQuantity(pricePerPice,quantity, price, calc) {
    const caseNumber = document.getElementById(quantity)
    const caseTotal = document.getElementById(price)

    if (calc == true) {
        caseNumber.value = parseInt(caseNumber.value) + 1
        caseTotal.innerText = parseInt(caseNumber.value) * pricePerPice;
    } else if (caseNumber.value <= 0) {
        return false
    }
    else {
        caseNumber.value = parseInt(caseNumber.value) - 1
        caseTotal.innerText = parseInt(caseNumber.value) * pricePerPice;
    }
    totalAmound()



}





document.getElementById("case-plus").addEventListener("click", function () {
    priceQuantity(59,"case-number", "case-total", true)

})
document.getElementById("case-minus").addEventListener("click", function () {
    priceQuantity(59,"case-number", "case-total", false)

})

document.getElementById("phone-plus").addEventListener("click", function () {
    priceQuantity(1219,"phone-number", "phone-total", true)
})
document.getElementById("phone-minus").addEventListener("click", function () {
    priceQuantity(1219,"phone-number", "phone-total", false)
})