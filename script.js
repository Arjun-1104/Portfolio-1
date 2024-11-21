let backgroundImg = document.querySelector('.background-img');
let aboutImg = document.querySelector('.about-img');
let aboutDetails = document.getElementById("about-details");
let cardSection = document.querySelector('.card-section');
let Name = document.querySelector('.heading-content>h2');
let contactdiv  = document.querySelectorAll('#contact>form>div');
let localCount = 1;
let contactSubmit = document.querySelector('#contact>form>button');
let sun = 'fa-sun';
let moon = 'fa-moon';
let darkTheme = document.getElementById('darkTheme');
let body = document.getElementsByTagName('body');
// let aboutDiv = document.getElementById('about');
// let serviceDiv = document.getElementById('serviceDiv');
let subHeading = document.getElementsByClassName('sub-heading');
let resumeBtn = document.getElementById('resume-btn');

darkTheme.addEventListener('click',()=>{ darkThemeFunction()})

let data = {
    mainName: "Arjun Rathore",
    mainImg: "./img/person.jpg",
    about : "I am a dedicated full stack web developer with a passion for creating seamless, responsive web applications. With expertise in both front-end and back-end technologies, I enjoy building complete web solutions from user-friendly interfaces to efficient server-side logic. I stay up-to-date with the latest industry trends and technologies to continuously improve my skills and deliver high-quality, scalable solutions.",
    services : [
        {imgPath: './img/movie-guide.jpg',title:'Movie Guide App',details: 'A movie guide app provides users with movie details, trailers, reviews, ratings, and recommendations. It also offers showtimes, streaming availability, and personalized watchlists to help users discover and track films.'},
        {imgPath: './img/spotify.jpeg',title:'Spotify App',details: 'The Spotify app lets users stream music and podcasts, create playlists, and discover new content. It offers personalized recommendations, offline listening, and syncs across devices for seamless playback.'},
        {imgPath: './img/starbucks.jpeg',title:'Starbucks Clone',details: 'The Starbucks app allows users to order and pay ahead, earn rewards through the Starbucks Rewards program, and find nearby stores. It also offers personalized offers, tracks order history, and enables mobile payment for a seamless experience.'},
        {imgPath: './img/tic-tac-toe.png',title:'Tic-Tac-Toe App',details: 'A Tic Tac Toe app allows two players to take turns placing Xs and Os on a 3x3 grid. The goal is to align three of their marks horizontally, vertically, or diagonally. The app tracks moves, checks for wins or draws, and restarts for replay.'},
        {imgPath: './img/contact-form-img.jpeg',title:'Contact Form',details: 'A contact form allows users to send inquiries or feedback directly to a website owner or business. Users fill in fields like name, email, and message, and upon submission, the form sends the information to a specified email or database for further action.'},
        {imgPath: './img/dental.jpeg',title:'Dental Clinic Form',details: 'A dental clinic form collects essential patient information such as personal details, medical history, insurance information, and consent for treatment. It ensures accurate records and helps the clinic provide safe, personalized dental care.'}
    ]
}


let {mainName, mainImg, about, services} = data;
Name = mainName;
backgroundImg.attributes[0].nodeValue = mainImg;
aboutImg.attributes[0].nodeValue = mainImg;
aboutDetails.textContent = about;

services.forEach(ele => {
    let headd = '<h2>dkdjgdkd</h2>';
    cardSection.insertAdjacentHTML('beforeEnd',
        `<div class="col-lg-4 col-md-4 col-sm-6 col-12 pb-5">
        <div class="card h-100 pb-5">
          <img src=${ele.imgPath} class="card-img-top card-image img-fluid" alt="...">
          <div class="card-body">
            <h5 class="card-title">${ele.title}</h5>
            <p class="card-text">${ele.details}</p>
            <a href="#" class="card-button btn btn-dark ">Go somewhere</a>
          </div>
        </div>
      </div>`
    );
});

cardSection.insertAdjacentHTML('beforeEnd',
    `<button class="sbtn btn w-50 mx-auto">
        <a class="d-block" href="#">Know More</a>
    </button>`);

contactSubmit.addEventListener('click',saveData);

let setdata = ['userName', 'userEmail', 'userDescription'];
function saveData(){
    contactdiv.forEach((ele,i) => {
       localStorage.setItem(`${setdata[i]}${localCount}`, ele.firstElementChild.value);
    });
    localCount++; 
}

function darkThemeFunction(){
    darkTheme.classList.toggle(sun);
    darkTheme.classList.toggle(moon);
    let sBtn = document.getElementsByClassName('sbtn');

    if(darkTheme.classList.contains(moon)){
        for(i=0;i<subHeading.length;i++){
            subHeading[i].style.color = "white";
        }
        body[0].style.backgroundColor = "black";
        resumeBtn.style.backgroundColor = "white"; 
        resumeBtn.firstElementChild.style.color = 'black';
        sBtn[0].style.backgroundColor = "white";
        sBtn[0].firstElementChild.style.color = "black";

    }
    else{
        for(i=0;i<subHeading.length;i++){
            subHeading[i].style.color = "black";
        }
        body[0].style.backgroundColor = "white";
        resumeBtn.style.backgroundColor = "black";
        resumeBtn.firstElementChild.style.color = 'white';
        sBtn[0].style.backgroundColor = "black";
        sBtn[0].firstElementChild.style.color = "white";
    }
}
