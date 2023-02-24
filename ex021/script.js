const usernames=["sabrina","sabrina1","sabrina2"];
const spinner = document.getElementById("spinner"), alert= document.getElementById("alert");
const update = (value) => {
    spinner.classList.remove("visible");

    const usernameExist = usernames.some(u => u === value);
    if (usernameExist) {
        alert.classList.ad("visible");
    } else {
        alert.classList.remove("visible");
    }
}
