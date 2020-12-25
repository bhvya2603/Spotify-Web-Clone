// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes

const redirectUri =  "https://spotify-clone-5a3ce.web.app/";
const clientId = "aa123193febb4eb2add56bbe88c826da";

const scopes = [
  "user-read-playback-position",
  "user-read-email",
  "user-library-modify",
  "playlist-modify-public",
  "ugc-image-upload",
  "user-follow-modify",
  "user-modify-playback-state",
  "user-read-recently-played",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "playlist-modify-private",
  "user-follow-read",
  "user-read-playback-state",
  "user-read-currently-playing",
  "playlist-read-private",
  "playlist-read-collaborative",
];
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item)=>{
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
}
export const loginUrl  = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`; 