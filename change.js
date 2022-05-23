let backgroundColor = '#292929';

function changeBackground(){
    if(backgroundColor === '#292929') {
	    document.body.style.backgroundColor = '#F2F2F2';
        document.getElementById("changetext").textContent="Background: #F2F2F2"
        backgroundColor = '#F2F2F2'; 
        return backgroundColor;
    }
    
    if(backgroundColor === '#F2F2F2'){
        document.body.style.backgroundColor = '#C7C7C7';
        document.getElementById("changetext").textContent="Background: #C7C7C7";
        backgroundColor = '#C7C7C7';
        return backgroundColor;
    }

    if(backgroundColor === '#C7C7C7'){
        document.body.style.backgroundColor = '#292929';
        document.getElementById("changetext").textContent="Background: #292929";
        backgroundColor = '#292929';
        return backgroundColor;
    }
}