 
var respons = [];
var searchByName = document.getElementById("searchByName");
var searchByletter = document.getElementById("searchBylatter");

async function apisearchName(meal) {
    try {
        var api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
        var data = await api.json();
        respons = data.meals; 
        displayData();
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayData() {
    var cartona = ``;
    if (respons && respons.length > 0) {
        for (let i = 0; i < respons.length; i++) {
            cartona += `
                <div class="col-md-3" id="Corba">
                    <div class="image-container">
                        <img src="${respons[i].strMealThumb}" class="image rounded-3" alt="img">
                        <span class="fw-bold fs-2 text-white d-none" id="C-span">${respons[i].strMeal}</span>
                        <div class="hover-p1">
                            <h2 class="fw-bold">${respons[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    document.getElementById("disdata").innerHTML = cartona;
}




$("#Corba").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#first").removeClass("d-none")
    $("#C-span").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#Sushi").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#two").removeClass("d-none")
    $("#c-Sushi").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#Burek").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#B-3").removeClass("d-none")
    $("#c-Burek").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#Bistek").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#Bi-4").removeClass("d-none")
    $("#c-Bistek").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#Tamiya").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#T-5").removeClass("d-none")
    $("#tamiya").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#Kumpir").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#K-5").removeClass("d-none")
    $("#kumpir").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#Wontons").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#w-5").removeClass("d-none")
    $("#wontons").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#Lasagnes").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#l-5").removeClass("d-none")
    $("#lasagnes").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#Kafteji").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#ka-5").removeClass("d-none")
    $("#kafteji").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#BigMac").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#BM-5").removeClass("d-none")
    $("#Bm").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#Poutine").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#Po").removeClass("d-none")
    $("#po").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#Koshari").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#kosh").removeClass("d-none")
    $("#ko-3").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#Dalfry").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#Dal").removeClass("d-none")
    $("#Da").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#Timbits").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#Ti").removeClass("d-none")
    $("#ti").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#Pancakes").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#Pa").removeClass("d-none")
    $("#pa").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#Kapsalon").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#Kap").removeClass("d-none")
    $("#kap ").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})


$("#Fishpie").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#FP").removeClass("d-none")
    $("#fp ").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#Flamiche").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#FL").removeClass("d-none")
    $("#fl ").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#Shawarma").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#SH").removeClass("d-none")
    $("#sh ").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#Kedgeree").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#KE").removeClass("d-none")
    $("#ke").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#Stamppot").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#ST").removeClass("d-none")
    $("#st").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#Moussaka").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#MO").removeClass("d-none")
    $("#mo").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#Shakshuka").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#SHa").removeClass("d-none")
    $("#sha").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#SugarPie").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#Su").removeClass("d-none")
    $("#su").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})

$("#Ribollita").on("click", function() {
    $(this).siblings().addClass("d-none");
    $("#Ri").removeClass("d-none")
    $("#ri").removeClass("d-none")
    $(".hover-p1").addClass("d-none")
})


/* loading */
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





searchByName.addEventListener("input", function(e) {
    const searchTerm = e.target.value.toLowerCase();
   apisearchName(searchTerm);
});
searchByletter.addEventListener("input", function(e) {
    const searchchar = e.target.value.toLowerCase();
   apisearchName(searchchar);
});




