//const gitUser = new githubfinder();
const gituser = new githubFinder;
const ui = new UI;

class App {
    constructor(searchInput){
        this.searchInput = searchInput;
    }


    listenForKeyEvent(){
        this.searchInput.addEventListener('keyup', (e) => {
            const userText = e.target.value;
            
            if (userText != ''){
                gituser.getUser()
                .then((data) => {
                    if(data.profile.message === 'Not found'){
                        ui.showAlert("user Not found", "alert alert-danger");
                    }else {
                        ui.showProfile(data.profile);
                        ui.showRepos(data.repo);
                    }
                }).catch((err) => ui.showAlert("Error failed to fetch", "alert alert-danger"));
            }else {
                ui.clearProfile();
            }
        })
    }
}

const userNameInput = document.querySelector('#userNameInput');

const app = new App(userNameInput);
app.listenForKeyEvent();



//console.log(app.searchInput);
// userNameInput.addEventListener('keydown', getUserDetails);

// function getUserDetails(e){
//     console.log(e.type);
// }