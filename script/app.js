$(document).on("click",".sidebar-toggle",function(){
    $(".wrapper").toggleClass("toggled");
});



var counter=1;
var counterCatagory=1;
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

// adding categories and store it in the local storage
$("#addCategory").click(function() {
    var categoryNode = "<tr>"+ '<td>' + ((newKey)? newKey : 1 )+"</td><td class ='tca'>"+ $('#titleCategory').val() + '</td><td>'+ today
    + '</td>'+"</tr>";
    if(localStorage.getItem("c1")){
        var newKey = Number(localStorage.key($("#myCategories")).split('c')[1]) 
    

        if(newKey > 0){
            $("#myCategories").append(categoryNode);
            $("#category").append("<option>"+$('#titleCategory').val()+"</option>")
            console.log(localStorage.key($("#myCategories")).split('c')[1])
            newKey++;
            console.log(newKey)
            localStorage.setItem("c" + newKey , categoryNode);
        
        } 
    }
   
    else {
        $("#myCategories").append(categoryNode);
        $("#category").append("<option>"+$('#titleCategory').val()+"</option>");
        localStorage.setItem("c" + 1, categoryNode);
        console.log(categoryNode)
    }
})

// retrieving categories 
if(localStorage.getItem("p1")){
    var newKey = Number(localStorage.key($("#myCategories")).split('c')[1])

    if(newKey > 0){
    var categoryNode = $("#myCategories")[0];
    // console.log(oldNode)
    console.log(localStorage.key($("#myCategories")))
    // var newKey = Number(localStorage.key($("#myCategories")).split('p')[1])
    console.log(newKey)
    // var newKey = localStorage.key($("#myCategories"))
    for(var i =1;i <= newKey ; i++){
    $("#myCategories").append(localStorage.getItem("c"+i))
    console.log($(".tca")[0])
    $("#category").append("<option>"+ ($(".tca")[i-1].innerText) +"</option>");
    // console.log(localStorage.getItem(i))
    }   
}

}


var table = $("#myTable");

// retrieving posts 
if(localStorage.getItem("p1")){
var keyLength = Number(localStorage.key($("#myTable")).split('p')[1])
console.log(keyLength)
if(keyLength > 0){
    var oldNode = $("#myTable")[0];
    // console.log(oldNode)
    console.log(localStorage.key($("#myTable")))
    // var keyLength = Number(localStorage.key($("#myTable")).split('p')[1])
    console.log(keyLength)
    // var keyLength = localStorage.key($("#myTable"))
    for(var i =1;i<=keyLength+1;i++){
    $("#myTable").append(localStorage.getItem("p"+i))
    // console.log(localStorage.getItem(i))
    }   
}
}

// add posts and store it in the local storage
$("#added").click(function() {
    // var keyLength = Number(localStorage.key($("#myTable")).split('p')[1])
    var sel = document.getElementById("category")
    var childNode = "<tr>"+'<td>' + counter +'</td><td>' + $('#title').val() +
    '</td><td>' + (sel.options[sel.selectedIndex].text) + '</td><td>'+
    today + '</td><td>' + "<a href='details.html' class='btn btn-secondary' id='detailsLink'><i class='fa fa-angle-double-right'></i>Details</a>" + '</td>'+"</tr>";
    $("#myTable").append(childNode);
        if(localStorage.getItem("p1")){
            
            var keyLength = Number(localStorage.key($("#myTable")).split('p')[1])
            console.log(keyLength)
            keyLength++;
            counter++;
            localStorage.setItem("p"+keyLength,childNode);
            console.log(childNode)
            
        }
        else{
            counter++
            localStorage.setItem("p"+1,childNode);

        }

})





