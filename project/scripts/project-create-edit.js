const urlSearchParams =  new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const screenType = params.id ? 'edit' : 'create';

window.onload = function(){
    SetScreenType();
    FillInputs();
}

function FillInputs(){
    if(screenType === 'edit'){
        fetch(`https://6864b9585b5d8d03397e05dc.mockapi.io/api/projects/${params.id}`)
        .then(response => response.json())
        .then(project => {
            document.querySelector("#title").value = project.title;
            document.querySelector("#totalPrice").value = project.totalCost;
            document.querySelector("#description").value = project.description;
        })
    }
}

function SetScreenType(){
    let mainTitle = document.querySelector('#main-title');

    if(screenType == 'create')
    {
        mainTitle.innerText = "Create your new project!";
        document.querySelector('#action-button').innerText = "Create";
    }

    if(screenType == 'edit')
    {
        mainTitle.innerText = "Edit project!";
        document.querySelector('#action-button').innerText = "Save";
    }
}

function CreateOrEdit(){


    let payload = {
        title: document.querySelector("#title").value,
        description: document.querySelector("#description").value,
        totalCost: document.querySelector("#totalPrice").value,
        idClient: "1"
    }

    fetch(`https://6864b9585b5d8d03397e05dc.mockapi.io/api/projects${screenType === 'edit' ? ('/'+params.id) : ''}`, {
        method: screenType === 'edit' ? "PUT" : "POST",
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {

        window.location.href = "list.html"
    })
    .catch(error => {
        console.log(error)
    })

}
