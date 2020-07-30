// to show the day and date at the top of the page

let d = new Date()
document.getElementById("currentDay").innerHTML = d.toString();

// Color code timeblocks

var textboxArray = $(".form-control")

$(textboxArray).each(function(myElement){{
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

//text box array
for (let i = 0; i < textboxArray.length; i++) {
    let val = getCookie("box" + i);
    textboxArray[i].value = val != null ? val : "";
  }
   
//   document.getElementById("date").innerHTML = moment();
   
  console.log(moment())
  function test(box) {
    setCookie("box" + box, textboxArray[box].value);
  }

  function setCookie(name, value) {
    document.cookie = name + "=" + value + ";path=/;";

  }
   
  function getCookie(name) {
    var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return v ? v[2] : null;
  }

// Save message in the timeblock


// Save to local storage
const button = document.querySelector(".button-addon2");
const formControl = document.querySelector(".form-control");

btn.onclick = function () {
  const formControl = formControl.value;
  console.log(formControl);

};

localStorage.setItem("date", "event");
console.log("name")



// Persist the event






   