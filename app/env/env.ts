const allEnv = import.meta.env;
function get_env_var(var_name) {
    let key = `VITE_${var_name}`; // prepend VITE for all vars
    let value = allEnv[key];
    if (value === undefined) {
        console.log("Var with name ${var_name} is undefined");
        return "";
    } else {
        return value;
    }
}

const apiBaseUrl = get_env_var("API_URL");
const apiPort = get_env_var("API_PORT");
export const apiUrl = apiPort !== undefined ? `${apiBaseUrl}:${apiPort}` : `${apiBaseUrl}`;

