export default class PostService {
    constructor(http, tokenStorage) {
        this.http = http;
        this.tokenStorage = tokenStorage;
    }

    async getPosts(category) {
        let query = category ? `?c=${category}` : '';
        return await this.http.fetch(`/posts${query}`, {
            method:'GET',
            headers: this.getHeaders(),
        });
    }

    async getPostById(postId) {
        return await this.http.fetch(`/posts/${postId}`, {
            method:'GET',
            headers: this.getHeaders(),
        });
    }

    async postPost(anonymous, title, text, period, category, comment, profanity, sex) {
        return await this.http.fetch(`/write`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify({
                anonymous,
                title,
                text,
                postingPeriod: period,
                category,
                comment,
                profanity,
                sex
            }),
        });
    }

    async deletePost(postId) {
        return await this.http.fetch(`/posts/${postId}`, {
            method: 'DELETE',
            headers: this.getHeaders(),
        });
    }

    async updatePost(postId, anonymous, title, text, postingPeriod, comment, profanity, sex, category) {
        return await this.http.fetch(`/write/${postId}`, {
            method: 'PUT',
            headers: this.getHeaders(),
            //headers: { 'Content-Type':'application/json'},//application.json이 아니라 application.json임 그런데 get이랑 delete는 .으로 해도 왜 되노. post는 .으로 안해봄
            body: JSON.stringify({
                anonymous,
                title,
                text,
                postingPeriod,
                comment,
                profanity,
                sex,
                category
            }),
        })
    }

    getHeaders() {
        const token = this.tokenStorage.getToken();
        return {
            Authorization: `Bearer ${token}`,
        }
    }
}