  var today=new Date();
            var hourNow=today.getHours();

            var greeting;
            if(hourNow > 18){
                greeting ='Good evening! and Welcome to AB Science & Tech';
            }
            else if(hourNow > 12)
             {
                greeting='Good afternoon! and Welcome to AB Science & Tech';
            }
            else{
                greeting='Welcome! and Welcome to AB Science & Tech';
            }

            document.write(`<h3>` + greeting + `<h3>`);

            


                
        document.addEventListener("DOMContentLoaded", function() {
            // Get the dropdown menu element
            var dropdownMenu = document.getElementById("alumniDropdownMenu");

            // Show the dropdown menu on hover
            document.getElementById("alumniLink").addEventListener("mouseover", function() {
                dropdownMenu.style.display = "block";
            });
            // Hide the dropdown menu when not hovering over the "Alumni" link
            document.getElementById("alumniLink").addEventListener("mouseout", function() {
                dropdownMenu.style.display = "none";
            });
        });
    