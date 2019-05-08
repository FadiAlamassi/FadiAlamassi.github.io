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