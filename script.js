





let arr = [];

function toDo() {

    let inp = document.getElementById('inp');
    let list = document.getElementById('list');

    arr.push(inp.value);


   
    let data = "";
    if (inp.value != "") {

       
        for (var item in arr) {
            data += `<li class="list-group-item d-flex justify-content-between">${(+item+1)+ ') '} ${arr[item]} <button onclick="Delete()" class="btn btn-danger">X</button></li>`
            inp.value="";
        }

        list.innerHTML = data;

    }
    else {
        alert('ora nese yazdana');
    }

}

function Delete() {
    arr.splice(+item , 1)


}