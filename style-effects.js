// const handleOnMouseMove = e => {
//     const {currentTarget: target} = e;

//     const rect = target.getBoundingClientRect(),
//         x = e.clientX - rect.left,
//         y = e.clientY - rect.top;

//     target.style.setProperty("--mouse-x", `${x}px`);
//     target.style.setProperty("--mouse-y", `${y}px`);
// }

// for(const card of document.querySelectorAll(".button")){
//     card.onmousemove = e => handleOnMouseMove(e);
// }


document.getElementById("buttonsContainer").onmousemove = e => {
    for(const button of document.getElementsByClassName("button")){
        
        const rect = button.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

        button.style.setProperty("--mouse-x", `${x}px`);
        button.style.setProperty("--mouse-y", `${y}px`);
    }
}