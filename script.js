$(document).ready(function(){
    $("#results").on("click", function(){
        var artist = $("#artist").val();
        var limit = $("#result").val();
        $.ajax({
            url: "https://itunes.apple.com/search?term=" + artist + "&limit=" + limit,
            type: 'GET',
            cressDomain: true,
            dataType: 'jsonp',
            success: function (result){
                DisplayResults(result);
            },
            error: function() {alert('Failed!');}
        });
    });
});


function DisplayResults(json){
    console.log(json);
    var listOutput = "<table id='table'>";
    for(var i=0; i< json.results.length; i++){
        listOutput += "<tr >";
        listOutput += "<td>" + "<img id='image' src='" + json.results[i].artworkUrl100 + "'>" + "</td>";
        listOutput += "<td>" + "<a href ='" + json.results[i].artistViewUrl + "'>" + json.results[i].trackName + "</a>" + "</td>";
        listOutput += "<td>" + "<audio controls> <source src='" + json.results[i].previewUrl + "'> </audio>" + "</td>";
        listOutput += "<td>" + "$" + json.results[i].collectionPrice + "</td>";
        listOutput += "</tr>";
    }
    listOutput += "</table>";
    console.log(listOutput);
    $("#listOutput").html(listOutput);
}


function apple(){

}