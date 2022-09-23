function Calculate (){
    var amount = document.getElementById('amount').value;
    var months = document.getElementById('months').value;
    var percent = document.getElementById('percent').value;
    var totalAmount = (parseFloat(amount * percent / 100) + parseFloat(amount)) / months;
    document.getElementById('total').innerHTML=`Your monthly payment: <span>${totalAmount}</span>`;
}