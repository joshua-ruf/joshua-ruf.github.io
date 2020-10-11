// Open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

// load more content, default three more each time
function infiniteScroll(n = 3){

    var batch = document.getElementsByClassName('grid-item no-show');
    var N = batch.length;
    if(N > n){N = n};
    
    for(i=0; i < N; i++){
        batch[0].classList.remove('no-show');
    }

    if(batch.length == 0){
        var button = document.getElementsByClassName('button');
        button[0].innerHTML = 'End of Content';
        button[0].classList.remove('button-hover');
    }

}