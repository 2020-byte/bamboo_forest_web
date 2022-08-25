const TOKEN = 'token';

export default class TokneStorage {
    saveToken(token) {
        localStorage.setItem(TOKEN, token);
        //localStorage는 브라우저 API
        //TODO:보안 위해서 코드 더짜기
        //localStorage에 그냥 저장하는 것은 위험하다.
    }

    getToken() {
        return localStorage.getItem(TOKEN);
    }

    clearToken() {
        localStorage.clear();
    }
}