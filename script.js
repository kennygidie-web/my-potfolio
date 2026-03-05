        const aboutbutton=document.getElementById("aboutBTN");
       aboutbutton.addEventListener("click" ,function()
        {
            window.location.href="About.html";
        });

                const skillbutton=document.getElementById("skillBTN");
        skillbutton.addEventListener("click" ,function()
        {
            window.location.href="skills.html";
        });

                const academicbutton=document.getElementById("academicBTN");
       academicbutton.addEventListener("click" ,function()
        {
            window.location.href="academic.html";
        });
        const button=document.getElementById("menuBTN");
        const menu=document.getElementById("menu");
        button.addEventListener("click",function(){
            if(menu.style.display==="block"){ menu.style.display="none"}
            else{menu.style.display="block"}
        });