// www.themealdb.com/api/json/v1/1/list.php?i=list




var respons = [];

async function Integrata() {
    try {
        var api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
        var data = await api.json();
        respons = data.meals;
        console.log(respons);
        displayData();
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

Integrata();

function shortenDescription(description, wordLimit) {
    if (!description) return 'No description available';
    const words = description.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
}

function displayData() {
    var cartona = ``;
    if (respons && respons.length > 0) {
        for (let i = 0; i < 20; i++) {
            cartona += `
                <div class="col-md-3 text-white text-center ">
                    <i class="fa-solid fa-drumstick-bite fa-3x  "></i>
                    <h3 class="h6">${respons[i].strIngredient}</h3>   
                    <p class=" ">${shortenDescription(respons[i].strDescription, 20)}</p>
                </div>
            `;
        }
    }

    document.getElementById("rowDta").innerHTML = cartona;
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