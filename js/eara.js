
let respons=[];
async function apiAaera() {
    try {
        var apiArea = await fetch(`Https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
        var dataArea = await apiArea.json();
        respons=dataArea.meals
        console.log(respons)
        displayData()
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

apiAaera() 

function displayData() {
    var cartona = ``;
    if (respons && respons.length > 0) {
        for (let i = 0; i < respons.length; i++) {
            cartona += `
              <div class="col-md-3">
                <i class="fa-solid fa-house-laptop fa-4x text-white"></i>
                <h3 class="text-white">${respons[i].strArea}</h3>
               </div>
            `;
        }
    }

    document.getElementById("rowData").innerHTML = cartona;
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