window.addEventListener("DOMContentLoaded", (event) => {   

  // alert("Hello World!");
  /*
  const shrink = (e) => {
    const el = e.target
    
    // Remove cloned element from DOM after animation is over
    el.addEventListener("animationend", (e) => e.target.remove())

    // Trigger browser reflow to start animation
    el.style.animation = 'none';
    el.offsetHeight
    el.style.animation = ''
    el.classList.add("shrink-down")
  }

  const toggleFullScreen = (e) => {
    // Get position values for element
    const {
      top,
      left
    } = e.target.getBoundingClientRect()

    // Clone the element and its children
    let fullScreen = e.target.cloneNode(true)

    // Set top and left with custom property
    fullScreen.style.setProperty("--inset", `${top}px auto auto ${left}px`)

    // Add class with animation and position
    fullScreen.classList.add("full-screen")

    // Listen for click to close full screen
    fullScreen.addEventListener("click", shrink)

    // Place in container over element to expand
    container.appendChild(fullScreen)
  }
  boxes.forEach(box => {
    box.addEventListener("click", toggleFullScreen)
  })

  });*/

  /*
  const myImage = document.querySelector("img");

  myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
      myImage.setAttribute("src", "images/firefox2.png");
    } else {
      myImage.setAttribute("src", "images/firefox-icon.png");
    }
  });*/


  
  /*ART ITEMS ----------------------------------------------------------------------------------------- */

  const arts = [

    {

      category:"OCs Soraya Colored Rendered NSFW 2025", /*Ocs OCNAME Flat Rendered Colored BNW Lineart 202X NSFW*/ 
      Button: "1" ,
      img: "../../Art/0.Drawing/Finished (Jpg-png-gif-mp4)/soraya.jpg",
      credits: "" ,
      creditsLink:"" ,
      nameLink:"",
      Year : "Winter 2025" ,
      Character : "Soraya" ,
      Type: "Rendered and colored" ,
      Notes:"" ,

    },

    {
      category:"BNW rendered 2025", /*Ocs OCNAME Flat Rendered Colored BNW Lineart 202X NSFW*/ 
      Button: "2" ,
      img: "../../Art/0.Drawing/Finished (Jpg-png-gif-mp4)/leafeon.jpg",
      credits: "Leafon from Pokemon" ,
      creditsLink:"" ,
      nameLink:"",
      Year : "Winter 2025" ,
      Character : "" ,
      Type: "Black and White Rendered" ,
      Notes:"",

    },

    

    {
      category:"OCs Aasha Flat Colored 2025", /*Ocs OCNAME Flat Rendered Colored BNW Lineart 202X NSFW*/ 
      Button: "3" ,
      img: "../../Art/0.Drawing/Finished (Jpg-png-gif-mp4)/Aasha.jpg",
      credits: "" ,
      creditsLink:"" ,
      nameLink:"",
      Year : "Winter 2025" ,
      Character : "Aasha" ,
      Type: "Lineart Colored Flat" ,
      Notes:"Kitty cat hihi",

    },

  {
      category:"OCs Kah rendered Colored 2025", /*Ocs OCNAME Flat Rendered Colored BNW Lineart 202X NSFW*/ 
      Button: "4" ,
      img: "../../Art/0.Drawing/Finished (Jpg-png-gif-mp4)/Kah.jpg",
      credits: "" ,
      creditsLink:"" ,
      nameLink:"",
      Year : "Winter 2025" ,
      Character : "Kah" ,
      Type: "Colored and rendered" ,
      Notes:"",
    },


    {
      category:"OCs Flat Colored 2025", /*Ocs OCNAME Flat Rendered Colored BNW Lineart 202X NSFW*/ 
      Button: "5" ,
      img: "../../Art/0.Drawing/Finished (Jpg-png-gif-mp4)/Nathalia Athy - human.jpg",
      credits: "Nathalia by " ,
      creditsLink:"https://toyhou.se/Athy_Luna" ,
      nameLink:"Athy",
      Year : "Winter 2025" ,
      Character : "Nathalia" ,
      Type: "Colored and rendered" ,
      Notes:"",
    },

    {
      category:"OCs Flat Colored Lineart 2025", /*Ocs OCNAME Flat Rendered Colored BNW Lineart 202X NSFW*/ 
      Button: "6" ,
      img: "../../Art/0.Drawing/Finished (Jpg-png-gif-mp4)/full body avatar alora.jpg",
      credits: "" ,
      creditsLink:"" ,
      nameLink:"",
      Year : "Winter 2025" ,
      Character : "Alora" ,
      Type: "Flat Colored and Lineart" ,
      Notes:"",
    },

    {


      category:"OCs Alora Rendered Colored Lineart 2025", /*Ocs OCNAME Flat Rendered Colored BNW Lineart 202X NSFW*/ 
      Button: "7" ,
      img: "../../Art/0.Drawing/Finished (Jpg-png-gif-mp4)/Alora.jpg",
      credits: "" ,
      creditsLink:"" ,
      nameLink:"",
      Year : "Winter 2025" ,
      Character : "Alora" ,
      Type: "Rendered - Colored - Lineart" ,
      Notes:"",
    },

    {
      category:"Rendered BNW Lineart 2025", /*Ocs OCNAME Flat Rendered Colored BNW Lineart 202X NSFW*/ 
      Button: "8" ,
      img: "../../Art/0.Drawing/Finished (Jpg-png-gif-mp4)/Cinna_sasharp-wonder egg priority.jpg",
      credits: "Cinnabar by" ,   /*OCNAME by*/
      creditsLink:"https://toyhou.se/vermillionred" , /*Link socials*/
      nameLink:"Vermillionred", /*name of creator*/
      Year : "Winter 2025" ,
      Character : "Cinnabar (Sona)" ,
      Type: "Rendered - Black and White - Lineart" ,
      Notes:"",
    },

    {
      category:"OCS Diplo flat Colored Lineart 2025", /*Ocs OCNAME Flat Rendered Colored BNW Lineart 202X NSFW*/ 
      Button: "9" ,
      img: "../../Art/0.Drawing/Finished (Jpg-png-gif-mp4)/diplo doodles lost 1.png",
      credits: "The background is a Backroom pic :]" ,   /*OCNAME by*/
      creditsLink:"" , /*Link socials*/
      nameLink:"", /*name of creator*/
      Year : "Winter 2025" ,
      Character : "Diplo (sona)" ,
      Type: "colored - Lineart" ,
      Notes:"",
    },

    {

      category:"OCS Diplo BD Lineart 2025", /*Ocs OCNAME Flat Rendered Colored BNW Lineart 202X NSFW BD*/ 
      Button: "10" ,
      img: "../../Art/0.Drawing/Finished (Jpg-png-gif-mp4)/doodles diplo breaking responsability.jpg",
      credits: "The background is a Backrooms pic :]" ,   /*OCNAME by*/
      creditsLink:"" , /*Link socials*/
      nameLink:"", /*name of creator*/
      Year : "Winter 2025" ,
      Character : "Diplo (sona)" ,
      Type: "BD - Black and White - Lineart" ,
      Notes:"",
    },

    {
      category:"Flat Artfight Colored Lineart 2024", /*Ocs OCNAME Flat Rendered Colored BNW Lineart 202X NSFW BD Artfight*/ 
      Button: "11" ,
      img: "../../Art/0.Drawing/Finished (Jpg-png-gif-mp4)/Bhumi.jpg",
      credits: "Bhumi by " ,   /*OCNAME by*/
      creditsLink:"https://artfight.net/~arnie_mae" , /*Link socials*/
      nameLink:"arnie_mae", /*name of creator*/
      Year : "Summer 2024" ,
      Character : "Bhumi" ,
      Type: "Flat - Colored - Lineart" ,
      Notes:"",
    },

    {
      category:"OCS Fedwa Flat Colored Lineart 2025", /*Ocs OCNAME Flat Rendered Colored BNW Lineart 202X NSFW BD Artfight*/ 
      Button: "12" ,
      img: "../../Art/0.Drawing/Finished (Jpg-png-gif-mp4)/Bat lemon.jpg",
      credits: "B " ,   /*OCNAME by*/
      creditsLink:"" , /*Link socials*/
      nameLink:"", /*name of creator*/
      Year : "Winter 2025" ,
      Character : "Fedwa" ,
      Type: "Flat - Colored - Lineart" ,
      Notes:"",
    },


    {
      category:"OCS Diplo Lineart 2025", /*Ocs OCNAME Flat Rendered Colored BNW Lineart 202X NSFW BD Artfight*/ 
      Button: "13" ,
      img: "../../Art/0.Drawing/Finished (Jpg-png-gif-mp4)/doodles diplo killin spree.jpg",
      credits: "" ,   /*OCNAME by*/
      creditsLink:"" , /*Link socials*/
      nameLink:"", /*name of creator*/
      Year : "Automn 2025" ,
      Character : "Diplo (sona)" ,
      Type: "Lineart" ,
      Notes:"",
    },

    {
      category:"OCS Diplo Rendered Colored Lineart 2025", /*Ocs OCNAME Flat Rendered Colored BNW Lineart 202X NSFW BD Artfight*/ 
      Button: "14" ,
      img: "../../Art/0.Drawing/Finished (Jpg-png-gif-mp4)/doodles diplo full slut.jpg",
      credits: "" ,   /*OCNAME by*/
      creditsLink:"" , /*Link socials*/
      nameLink:"", /*name of creator*/
      Year : "Automn 2025" ,
      Character : "Diplo (sona)" ,
      Type: "Lineart - Rendered - Colored" ,
      Notes:"",
    },

    {
      category:"Rendered Colored 2024", /*Ocs OCNAME Flat Rendered Colored BNW Lineart 202X NSFW BD Artfight*/ 
      Button: "15" ,
      img: "../../Art/0.Drawing/Finished (Jpg-png-gif-mp4)/Evangeline.jpg",
      credits: "Evangeline from Wakfu" ,   /*OCNAME by*/
      creditsLink:"" , /*Link socials*/
      nameLink:"", /*name of creator*/
      Year : "Winter 2024" ,
      Character : "" ,
      Type: "Rendered - Colored" ,
      Notes:"",
    },

    {
      category:"OCS Hyun-soo Lineart Flat Colored 2025", /*Ocs OCNAME Flat Rendered Colored BNW Lineart 202X NSFW BD Artfight*/ 
      Button: "16" ,
      img: "../../Art/0.Drawing/Finished (Jpg-png-gif-mp4)/full body avatar Hyun-soo.jpg",
      credits: "" ,   /*OCNAME by*/
      creditsLink:"" , /*Link socials*/
      nameLink:"", /*name of creator*/
      Year : "Winter 2025" ,
      Character : "Hyun-soo" ,
      Type: "Lineart - Flat - Colored" ,
      Notes:"",
    },

    {
      category:"OCS Kah Lineart 2025", /*Ocs OCNAME Flat Rendered Colored BNW Lineart 202X NSFW BD Artfight*/ 
      Button: "17" ,
      img: "../../Art/0.Drawing/Finished (Jpg-png-gif-mp4)/sad kah crisis.jpg",
      credits: "" ,   /*OCNAME by*/
      creditsLink:"" , /*Link socials*/
      nameLink:"", /*name of creator*/
      Year : "Summer 2025" ,
      Character : "Kah" ,
      Type: "Lineart" ,
      Notes:"",
    },

    {
      category:"OCS Hyun-soo Rendered Colored Lineart 2025", /*Ocs OCNAME Flat Rendered Colored BNW Lineart 202X NSFW BD Artfight*/ 
      Button: "18" ,
      img: "../../Art/0.Drawing/Finished (Jpg-png-gif-mp4)/Hyun-soo.jpg",
      credits: "" ,   /*OCNAME by*/
      creditsLink:"" , /*Link socials*/
      nameLink:"", /*name of creator*/
      Year : "Winter 2025" ,
      Character : "Hyun-soo" ,
      Type: "Rendered - Colored - Lineart" ,
      Notes:"",
    }

  ];


/*-------------SHUFFLE-------------------*/

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

/*-------------SHUFFLE END-------------------*/

/*------------- old gallery and zoom -------------------*/

  /* const column = document.querySelector('.column');
  /*const gallery = document.querySelector('.gallery');*/

/*  const renderItems = (arr) => {
    column.innerHTML = "";
   /* gallery.innerHTML = "";*/

   /* shuffle(arr); */

/*    arr.forEach(Item => {
      column.innerHTML += `
        <div class="item ${Item.category}" data-id="${Item.id}">
            <a  href="${Item.tag}">
            <img class="art" src="${Item.img}">
            </a>
        </div>
        <a href="${Item.href}" class="lightbox trans" id="${Item.id}">
            <img src="${Item.img}">
        </a>
      `;   */
       
      /*gallery.innerHTML += ` 
       <div class="carousel-cell" >
                <img class="art floating" 
                        src="${Item.img}">
                    </div> `; */
      
 /*   });
  };     */

  
/*  renderItems(arts);  */

/*------------- old gallery and zoom  END  -------------------*/

/*------------- NEW GALLERY AND ZOOM  -------------------*/
 const column = document.querySelector('.column');

  const renderItems = (arr) => {
    column.innerHTML = "";

    shuffle(arr);

    arr.forEach(Item => {
      column.innerHTML += `

  <button class="item ${Item.category}" type="button" data-toggle="collapse" data-target="#${Item.Button}" 
            aria-expanded="false" aria-controls="folder"> <!--button image-->
            
        <img class="art" src="${Item.img}">
            
  </button>

    <div id="${Item.Button}" class="collapse"> <!--the button will open whats after this-->

        <button class="cont" type="button" data-toggle="collapse" data-target="#${Item.Button}" 
            aria-expanded="false" aria-controls="folder">
            
            <div class="credits"> Credits : ${Item.credits} <a id="link" href="${Item.creditsLink}" >${Item.nameLink}</a> </div>
            <img class="image-zoom" src="${Item.img}">
            <div class="notes">
                Year : ${Item.Year}
            <br>Characters/Ocs : ${Item.Character}
            <br>Type : ${Item.Type}
            <br>Notes : ${Item.Notes}
            </div>
    
        </button>
      </div>
        
      `;   
      
      
    });
  };

  
  renderItems(arts);

/*<div class="item ${Item.category}" data-id="${Item.id}">
            <a  href="${Item.tag}">
            <img class="art" src="${Item.img}">
            </a>
        </div>
        <a href="${Item.href}" class="lightbox trans" id="${Item.id}">
            <img src="${Item.img}">
        </a>*/

/*------------- NEW GALLERY AND ZOOM END -------------------*/

/*********************  PSP   ************************************ */
const gallery = document.querySelector('.gallery');

  const renderPsp = (arr) => {
    gallery.innerHTML = "";

    shuffle(arr);

    arr.forEach(Psp => {
      gallery.innerHTML += ` 
       <div class="carousel-cell" >
                <img class="art floating" 
                        src="${Psp.img}">
                    </div> `; 
      
    });
  };

  renderPsp(arts);

  /********       PSP END    ********/


const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryitems = document.querySelectorAll(".item");

  filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
          filterButtons.forEach(btn => {
            btn.classList.remove("active");
          });

          button.classList.add("active");

          const filterValue = button.dataset.filter;
          
          galleryitems.forEach(item => {
              if (filterValue === "All" || item.classList.contains(filterValue)) {
                    item.classList.remove("hidden");
              } else {
                    item.classList.add("hidden");
              }

          })
        });
      });   




