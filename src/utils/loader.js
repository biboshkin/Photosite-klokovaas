export const hideLoader = () => {
    document.getElementById("app").className = "show";
    document.getElementById("loader").className = "delete";
}

export const showLoader = () => {
    document.getElementById("app").className = "delete";
    document.getElementById("loader").className = "show";
}

