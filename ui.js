class Ui
{
    constructor()
    {
        this.profile=document.getElementById('output-container');
    }

    showProfile(userData)
    {
       this.profile.innerHTML=`
       <div class="card card-body shadow my-5">
            <div class="row">
                <div class="col-md-4 text-center mb-3">
                <h3 class="text-dark">Logged in as: ${userData.login}</h3>
                    <img src="${userData.avatar_url}" class="rounded-circle w-75">
                    <a href="${userData.html_url}" class="btn btn-primary m-3 d-block" target="_blank">See
                        profile</a>
                </div>
                <div class="col-md-7 float-right card bg-primary ml-3">
                    <h2 class="text-center text-white mt-2">Name: <span>${userData.name}</span></h2>
                    <div class="d-flex justify-content-around">
                        <div class="btn btn-dark mt-2">
                            <span class="text-center text-white">Following: ${userData.following}</span>
                        </div>
                        <div class="btn btn-dark mt-2">
                            <span class="text-center text-white">Followers: ${userData.followers}</span>
                        </div>
                        <div class="btn btn-dark mt-2">
                            <span class="text-center text-white">Public repo: ${userData.public_repos}</span>
                        </div>
                    </div>
                    <div class="row d-block">
                        <div class="container bg-light text-dark p-3 my-3 w-75 font-weight-bold">Email: ${userData.email}
                        </div>
                        <div class="container bg-light text-dark p-3 my-3 w-75 font-weight-bold">Bio: ${userData.bio}</div>
                        <div class="container bg-light text-dark p-3 my-3 w-75 font-weight-bold">Location: ${userData.location}</div>
                    </div>
                </div>
            </div>
        </div>
        <!--Repo heading-->
        <div class="card card-body shadow mt-3">
            <div class="container bg-primary">
                <h2 class="text-center text-white">Users Repositories</h2>
                <div class="container d-block" id="repo-output">
                    
                </div>
            </div>
        </div>
       `;
    }

    showRepo(userRepo)
    {
        userRepo.forEach(data=>{
            document.getElementById('repo-output').innerHTML+=`
            <div class="row my-3">
            <div class="container shadow p-1 bg-light d-flex">
                <a class="text-primary font-weight-bold col-md-6 col-sm-4 p-1" target="_blank" href="${data.html_url}">${data.name}</a>
                <div class="container col-md-6 col-sm-8 d-flex justify-content-end">
                    <div class="btn btn-warning ml-2"><span>${data.language}</span></div>
                    <div class="btn btn-danger ml-2">Forks: <span>${data.forks}</span></div>
                    <div class="btn btn-success ml-2">Watchers: <span>${data.watchers}</span></div>
                </div>
            </div>
        </div>
            `;
        })
    }

    showAlert(message,className)
    {
        this.alertRemove();
        const inputUser=document.getElementById('before-alert');
        let alertData=document.createElement('div');
        alertData.className=className;
        let innerData=document.createTextNode(message);
        alertData.appendChild(innerData);
        inputUser.insertBefore(alertData,inputUser.firstChild);
        setTimeout(this.alertRemove,3000);
    }

    alertRemove()
    {
        const alertBox=document.querySelector('.alert');
        if(alertBox)
        {
            alertBox.remove();
        }
    }

    removeProfile()
    {
        this.profile.innerHTML="";
    }
}