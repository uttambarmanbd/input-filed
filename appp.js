sum = 0;
function btn(){
    const input = document.getElementById('input');
    const inputvalue = input.value;

    const numbar = document.getElementById('number')
    const numbarvalue = numbar.value;

    if(!inputvalue){
        return sweetAlert("Oops...", "Something went wrong!", "error");

    }
    if(!numbarvalue){
        return sweetAlert("Oops...", "Something went wrong!", "error");

    }

    const list = document.getElementById('list');
    const li = document.createElement('li');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    li.innerText = sum +1;
    li1.innerText = inputvalue;
    li2.innerText = numbarvalue;

    list.appendChild(li);
    list.appendChild(li1);
    list.appendChild(li2);


    input.value =''
    numbar.value =''

    swal("Good job!", "You clicked the button!", "success")
    sum++;

}