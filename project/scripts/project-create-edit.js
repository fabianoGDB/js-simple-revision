window.onload = function(){
    const screenType = 'edit';
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