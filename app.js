function sendotp()
{
var x=Math.random()*(9999-1000)+1000
var otp=Math.floor(x)
console.log(otp)
document.getElementById("output").innerHTML="dear customer your otp is"+otp
}