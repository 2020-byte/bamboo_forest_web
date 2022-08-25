export default class HttpClient {
    constructor(baseURL, authErrorEventBus) {
        this.baseURL = baseURL;
        this.authErrorEventBus = authErrorEventBus;
    }

    async fetch(url, options) {
        const res = await fetch(`${this.baseURL}${url}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });
        let data;
        try {
            data = await res.json();
        } catch (error) {
            console.error(error);
        }

        if (res.status > 299 || res.status < 200) {
            const message = 
                data && data.message ? data.message : 'Something went wrong!';
            const error = new Error(message);
            if (res.status === 401) {
                this.authErrorEventBus.notify(error);
                //http.fetch가 우리가 커스텀한 함순데 이 함수르 이용해서
                //서버에서 json을 전달하고 그 결과값을 돌려받지.
                //그런데 결과가 오류이면 결과값을 돌려받지 않고
                //이 오류에 대한 정보를 알려주고 그에 대한 작동 하도록 해주는게 authErrorEventBus
                //여기서 오류는 토큰이 만료된거 즉, res.status === 401일 때,
                //그 작동은 authErrorEventBus.nofity(error)임
                //그런데 notify가 하는 일을 authErrorEventBus.listen(callback)으로 (callback이 notify가 하는 일)로 정해줄 수 있음.
                //토큰이 만료됬을 때 notify가 해야 하는 일은 사용자를 로그인페이지로 돌려보내주는거
                //근데 왜 listen으로 notify가 하는 일을 정해주냐?
                //그 이유는 우리가 해야할 것은 setUser(undefiend)인데
                //authErrorEventBus에는 setUser이라는 함수가 없기 때문에
                //setUser함수를 사용할 수 있는 곳에서 listen을 통해 notify가 하는 setUser을 할 수 있도록 정해주는 것.
                //listen을 통해서 정해줄 때 useEffect(() => {authErrorEventBus.listen((err) => setUser(undefiend))}, [authErrorEventBus])를 이용해서 처음 마운트할 때랑 authErrorEventBus가 바뀔 때만
                //안그러면 props로 받은 authErrorEventBus가 무한으로 호출됨.

                return;
            }
            throw error;
        }
        return data;
    }
    
}