const button=document.querySelector('.button i');
const navbar=document.querySelector('ul');

button.addEventListener('click',()=>{
    button.classList.toggle('fa-xmark');
    navbar.classList.toggle('navbar');
});



let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.row .col-sm-3 .img').forEach(img =>{
    img.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = img.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

let video = document.getElementById("myVideo");
let button1 = document.getElementById("btnn"); 
button1.addEventListener('click',()=>{
if (video.paused){
video.play();
button1.innerHTML = '<i class="fa-solid fa-pause"></i>';
}
else
{
video.pause();
button1.innerHTML = '<i class="fa-solid fa-play"></i>';
}      });

const form = document.getElementById('form');
const Name = document.getElementById('Name');
const Email = document.getElementById('Email');




form.addEventListener('submit',e=>{
    e.preventDefault();
    checkvalid();
});
function checkvalid(){
    const NameValue = Name.value.trim();
    const EmailValue = Email.value.trim();
 
   

    var a="chandru";
    if(NameValue  !== a){
        setError(username,'Enter correct Login Your Name');
        username.style.borderColor='red';
        alert('Enter your Correct Name');
        return false;

    }
    else {
        setSuccess(username);
        username.style.borderColor='green';
    }
    var b="chandru12@gmail.com";
    if(EmailValue !== b){
        setError(Email,' Enter correct Login Your Email');
        Email.style.borderColor='red'
        alert('Enter your Correct Email');
        return false;
    }
    
      else {
        setSuccess(email);
        Email.style.borderColor='green';
      }
 
    }