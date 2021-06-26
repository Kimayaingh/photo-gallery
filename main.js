var name_of_the_guests = document.getElementById("name1").value;
name_of_the_guests.push(nameofguestsss);

name_of_the_guests.sort();

function search(){
    var s=document.getElementById("s1").value;
    var found=0;
    var j;
    for (j=0; j<name_of_the_guests.length; j++){
        if (s==name_of_the_guests[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found" + found + "time/s";
}