//dec;earing html elements

const imgDiv = document.querySelector('.profile-pic');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

//if user hovers on profile pic

imgDiv.addEventListener('mouseenter', function()
{
    uploadBtn.style.display = "block"
});

//if user hovers out from profile pic

imgDiv.addEventListener('mouseleave', function()
{
    uploadBtn.style.display = "none";
});

//Functionality when user chooses image to upload

//When we choose a photo to upload

file.addEventListener('change', function(){
    //this refers to file
    const choosedFile = this.files[0];

    if(choosedFile) {

        const reader = new FileReader(); //FileReader is a predefined function of JS

        reader.addEventListener('load', function
        (){
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
});  