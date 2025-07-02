window.onload = function(){
    const screenType = 'create';
    let mainTitle = document.querySelector('#main-title');

    if(screenType == 'create')
    {
        mainTitle.innerText = "Create your new project!";
        document.querySelector('#action-button').innerText = "Create";
    }



    // if(screenType == 'edit')
    // {
    //     mainTitle.innerText = "Edit project!";
    //     document.querySelector('#action-button').innerText = "Save";
    // }
}


function Create(){


    let payload = {
        title: document.querySelector("#title").value,
        description: document.querySelector("#description").value,
        totalCost: document.querySelector("#totalPrice").value,
        idClient: "1"
    }

    fetch("https://6864b9585b5d8d03397e05dc.mockapi.io/api/projects", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })

}