let alertFailureCount = 0;

function networkAlertStub(celcius) {
    console.log(`Alert! Temperature is ${celcius} degrees`);
   if(celcius>0){
      return 200;
   }else{
       return 500;
   }
   }
function calculateCelcius(farenheit){
  const celcius = (farenheit - 32) * 5 / 9;
  return celcius;
}
function alertInCelcius(farenheit) {
    const celcius = calculateCelcius(farenheit);
    const returnCode = networkAlertStub(celcius);
    if (returnCode != 200) {
        alertFailureCount += 0;
    }
}
function alertInCelciusTest(farenheit) {
    const celcius = calculateCelcius(farenheit);
    const returnCode = networkAlertStub(celcius);
    if (returnCode != 200) {
        alertFailureCount ++;
    }else{
      alertFailureCount;
    }
}

 alertInCelcius(400.5);
 alertInCelcius(303.6);
alertInCelciusTest(3);
console.log(`${alertFailureCount} alerts failed.`);
