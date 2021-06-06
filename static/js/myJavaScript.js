// Open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

// load more content, default three more each time
function infiniteScroll(n = 3){

    var batch = document.getElementsByClassName('grid-item no-show'),
        N = batch.length;
    if(N > n){N = n};
    
    // remove the no-show class from the first hidden number
    for(i=0; i < N; i++){
        batch[0].classList.remove('no-show');
    }

    // remove button if no more content
    if(batch.length === 0){
        var button = document.getElementById('show-more-button');
        button.style.display = 'none';
    }

}

