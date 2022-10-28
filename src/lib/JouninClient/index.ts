
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function fetchFromApi(action: string): Promise<any>{
    return fetch(`${BASE_URL}/${action}`)
    .then((r) => r.json());
}

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

function postToApi(action: string, payload: any = {}): Promise<any>{
    return postData(`${BASE_URL}/${action}`, payload);
}

export type HighScoresDto = {
    values: Array<HighScoreDto>
}

export type HighScoreDto = {
    name: string,
    count: number,
}

export type UserScoreDto = {
    value: number
}

export type MissionReportDto = {
    jounin: string,
    genin: Array<string>,
    success: boolean,
    saveCount: number
}

export async function fetchHighScores() : Promise<HighScoresDto>{
    var result = await fetchFromApi("sakura/highScores");
    return result as HighScoresDto;
}

export async function fetchUsersScore(username: string): Promise<UserScoreDto>{
    var result = await fetchFromApi("sakura/userCount?username=" + username);
    return result as UserScoreDto;
}

export async function trySaveSakura(username: string): Promise<MissionReportDto>{
    var result = await postToApi("sakura/rescueSakura?username=" + username);
    return result as MissionReportDto;
}
