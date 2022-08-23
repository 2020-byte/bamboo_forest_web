export default class PostService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async getPosts(category) {
        let query = category ? `?c=${category}` : '';
        const response = await fetch(`${this.baseURL}/posts${query}`, {
            method:'GET',
            headers: {'Content-Type':'application/json'},
        });
        const data = await response.json();
        if (response.status != 200) {
            throw new Error(data.message);
        }
        return data;
    }

    async getPostById(postId) {
        const response = await fetch(`${this.baseURL}/posts/${postId}`, {
            method:'GET',
            headers: {'Content-Type':'application/json'},
        });
        const data = await response.json();
        if (response.status != 200) {
            throw new Error(data.message);
        }
        return data;
    }

    async postPost(username, anonymous, title, text, period, category, comment, profanity, sex) {
        console.log(category);
        const response = await fetch(`${this.baseURL}/write`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                anonymous,
                title,
                text,
                period,
                category,
                comment,
                profanity,
                sex
            }),
        });
        const data = await response.json();
        if (response.status !== 201) {
            throw new Error(data.message);
        }
        console.log(data);
        return data;
    }

    async deletePost(postId) {
        const response = await fetch(`${this.baseURL}/posts/${postId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'},
        });
        if (response.status !== 204) {
            const data = await response.json();
            throw new Error(data.message);
        }
    }

    async updatePost(postId, title, text, postingPeriod, comment, profanity, sex, category) {

        const response = await fetch(`${this.baseURL}/write/${postId}`, {
            method: 'PUT',
            headers: { 'Content-Type':'application/json'},//application.json이 아니라 application.json임 그런데 get이랑 delete는 .으로 해도 왜 되노. post는 .으로 안해봄
            body: JSON.stringify({
                title,
                text,
                postingPeriod,
                comment,
                profanity,
                sex,
                category
            }),
        })
        
        const data = await response.json();
        if (response.status !== 200) {
            throw new Error(data.message);
        }
        return data;
    }
}