const filterNsfw = document.querySelectorAll(".filter-nsfw");
const galleryitemsnsfw = document.querySelectorAll(".item");

  filterNsfw.forEach((button) => {
      button.addEventListener("click", () => {
          filterNsfw.forEach(button => {
            button.classList.remove("selected");
          });

          button.classList.add("selected");

          
          const filterValue = button.dataset.filter;
          
          galleryitemsnsfw.forEach(item => {
              if (filterValue === "All" || item.classList.contains(filterValue)) {
                    item.classList.remove("hidden");
              } else {
                    item.classList.add("hidden");
              }

          })
        });
      });  



/*----------------------------PSP SOUND------------------------------------------------------*/
      function play() {
        var audio = new Audio('image/PSP_system_plugin_option.mp3');
        audio.play();
      }

    });
/*----------------------------------------------------------------------------------*/



var buttonsObj = {
  Diplo: { isSelected: false },
  action2: { isSelected: false },
  action3: { isSelected: false },
  action4: { isSelected: false }
};

var setButtonAction = function (objBtn) {
  var btnName = objBtn.name;
  var isSelected = buttonsObj[btnName].isSelected;
  if (isSelected) {
    objBtn.classList.remove('btn-pressed');
  } else {
    objBtn.classList.add('btn-pressed');
  }
  buttonsObj[btnName].isSelected = !isSelected;
}




