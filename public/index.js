



const transportOptions = {
    "Walking": 3.1,
    "Boosted Mini S Board":18,
    "Evolve Bamboo GTR 2in1": 24,
    "OneWheel XR": 19,
    "MotoTec Skateboard": 22,
    "Segway Ninebot S": 10,
    "Segway Ninebot S-PLUS ": 12,
    "Razor Scooter ": 18,
    "GeoBlade": 15,
    "Hovertrax Hoverboard": 9

};



const transportRange = {
    "Walking": 30,
    "Boosted Mini S Board" :7,
    "Evolve Bamboo GTR 2in1": 31,
    "OneWheel XR": 18,
    "MotoTec Skateboard": 10,
    "Segway Ninebot S": 13,
    "Segway Ninebot S-PLUS ": 22,
    "Razor Scooter ": 15,
    "GeoBlade": 8,
    "Hovertrax Hoverboard": 6

};

function calculate(transportType, distance){
    let speed = transportOptions[transportType];
    let travelTime = (distance / speed) * 60;
    
   return Math.round(travelTime) ;
}

function generateText(oldtrans, t, transportType,  distance){
    let speed = transportOptions[transportType];
    let travelTime = (distance / speed) * 60;
    let time = Math.round(travelTime) ;
    const s = distance +" miles on a "+oldtrans+" will take "+t +" minutes, which converts to roughly "+
    time+" minutes on a "+transportType+" ( which travels at "+speed+" mph).";
    return s;
}






function submitData(){
    
    document.getElementById("title1").innerHTML = "";
    document.getElementById("title2").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("result1").innerHTML = "";
    const form = document.getElementById("myForm");
    const textField = document.getElementById("distance");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // prevent the form from submitting
      const textFieldValue = textField.value; // get the value of the text field
      const distance = textFieldValue;
      const selectedRadioButton = document.querySelector('input[name="transport"]:checked');
      let transportType = "";
      if (selectedRadioButton) {
        const radioButtonValue = selectedRadioButton.value;
        transportType =  radioButtonValue;
      }
      if(transportRange[transportType]<distance){
        document.getElementById("error").innerHTML= " Distance out of range. Enter distance less than "+
        transportRange[transportType]+" for "+ transportType;
      }
      else{
        var error = document.getElementById("error");
        if(error.innerHTML !==""){
            error.innerHTML = "";
      let time = calculate(transportType, distance) ;
       
      const st ="It will take you " +time + " minutes to travel " + distance + " miles using a " + transportType + ".";
      document.getElementById("title1").innerHTML =  "Distance to Time Conversion ";
      document.getElementById("result").innerHTML= st;

      

     
 document.getElementById("title2").innerHTML =  "COMPARISON TO ALL OPTIONS";
var container = document.getElementById("result1");

if(container.innerHTML === ""){
    for (var key in transportOptions) {

        if(key !==transportType){
            var item = document.createElement("div");
            item.innerHTML = generateText(transportType, time, key,  distance); ;
            container.appendChild(item);
        }
      
     
    }
}
else{
  container.innerHTML = "";
  for (var key in transportOptions) {

    if(key !==transportType){
        var item = document.createElement("div");
        item.innerHTML = generateText(transportType, time, key,  distance); ;
        container.appendChild(item);
    }
  
 
}
}

    }
    else{


        let time = calculate(transportType, distance) ;
       
      const st ="It will take you " +time + " minutes to travel " + distance + " miles using a " + transportType + ".";
      document.getElementById("title1").innerHTML =  "Distance to Time Conversion ";
      document.getElementById("result").innerHTML= st;

      

     
 document.getElementById("title2").innerHTML =  "COMPARISON TO ALL OPTIONS";
var container = document.getElementById("result1");

if(container.innerHTML === ""){
    for (var key in transportOptions) {

        if(key !==transportType){
            var item = document.createElement("div");
            item.innerHTML = generateText(transportType, time, key,  distance); ;
            container.appendChild(item);
        }
      
     
    }
}
else{
  container.innerHTML = "";
  for (var key in transportOptions) {

    if(key !==transportType){
        var item = document.createElement("div");
        item.innerHTML = generateText(transportType, time, key,  distance); ;
        container.appendChild(item);
    }
  
 
}
}

    }



}


    });
}

function generateDistance(time, speed){

distance = speed * (time / 60)

return distance.toFixed(2);
}

function submitTime()
{
    const form = document.getElementById("myForm");
    const textField = document.getElementById("distance");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // prevent the form from submitting
        const time = textField.value; // get the value of the text field

        

var container = document.getElementById("result");

if(container.innerHTML === ""){
    for (var key in transportOptions) {
        var item = document.createElement("div");
        item.innerHTML = generateDistance(time, transportOptions[key]) + " miles on "+ key;
        container.appendChild(item);      
     
    }
}
else{
    container.innerHTML = "";
  for (var key in transportOptions) {

    var item = document.createElement("div");
    item.innerHTML = generateDistance(time, transportOptions[key]) + " miles on "+ key;
     container.appendChild(item);      
  
 
}
}
     

    });
}


