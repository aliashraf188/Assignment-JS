var counter = 0;
var limit = 33;

// var number = document.getElementById('number')
// var number = number.innerText = counter

function increment() {
    if (counter < limit) {
        counter++
        document.getElementById('number').innerText = counter
    }
}


function decrement() {
    if (counter > 0) {
        counter--
        document.getElementById('number').innerText = counter
    }
}


function reset() {
    counter = 0
    document.getElementById('number').innerText = counter
}

if (counter === limit) {
    alert("Tasbih Completed");
}


// end



// password start


function Password() {
    var password = document.getElementById('pass');

    if (password.type === "pass") {
        password.type = "text";
    } else {
        password.type = "pass";
    }

}




// end


// check number


function NumberCheck() {
    var number = document.getElementById('num').value
    var result = document.getElementById('evenOdd')

    if (number === "") {
        result.innerText = "Please enter a number";
        result.className = "red";
        return;
    }

    // number = parseInt(number);

    if (number % 2 === 0) {
        result.innerText = number + " is Even Number";
        result.className = "green";
    } else {
        result.innerText = number + " is Odd Number";
        result.className = "red";
    }
}