/*-------------------- MUSIC BOX --------------------------*/


const songs = [

    {
      id:"img_1",
      img: "../../Art/0.Drawing/Finished (Jpg-png-gif-mp4)/soraya.jpg",
      filter:"oc",
      category:"OCs Soraya Colored Rendered",
      tag:"#img_1",
      href:"#_1"
    },

    {
      id:"img_2",
      
      img: "../../Art/0.Drawing/Finished (Jpg-png-gif-mp4)/leafeon.jpg",
      filter:"...",
      category:"Black n White",

      tag:"#img_2",
      href:"#_2"
    }


];


const column = document.querySelector('.column');

  const renderItems = (arr) => {
    column.innerHTML = "";
    
    arr.forEach(Item => {
      column.innerHTML += `
        <div class="item ${Item.category}" data-id="${Item.id}">
            <a  href="${Item.tag}">
            <img class="art" src="${Item.img}">
            </a>
        </div>
        <a href="${Item.href}" class="lightbox trans" id="${Item.id}">
            <img src="${Item.img}">
        </a>
      `;
       
    });
  };


  renderItems(songs);



  /*------------SLIDESHOW---------------------------*/

  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


/*----------------------------------------------------------------------------------------------------- */



$(document).ready(function(){
  $('.gallery-2').slick({
    
  });
});

$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});