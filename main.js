function myFunction() {
  let lexOrigin;  
//let lexOrigin = "https://scacorp--scadev3.sandbox.lightning.force.com/lightning/action/quick/Lead.POC_Tarificar?objectApiName&context=RECORD_DETAIL&recordId=00Q1x000006zvGhEAI&backgroundContext=%2Flightning%2Fr%2FLead%2F00Q1x000006zvGhEAI%2Fview";
            window.addEventListener("message", function(event) {
            console.log('Origin '+ event.origin);
            console.log('data '+ event.data);
            lexOrigin =  event.data;

        });
    
    let nameVal = document.getElementById("fname").value;
    let lastNameVal = document.getElementById("lname").value;
    let message = "Este es el nombre " +nameVal + " " +  lastNameVal;        
    alert("The form was submitted " + nameVal + " " + lastNameVal);
            window.parent.postMessage(message, lexOrigin);
  }

  /*if (window.addEventListener) {
    // For standards-compliant web browsers
    window.addEventListener("message", handleMessage, false);
  } else {
    window.attachEvent("onmessage", handleMessage);
  }*/

  function handleMessage(evt){

  }
