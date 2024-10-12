const cardDetails = document.getElementById("card_details");
cardDetails.addEventListener("submit", (e)=> {
    e.preventDefault();

    let cardHolder = document.getElementById("card_name").value;
    let cardNumber = document.getElementById("card_number").value;
    let cardMonth = document.getElementById("card_month").value;
    let cardYear = document.getElementById("card_year").value;
    let cardCvc = document.getElementById("card_cvc").value;

    console.log(cardMonth)
    if(cardNumber<=12 && cardMonth.length === 2 && cardYear.length === 2 && cardCvc.length === 3) {

        const thank = document.querySelector(".thank")
        cardDetails.style.display = "none";
        thank.style.display = "flex";
    }else {
        alert("details are not valid")
    }
    console.log(cardHolder,cardNumber,cardMonth,cardYear,cardCvc);
})


