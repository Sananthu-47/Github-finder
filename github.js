class Github {
    constructor() {
        this.client_id = "aac950d8a1d8a75f4f45";
        this.client_secret = "ee2c857fcb342dc22425ad0c56254fbe983eaa47";
    }
    async getuser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoData = await repoResponse.json();

        return {
            profileData,
            repoData
        }
    }
}



