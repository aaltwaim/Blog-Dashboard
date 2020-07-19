$(document).on("click",".sidebar-toggle",function(){
    $(".wrapper").toggleClass("toggled");
});
// $(".btn.btn-primary.text-white").click(function(){
//     $(".table.table-striped > tbody:last-child").append("<tr><td>7</td><td>7</td><td>7</td><td>7</td></tr>")
// })
var counter = 6
$("#added").click(function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var sel = document.getElementById("category")
    var detail = "<a href='details.html' class='btn btn-secondary'><i class='fa fa-angle-double-right'></i>Details</a>"
    cell0.innerHTML = counter;
    cell1.innerHTML = document.getElementById("title").value;
    cell2.innerHTML = sel.options[sel.selectedIndex].text;
    cell3.innerHTML = today;
    cell4.innerHTML = detail;
    // cell3.innerHTML = document.getElementById("body").value;
    counter++;
    return false;

})