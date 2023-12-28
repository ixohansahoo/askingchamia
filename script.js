imageChangedByClick=false;
function changeImage(newSrc) {
    document.getElementById('pageTitle').textContent = 'I love you too achini' ;
    document.getElementById('mainImage').src = newSrc;
    imageChangedByClick = true;
    
}

function ye() {
    // Change the image source on hover
    if (!imageChangedByClick) {
        document.getElementById('mainImage').src = 'ye.gif';
        document.getElementById('pageTitle').textContent = "Haire 👉👈" ;
    }
    
}

function resetImage() {
    // Reset the image source when the mouse leaves
    if (!imageChangedByClick) {
        document.getElementById('mainImage').src = 'ask.gif';
        document.getElementById('pageTitle').textContent = "Chamia will you be my forever?" ;
    }
    imageChangedByClick = false;
}

function showAlternateImage() {
    // Change the image to the alternate one
    document.getElementById('pageTitle').textContent = "Adaa bhali chechi debi" ;
    
    document.getElementById('mainImage').src = 'no.gif';
    document.getElementById('mainImage').style.height = '400px';
    document.getElementById('mainImage').style.width = '400px';
    change()

    // Set a timeout to revert to the initial image after 2 seconds (2000 milliseconds)
    
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
async function change() {
    await sleep(1500);
   document.getElementById('mainImage').src = 'ask.gif';
   document.getElementById('pageTitle').textContent = "Chamia will you be my forever?" ;
    
}





document.addEventListener('DOMContentLoaded', function() {
    $(function(){
        $(".tricky").on({
            mouseover:function(){
                $(this).css({
                    left:(Math.random()*90)+"%",
                    top:(Math.random()*90)+"%",
                });
            }
        });
        $(".btn-wrap").hover(function() {
            $(this).toggleClass('active');
        });
    });

    $('.tricky').bind('touchstart', function(){
        $(this).css({
            left:(Math.random()*90)+"%",
            top:(Math.random()*90)+"%"
        });
    });
});

function hideButtons() {
    // Hide the Yes and No buttons after clicking Yes
    document.getElementById('yesButton').style.display = 'none';
    document.getElementById('NoButton').style.display = 'none';
}
