
// function Redirect() {
//     window.location = "https://exampleURL.com/";
//      }
//      document.write("You will be redirected to the main page in 10 seconds.");
//      setTimeout(function() {
//     Redirect();
//      }, 10000);

// const form = document.querySelector('form');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
// });


function linkedin() {
    window.location = "www.linkedin.com/in/michael-o-655b88233";
     }
function twitter() {
    window.location = "https://twitter.com/M11Sikat";
     }
function instgram() {
    window.location = "https://www.instagram.com/micheal_o_sikat?igsh=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr";
     }



let btn = document.getElementById('btn2');



btn.addEventListener('click', () => {
    let UserInput = document.getElementById('searchmovies2').value.toUpperCase();
    let MovieList = document.getElementById('Movie-list');
    const AllMovie = document.querySelectorAll('.polaroid');
    const movieName = MovieList.getElementsByTagName("p");

    for (var i = 0; i < movieName.length; i++){
           let match = AllMovie[i].getElementsByTagName("p")[0];
           if(match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(UserInput) > -1)
            {
                AllMovie[i].style.display = ""; 
            } else{
                AllMovie[i].style.display = "none";
            }

           }
    }


});



let Captain = document.getElementById('captain');

Captain.addEventListener('click', () => {
    window.location = "captain.html";
});




