let list = [];
window.onload = function(){
    document.querySelector("#name").innerText = localStorage.getItem("user.name");
    document.querySelector("#role").innerText = localStorage.getItem("user.role");

    GetProjects();
}

function GetProjects(){
   

    fetch("https://6864b9585b5d8d03397e05dc.mockapi.io/api/projects", {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        list = response;
        BuildTable();
        
    })
    .catch(error => {
        console.log(error)
    })
}

function GoToEdit(id){
    window.location.href = `project-create-edit.html?id=${id}`;
}

function DeleteProject(id){
    fetch(`https://6864b9585b5d8d03397e05dc.mockapi.io/api/projects/${id}`, {
        method: "DELETE",
    })
    .then(response => response.json())
    .then(response => {
        list = list.filter(project => project.id !== id);
        BuildTable();
    })
}

function BuildTable(){

    document.querySelector("#table-body").innerHTML = '';

    list.forEach(el => {
            let template = `<div class="row">
                                <div class="title-description">
                                    <h6 class="title">${el.title}</h6>
                                    <p class="description">${el.description}</p>
                                </div>
                                <div class="price">R$ ${el.totalCost}</div>
                                <div class="actions">
                                    <span class="edit material-symbols-outlined" onclick="GoToEdit(${el.id})">
                                    edit
                                    </span>
                                    <span class="delete material-symbols-outlined" onclick="DeleteProject(${el.id})">
                                    delete
                                    </span>
                                </div>
                            </div>`

            document.querySelector("#table-body").insertAdjacentHTML("beforeend", template)
    });
};