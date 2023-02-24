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

const debounce =(callback, time) => {
    let interval;
    return (...args) => {
        clearTimeout(interval);
        interval = setTimeout(() => {
            callback.apply(null,args);
        }, time);
    }
}
const handleStarsTyping =() => {
    spinner.classList.add("visible");
}
const handleChange = debounce(input => {
    const{value}=input.target;
    update(value);
}, 500)
