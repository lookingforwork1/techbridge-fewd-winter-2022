//scripts for problems
function resetFindInGrid() {
    //set tbNumberToFind to blank
    let tbNumberToFind = document.getElementById("tbNumberToFind");
    tbNumberToFind.value = '';
    

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}

function resetFindInList() {
     //set tbTextToFind to blank
    let tbTextToFind = document.getElementById("tbTextToFind");
    tbTextToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}



function reloadPage() {
    window.location.reload();
    return false;
}


function findInGrid() {
    //find in grid
    let tbNumberToFind_ele = document.getElementById("tbNumberToFind");
    let tbNumberToFind = tbNumberToFind_ele.value.toUpperCase();
    console.log("tbNumbertoFind ", tbNumberToFind);

    let tbrows = document.getElementsByClassName("row");
    //console.log(tbrows.length);

    for (let row of tbrows) {
        let spans = row.getElementsByTagName("span");
        //console.log(spans);

        for (let span of spans) {
            if (span.innerText == tbNumberToFind) {
                console.log(span);
            }
        }
    }
        

   

     
        
    
    


    
    

    



 
}

function findInList() {
    //find In List
    let tbTextFind_ele = document.getElementById("tbTextToFind");
    let tbTextToFind = tbTextFind_ele.value.toUpperCase();
    console.log("tbTexttofind ", tbTextToFind);
      
    let spans = document.getElementsByTagName("span");
    //console.log(spans.length);
    for (let span of spans) {
        // console.log(span)
        // check of the span's text matches the item to find
        if (span.innerText == tbTextToFind) {
          // prints the span we found
          console.log(span);
        }
    }

    

   
}

function sortIt() {
    var spanlist=[];
        let spans = document.getElementsByTagName('span');
        for(var i=0; i<spans.length; i++){
          spanlist[i]=spans[i].innerText;
        spanlist.sort();
        //console.log(spanlist);
        }
        console.log(spanlist);
    //
}