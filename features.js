
function buttonClick(){

//OBJECTS from HTML

  let firstName = document.getElementById("Fname").value;
  let firstNameLabel = document.getElementById("FnameLabel");

  let midName = document.getElementById("Mname").value;
  let midNameLabel = document.getElementById("MnameLabel");

  let lastName = document.getElementById("Lname").value;
  let lastNameLabel = document.getElementById("LnameLabel");

  let orgName = document.getElementById("Org").value;
  let orgNameLabel = document.getElementById("orgLabel");

  let add1Name = document.getElementById("Add1").value;
  let add1NameLabel = document.getElementById("add1Label");

  let add2Name = document.getElementById("Add2").value;
  let add2NameLabel = document.getElementById("add2Label");

  let cityName = document.getElementById("city").value;
  let cityNameLabel = document.getElementById("cityLabel");

  let countryName = document.getElementById("country").value;
  let countryNameLabel = document.getElementById("countryLabel");
  
  let stateName = document.getElementById("postcode").value;
  let stateNameLabel = document.getElementById("postLabel");

  let postName = document.getElementById("StPv").value;
  let postNameLabel = document.getElementById("StPvLabel");
  
  let mobileName = document.getElementById("num").value;
  let mobileNameLabel = document.getElementById("numLabel");

  let hphoneName = document.getElementById("hnum").value;
  let hphoneNameLabel = document.getElementById("hnumLabel");

  let emailName = document.getElementById("email").value;
  let emailNameLabel = document.getElementById("emailLabel");


  
 
    let checker = 0;

    //checker for FName
    if(isEmpty(firstName)){
        firstNameLabel.style.color = "red";
    }else{
        firstNameLabel.style.color = "white";
        checker+=1;
    }

    //checker for MName
    if(isEmpty(midName)){
        midNameLabel.style.color = "red";
    }else{
        midNameLabel.style.color = "white";
        checker+=1;
    }

    //checker for LName
    if(isEmpty(lastName)){
        lastNameLabel.style.color = "red";
    }else{
        lastNameLabel.style.color = "white";
        checker+=1;
    }


    //checker for Organization
    if(isEmpty(orgName)){
        orgNameLabel.style.color = "red";
    }else{
        orgNameLabel.style.color = "white";
        checker+=1;
    }

    //checker for Address line 1
    if(isEmpty(add1Name)){
        add1NameLabel.style.color = "red";
    }else{
        add1NameLabel.style.color = "white";
        checker+=1;
    }

     //checker for Address line 2
     if(isEmpty(add2Name)){
        add2NameLabel.style.color = "red";
    }else{
        add2NameLabel.style.color = "white";
        checker+=1;
    }

     //checker for City
     if(isEmpty(cityName)){
        cityNameLabel.style.color = "red";
    }else{
        cityNameLabel.style.color = "white";
        checker+=1;
    }

     //checker for State or Prov
     if(isEmpty(stateName)){
        stateNameLabel.style.color = "red";
    }else{
        stateNameLabel.style.color = "white";
        checker+=1;
    }



     //checker for Country
     if(isEmpty(countryName)){
        countryNameLabel.style.color = "red";
    }else{
        countryNameLabel.style.color = "white";
        checker+=1;
    }

    
     //checker for Postcode
     if(isEmpty(postName)){
       postNameLabel.style.color = "red";
    }else{
        postNameLabel.style.color = "white";
        checker+=1;
    }

    //checker for MobilePhone num
    if(isEmpty(mobileName)){
        mobileNameLabel.style.color = "red";
     }else{
         mobileNameLabel.style.color = "white";
         checker+=1;
     }
     
      //checker for MobilePhone num
      if(isEmpty(hphoneName)){
        hphoneNameLabel.style.color = "red";
     }else{
         hphoneNameLabel.style.color = "white";
         checker+=1;
     }


  //checker for email
  if(isEmpty(emailName)){
    emailNameLabel.style.color = "red";
 }else{
    emailNameLabel.style.color = "white";
     checker+=1;
 }    
 
 //checker if all blanks are filled up
 if(checker<13){
     
    alert("Please fill up the form completely.");

 }else{

    
    alert("Hello, " +firstName+". Welcome to the club!"); /* lagay mowww dito marcelus ung js */
    
    document.getElementById("header").innerHTML= "Thank you for signing up!"
 }
}


function isEmpty(check){

    if(check ==""){
        return true;
    }
    else{
        return false;
    }
}