export default class AuthService {

    constructor(http, tokenStorage) {
        this.http = http;
        this.tokenStorage = tokenStorage;
    }

    async signup(username, email, password) {
        //console.log("auth.js"+username);
        const data = await this.http.fetch('/sign_up', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password,
                
            }),
        });
        this.tokenStorage.saveToken(data.token);
        return data;
    }

    async login(email, password) {
        console.log(email+" "+password);
        const data = await this.http.fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ email, password}),
        });
        this.tokenStorage.saveToken(data.token);
        return data;
    }

    async me() {
        const token = this.tokenStorage.getToken();
        return this.http.fetch('/me', {
            method: 'GET',
            headers: {Authorization: `Bearer ${token}`},
        });
    }

    async logout() {
        this.tokenStorage.clearToken();
    }
}

