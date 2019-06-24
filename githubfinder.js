class githubFinder{
    constructor(){
        this.client_id = 'd9308aacf8b204d361fd';
        this.client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b';
        this.repos_count = 5; //to be made dynamci
        this.repos_sort = 'created: asc'; //to be made dynamic
    }

    //?client_id=${this.client_id}&client_secret=${this.client_secret}
    //&client_id=${this.client_id}&client_secret=${this.client_secret}

    async getUser(user){
        const profileRes = await fetch(`https://api.github.com/users/${user}`);

        const reposRes = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`);

        const profileData = profileRes.json();
        const reposData = reposRes.json();

        return {
            profileData,
            reposData
        }
    }
}


