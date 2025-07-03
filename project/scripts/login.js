
function CheckForAnyRole(){
    let radioButtonList = document.getElementsByName("role");
    let counter = 0;

    for(let radioButton of radioButtonList){
        if(radioButton.checked === false){
            counter++;
        }
    }

    return counter !== radioButtonList.length;
}

function Create(){


    if(CheckForAnyRole() === false){
        Swal.fire('Choose a role!','error');
        return;
    }

    let payload = {
        role: document.getElementsByName("role")[0].checked == true ? 'dev' : 'client',
        fullName: document.querySelector("#fullName").value,
        birthdate: document.querySelector("#birthdate").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    }

    fetch("https://6864b9585b5d8d03397e05dc.mockapi.io/api/users", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {

        Swal.fire({
            title: "Good Job!",
            text: "User created!",
            icon: "success",
            confirmButtonText: "Ok!"
            }).then((result) => {
            if (result.isConfirmed) {
                    localStorage.setItem("user.name", response.fullName);
                    localStorage.setItem("user.role", response.role === "dev" ? "Developer" : "Client");
                    localStorage.setItem("user.id", response.id);
            
                    window.location.href = "list.html";
                }
            });

    })
    .catch(error => {
        console.log(error)
    })

}