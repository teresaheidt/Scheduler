// to show the day and date at the top of the page
let d = new Date()
document.getElementById("currentDay").innerHTML = d.toString();

// Color code timeblocks

var textboxArray = $(".form-control")

textboxArray.forEach(function(myElement){{
    if ( this.moment === "ago" ) {
    this.style.color = ".past";
    } 
    else if (this.moment === "from now") {
    this.style.color = ".future";
    }
    else {
    this.style.color = ".present";
    }
            
    };
});

// Save message in the timeblock


// Save to local storage


// Persist the event






   