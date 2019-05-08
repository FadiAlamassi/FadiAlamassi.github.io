document.addEventListener('click', function(e) {
    var profile = document.getElementsByClassName("profile");
    var skills = document.getElementsByClassName("skills");
    var myLinks = document.getElementsByClassName("myLinks");
    var list = document.getElementsByClassName("list-content");
    var close = document.getElementsByClassName("btn-close fa fa-times");
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
        //console.log(text==" Profile");
       // alert(e.srcElement.className);
       if(text == " Profile"){
        // profile = document.getElementsByClassName("profile");
      //  alert(profile[0]);
      skills[0].style.display = "none";
      myLinks[0].style.display = "none";
        if (profile[0].style.display === "none") {
            profile[0].style.display = "block";
          } else {
            profile[0].style.display = "none";
          }
       }else if(text == " Skills"){
        //var skills = document.getElementsByClassName("skills");
        //alert(profile[0]);
        profile[0].style.display = "none";
        myLinks[0].style.display = "none";
        if (skills[0].style.display === "none") {
            skills[0].style.display = "block";
          } else {
            skills[0].style.display = "none";
          }
       }else if(text == " My Links"){
        //var myLinks = document.getElementsByClassName("myLinks");
        //alert(profile[0]);
        profile[0].style.display = "none";
        skills[0].style.display = "none";
        if (myLinks[0].style.display === "none") {
            myLinks[0].style.display = "block";
          } else {
            myLinks[0].style.display = "none";
          }
        }
        if(e.srcElement.className ==="btn-close" || e.srcElement.className ==="fa fa-times"){
            list[0].style.display = "none";
            list[1].style.display = "none";
            list[2].style.display = "none";
        }
}, false);

/*
 profile.onclick = displayBlock;

function displayBlock(){
    var profile = document.getElementById("pro");
alert(profile);

    if (profile.style.display === "none") {
        profile.style.display = "block";
      } else {
        profile.style.display = "none";
      }
    
}*/

$(function(){
    $('.list li:first-child').click(function(){
    //     console.log("tog");
    //      window.setTimeout(function() {
    //    $('.profile').slideToggle();
    //         }, 300);
    });
    $('.list li:nth-child(2)').click(function(){
         window.setTimeout(function(){
        $('.trivia').slideToggle();
                },300);
    });
    $('.list li:nth-child(3)').click(function(){
         window.setTimeout(function(){
        $('.movies').slideToggle(); 
                },300);
    });
    $('.list li:nth-child(4)').click(function(){
         window.setTimeout(function(){
        $('.awards').slideToggle();
            }, 300);
    });
    $('.list li:nth-child(5)').click(function(){
         window.setTimeout(function(){
        $('.quotes').slideToggle();
            }, 300);
    });
    $('.btn-close').click(function(){
        $('.list-content').hide(300);
    });
});