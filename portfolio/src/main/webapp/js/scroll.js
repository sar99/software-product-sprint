

//Height of improvised scrollbar 


let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
    let progressHeight = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100;
    progress.style.height = progressHeight + "%";
    //this.console.log(document.body.scrollHeight - window.innerHeight);

}