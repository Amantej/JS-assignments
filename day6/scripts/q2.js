function myFunction()
{

var Number = document.getElementById("TN").value;
var T;
var I = document.getElementById("IN").value;
var E = document.getElementById("EN").value;
var temp="";
for (T = I; T <= E; T++) {
temp+="<tr><td>"+Number+"</td><td>*</td><td>" + T + "</td><td>=</td><td>" + Number*T +"</td></tr>"; 
}

$("#displayTables").append(temp);

}