import { API_KEY , API_HOST, LANG } from "../utils/constants";

export function getNewsMoviesApi(page = 1){
    const url = `${API_HOST}/movie/now_playing?api_key=${API_KEY}&language=${LANG}&page=${page}`;

    return fetch(url).then((response) => {
        return response.json();
        }).then((result) =>{
            return result;
        });
    }