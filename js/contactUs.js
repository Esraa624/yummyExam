
var button=document.getElementById("button");
var inputName=document.getElementById("inputName");
var inputEmail=document.getElementById("inputEmail");
var inputPhone=document.getElementById("inputPhone");
var inputAge=document.getElementById("inputAga");
var inputPass=document.getElementById("inputPass");
var inputRePass=document.getElementById("inputRePass");
var mesSucess=document.getElementById("mesSuccess");
var mesName=document.getElementById("mesName");
var mesEmail=document.getElementById("mesEmail");
var mesPass=document.getElementById("mesPass");
var mesFalid=document.getElementById("mesFalid");
var home=document.getElementById("home")
var mesEmailexest=document.getElementById("mesEmailexest");
// console.log(inputName)

// var allUser=[];
// if(localStorage.getItem("user")!=null)
// {
//  allUser=JSON.parse(localStorage.getItem("user"));
// }
// function singup()
// {
//     submit();

//     if(submit()==true)
//     {
//         addUser()
//     }
// }


$(function(){
     $(".loader").fadeOut(1000 , function(){
         $(".loading").fadeOut(1000 , function(){
            $("body").css("overflow","auto")
            $(".loading").remove()
         })
    })
})

function addUser()
{
  var newUser={
    name:inputName.value,
    email:inputEmail.value,
    pass:inputPass.value,
    Repass:inputRePass
  }
  if(aready(newUser)==true)
  {
    console.log("user is exiest")
  }else{
      allUser.push(newUser);
    localStorage.setItem("user",JSON.stringify(allUser))
  }
  
}

function aready(newUser)
{
  for(let i=0;i<allUser.length;i++)
  {
    if(allUser[i].email.toLowerCase()==newUser.email.toLowerCase())
    {
     mesEmailexest.classList.replace("d-none","d-block");
     mesSucess.classList.replace("d-block","d-none");
     return true;
    } 
    else{
           mesEmailexest.classList.replace("d-block","d-none");
           mesSucess.classList.replace("d-none","d-block");
          setTimeout(function(){
         window.location.href="../singup.html";
        },3000)
        return false
    }
  }
}




button.addEventListener("click",function(){
    submit()
    // console.log()
    clearInput()

})



function submit()
{
      if(validationName()==true&&
    validationEmail()==true&&
    validationPass()==true&&
    validationRPass()==true
)
    {
        mesSucess.classList.replace("d-none","d-block");
        mesFalid.classList.replace("d-block","d-none");
        return true;
    }else{
        mesFalid.classList.replace("d-none","d-block");
        mesSucess.classList.replace("d-block","d-none");
        return false;
    }

}

function validationName()
{
    var regex=/^[A-Za-z]{3,}$/
    var term=inputName.value;
    if(regex.test(term)==true)
    {
       inputName.classList.add("is-valid")
       inputName.classList.remove("is-invalid")
       mesName.classList.replace("d-block","d-none")
       return true;
    }
    else{
        mesName.classList.replace("d-none","d-block")
          inputName.classList.add("is-invalid")
          inputName.classList.remove("is-valid")
          return false;
    }
}



function validationEmail()
{
    var regex=/^[A-Za-z]{3,}[0-9]{0,}@gmail.com$/
    var term=inputEmail.value;
    if(regex.test(term)==true)
    {
       inputEmail.classList.add("is-valid")
       inputEmail.classList.remove("is-invalid")
       mesEmail.classList.replace("d-block","d-none")
       return true;
    }
    else{
        mesEmail.classList.replace("d-none","d-block")
          inputEmail.classList.add("is-invalid")
          inputEmail.classList.remove("is-valid")
          return false;
    }
}


function validationPass()
{
    var regex=/^[0-9]{3,}[A-Za-z]{2,}$/
    var term=inputPass.value;
    if(regex.test(term)==true)
    {
       inputPass.classList.add("is-valid")
       inputPass.classList.remove("is-invalid")
    
       return true;
    }
    else{
          inputPass.classList.add("is-invalid")
          inputPass.classList.remove("is-valid")
          return false;
    }
}
function validationRPass()
{
    var regex=/^[0-9]{3,}[A-Za-z]{2,}$/
    var term=inputRePass.value;
    if(regex.test(term)==true)
    {
       inputRePass.classList.add("is-valid")
       inputRePass.classList.remove("is-invalid")
    //    mesPass.classList.replace("d-block","d-none")
       return true;
    }
    else{
        mesPass.classList.replace("d-none","d-block")
          inputRePass.classList.add("is-invalid")
          inputRePass.classList.remove("is-valid")
          return false;
    }
}




function clearInput()
{
    inputName.value=null;
    inputPhone.value=null;
    inputEmail.value=null;
    inputAge.value=null;
    inputPass.value=null;
    inputRePass.value=null;
}




$("#closeTab").on("click", function() {
    $(".lear").animate({width: "toggle" , paddingInline:"toggle"}, 1000);
    $(".menu").animate({width: "5%", }, 1000);
    $(".lear").addClass("d-none")
    $("#openTab").removeClass("d-none")
    $("#closeTab").addClass("d-none")
    $$(".img").removeClass("d-none")

});

$("#openTab").on("click", function() {
    // $(".lear").animate({width: "toggle" , paddingInline:"toggle"}, 1000);
    $(".lear").removeClass("d-none");
    $(".menu").animate({width: "30%", },3000);
    $("#openTab").addClass("d-none")
    $("#closeTab").removeClass("d-none")
    $(".lead-end p").css("font-size","10px")
    $(".img").addClass("d-none")
});