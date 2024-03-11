
function validerForum() {
    var NameEl = document.getElementById("Uname").value;
    var ageEL = document.getElementById("age").value;
    var addressEl = document.getElementById("address").value;
    var emailEl = document.getElementById("email").value;
    var passwordEl = document.getElementById("password").value;
    var roleEl = document.getElementById("role").value;

    var errorUname = document.getElementById("error1");
    var errorAge = document.getElementById("error2");
    var errorAddress = document.getElementById("error3");
    var errorEmail = document.getElementById("error4");
    var errorPassword = document.getElementById("error5");
    var errorRole = document.getElementById("error6");
    var errorSuccess = document.getElementById("error-success");

    errorUname.innerText = "";
    errorAge.innerText = "";
    errorAddress.innerText = "";
    errorEmail.innerText = "";
    errorPassword.innerText = "";
    errorRole.innerText = "";
    errorSuccess.innerText = "";

    let valid = true;

    if (NameEl === "") {
        errorUname.innerText = "Enter Your Name";
        valid = false;
    }

    if (ageEL === "") {
        errorAge.innerText = "Enter Your age";
        valid = false;
    }

    if (addressEl === "") {
        errorAddress.innerText = "Enter Your address";
        valid = false;
    }

    if (emailEl === "") {
        errorEmail.innerText = "Enter Your email";
        valid = false;
    } else if (!emailEl.includes("@") || !emailEl.includes(".")) {
        errorEmail.innerText = "Invalid Email";
        valid = false;
    }

    if (passwordEl.length < 5) {
        errorPassword.innerText = "Minimum Password Length should be 5";
        valid = false;
    }

    if (roleEl === "select") {
        errorRole.innerText = "Please select a role";
        valid = false;
    }

    return valid;
}
window.onload= ()=>DisplayData()
document.getElementById("submit").addEventListener("click", AddData)
function AddData(e) {
    
    e.preventDefault();
    if (validerForum()) {
        var NameEl = document.getElementById("Uname").value;
        var ageEL = document.getElementById("age").value;
        var addressEl = document.getElementById("address").value;
        var emailEl = document.getElementById("email").value;
        var passwordEl = document.getElementById("password").value;
        var roleEl = document.getElementById("role").value;

        var peopleList = JSON.parse(localStorage.getItem("peopleList")) || [];

        peopleList.push({
            Name: NameEl,
            Age: ageEL,
            address: addressEl,
            Email: emailEl,
            password: passwordEl,
            role: roleEl
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));

        DisplayData();

        document.getElementById("Uname").value = "";
        document.getElementById("age").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("role").value = "select";

        var errorSuccess = document.getElementById("error-success");
        setTimeout(()=>{
            errorSuccess.innerText = "Successfully added";
        },4000)
    }
}

function DisplayData() {
    var peopleList = JSON.parse(localStorage.getItem("peopleList")) || [];
    var html = "";
    peopleList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.Name + "</td>";
        html += "<td>" + element.Age + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.Email + "</td>";
        // html += "<td>" + element.password + "</td>";
        html += "<td>" + element.role + "</td>";
        html += "<td><button onclick='DeleteData(" + index + ")' class='btn-danger' id='Delete'>Delete</button><button onclick='EditData(" + index + ")' class='btn-Edit' id='Edit'>Edit</button></td>";
        html += "</tr>";
        
    });
    document.querySelector("#crudTable tbody").innerHTML = html;
    document.getElementById("usersLength").innerHTML=peopleList.length
    console.log("How  many",peopleList.length)

    const formData = JSON.parse(localStorage.getItem("Form Data")) || [];
    const formDataLength = formData.length;
    document.getElementById("BlogData").innerHTML = formDataLength;


   
}




function DeleteData(index) {
    var peopleList = JSON.parse(localStorage.getItem("peopleList")) || [];
    peopleList.splice(index, 1);
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    DisplayData();
}

function EditData(index) {
    var peopleList = JSON.parse(localStorage.getItem("peopleList")) || [];
    document.getElementById("Uname").value = peopleList[index].Name;
    document.getElementById("age").value = peopleList[index].Age;
    document.getElementById("address").value = peopleList[index].address;
    document.getElementById("email").value = peopleList[index].Email;
    document.getElementById("password").value = peopleList[index].password;
    document.getElementById("role").value = peopleList[index].role;

    document.getElementById("submit").style.display = "none";
    var updateBtn = document.getElementById("Update");
    updateBtn.style.display = "block";

    updateBtn.onclick = function() {
        if (validerForum()) {
            peopleList[index].Name = document.getElementById("Uname").value;
            peopleList[index].Age = document.getElementById("age").value;
            peopleList[index].address = document.getElementById("address").value;
            peopleList[index].Email = document.getElementById("email").value;
            peopleList[index].password = document.getElementById("password").value;
            peopleList[index].role = document.getElementById("role").value;

            localStorage.setItem("peopleList", JSON.stringify(peopleList));
            DisplayData();

            document.getElementById("Uname").value = "";
            document.getElementById("age").value = "";
            document.getElementById("address").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("role").value = "select";

            updateBtn.style.display = "none";
            document.getElementById("submit").style.display = "block";

            var errorSuccess = document.getElementById("error-success");
            errorSuccess.innerText = "Successfully updated";
        }
    }
}