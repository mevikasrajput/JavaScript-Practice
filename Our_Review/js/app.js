const reviews = [
    {
        id: 1,
        name: "Anna",
        job: "Webdeveloper",
        img: "https://bit.ly/3m8WscZ",
        text: "To be fair in certain contexts your professional bio does need to be more formal, like Mr vikas",
    },

    {
        id: 2,
        name: "Annabee",
        job: "Webdeveloper",
        img: "D:\vikas_workspace\javascriptprojects\Our_Review\images",
        text: "To be fair in certain contexts your professional bio does need to be more formal, like Mr vikas",
    },

    {
        id: 3,
        name: "Annatwe",
        job: "Webdeveloper",
        img: "D:\vikas_workspace\javascriptprojects\Our_Review\images\img-2",
        text: "To be fair in certain contexts your professional bio does need to be more formal, like Mr vikas",
    },
];

const img = document.getElementById("logo");
const name = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");


const prebtn = document.querySelector(".pre-btn");
const postbtn = document.querySelector(".post-btn");
const followbtn = document.querySelector(".follow-btn");

let currentItem = 3;

window.addEventListener("DOMContentLoaded" , function() {
    const item = reviews[currentItem];
    img.src = item.img;
});