var catagory = [];

async function category() {
    try {
        var response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        var data = await response.json();
        catagory = data.categories;
        displaycata();
        console.log(catagory);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


function displaycata() {
    var cartona = ``;
    if (catagory && catagory.length > 0) {
        for (let i = 0; i < catagory.length; i++) {
            cartona += `
                <div class="col-md-3">
                    <div class="image-container">
                        <img src="${catagory[i].strCategoryThumb}" width="100%" alt="">
                        <div class="hover-p1 text-dark text-center">
                            <h2 class="fw-bold h4">${catagory[i].strCategory}</h2>
                            <p >${catagory[i].strCategoryDescription}</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    document.getElementById("rowData").innerHTML = cartona;
}


category();


document.addEventListener("click",function(e){
    console.log(e.target)
   
})


$(function(){
     $(".loader").fadeOut(1000 , function(){
         $(".loading").fadeOut(1000 , function(){
            $("body").css("overflow","auto")
            $(".loading").remove()
         })
    })
})



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