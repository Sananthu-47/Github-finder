const github = new Github;
const ui= new Ui;
const userField = document.getElementById('user-input');

userField.addEventListener('keyup',(e)=>
{
    let userInput= e.target.value;

    if(userInput!=="")
    {
        github.getuser(userInput)
        .then(data=>{
            if(data.profileData.message=="Not Found")
            {
                ui.showAlert('User not found',"alert alert-danger")
            }else{
                ui.showProfile(data.profileData);
                ui.showRepo(data.repoData);
            }
        })
    }else{
        ui.removeProfile();
    }
});