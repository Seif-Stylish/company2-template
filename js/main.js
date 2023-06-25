var sliderImages = [
    "images/slider/01.jpg",
    "images/slider/02.jpg",
    "images/slider/03.jpg",
    "images/slider/10.jpg"
]
var globalIndex = 0;
var globalPortfolioIndex = 0;
document.querySelector(".nextSlider").addEventListener("click" , getNextImageSlider);
function getNextImageSlider()
{
    globalIndex++;
    if(globalIndex == sliderImages.length)
    {
        globalIndex = 0;
    }
    $(".section1").fadeOut(0);
    $(".section1").css("background-image" , `url(${sliderImages[globalIndex]})`);
    $(".section1").fadeIn(200);
}
document.querySelector(".previousSlider").addEventListener("click" , getPreviousSlider);
function getPreviousSlider()
{
    globalIndex--;
    if(globalIndex < 0)
    {
        globalIndex = sliderImages.length - 1;
    }
    $(".section1").fadeOut(0);
    $(".section1").css("background-image" , `url(${sliderImages[globalIndex]})`);
    $(".section1").fadeIn(200);
}
var featuresList = Array.from(document.querySelectorAll(".featuresList li"));
var featureTypeDiv = Array.from(document.querySelectorAll(".featureTypeDiv"));
for(var i = 0; i < featureTypeDiv.length; i++)
{
    featureTypeDiv[i].style.display = "none";
}
featureTypeDiv[0].style.display = "block";
for(var i = 0; i < featuresList.length; i++)
{
    $(featuresList[i]).addClass("currentClass");
}
$(featuresList[0]).addClass("newClass");
for(var i = 0; i < featuresList.length; i++)
{
    featuresList[i].addEventListener("click" , changeFeature);
}
function changeFeature()
{
    var index = featuresList.indexOf(this);
    for(var i = 0; i < featuresList.length; i++)
    {
        if($(featuresList[i]).hasClass("newClass"));
        {
            $(featuresList[i]).removeClass("newClass");
            $(featuresList[i]).addClass("currentClass");
        }
        if(featureTypeDiv[i].style.display != "none" && i != index)
        {
            featureTypeDiv[i].style.display = "none";
        }
    }
    $(featuresList[index]).removeClass("currentClass");
    $(featuresList[index]).addClass("newClass");
    $(featureTypeDiv[index]).fadeIn(300);
}
var portfolioRows = Array.from(document.querySelectorAll(".portfolioRows"));
for(var i = 0; i < portfolioRows.length; i++)
{
    portfolioRows[i].style.display = "none";
}
$(portfolioRows[0]).fadeIn(0);
var portfolioListLi = Array.from(document.querySelectorAll(".portfolioList li"));
portfolioListLi[0].style.backgroundColor = "#e73131";
portfolioListLi[0].style.color = "white";
for(var i = 0; i < portfolioListLi.length; i++)
{
    portfolioListLi[i].addEventListener("click" , showPortfolioContent);
}
function showPortfolioContent()
{
    var index = portfolioListLi.indexOf(this);
    for(var i = 0; i < portfolioListLi.length; i++)
    {
        if(portfolioRows[i].style.display != "none" && i != index)
        {
            portfolioRows[i].style.display = "none";
        }
        if(portfolioListLi[i].style.backgroundColor != "#e5e5e5")
        {
            portfolioListLi[i].style.backgroundColor = "#e5e5e5";
        }
        if(portfolioListLi[i].style.color != "#64686d")
        {
            portfolioListLi[i].style.color = "#64686d";
        }
    }
    $(portfolioRows[index]).fadeIn(300);
    portfolioListLi[index].style.backgroundColor = "#e73131";
    portfolioListLi[index].style.color = "white";
}
var portfolioImage = Array.from(document.querySelectorAll(".portfolioImage"));
for(var i = 0; i < portfolioImage.length; i++)
{
    $(portfolioImage[i]).addClass("w-100");
}
var portfolioDivIcon = Array.from(document.querySelectorAll(".portfolioDiv i"));
for(var i = 0; i < portfolioDivIcon.length; i++)
{
    portfolioDivIcon[i].addEventListener("click" , showPortfolioSlider);
    portfolioDivIcon[i].style.cursor = "pointer";
}
function showPortfolioSlider()
{
    var index = portfolioDivIcon.indexOf(this);
    $(".sliderLayerGray img").attr("src" , $(portfolioImage[index]).attr("src"));
    $(".sliderLayerGray").fadeIn(200);
    $(".sliderLayerGray").css("display" , "flex");
    globalPortfolioIndex = index;
}
$(".sliderLayerGrayChild").click(function()
{
    $(".sliderLayerGray").fadeOut(200);
})
document.querySelector(".nextPhoto").addEventListener("click" , getNexPortfolioPhoto);
function getNexPortfolioPhoto()
{
    globalPortfolioIndex++;
    if(globalPortfolioIndex == portfolioImage.length)
    {
        globalPortfolioIndex = 0;
    }
    $(".sliderLayerGray img").fadeOut(0);
    $(".sliderLayerGray img").attr("src" , $(portfolioImage[globalPortfolioIndex]).attr("src"));
    $(".sliderLayerGray img").fadeIn(200);
}
document.querySelector(".previousPhoto").addEventListener("click" , getPreviousPortfolioPhoto);
function getPreviousPortfolioPhoto()
{
    globalPortfolioIndex--;
    if(globalPortfolioIndex < 0)
    {
        globalPortfolioIndex = portfolioImage.length - 1;
    }
    $(".sliderLayerGray img").fadeOut(0);
    $(".sliderLayerGray img").attr("src" , $(portfolioImage[globalPortfolioIndex]).attr("src"));
    $(".sliderLayerGray img").fadeIn(200);
}
document.addEventListener("keydown" , keyboardSlide)
function keyboardSlide(e)
{
    if(e.keyCode == 39)
    {
        getNexPortfolioPhoto();
    }
    else if(e.keyCode == 37)
    {
        getPreviousPortfolioPhoto();
    }
}
var testimonialDiv = Array.from(document.querySelectorAll(".testimonialDiv"));
var testimonialSliderDiv = Array.from(document.querySelectorAll(".testimonialSliderDiv"));
for(var i = 0; i < testimonialDiv.length; i++)
{
    testimonialDiv[i].style.display = "none";
}
$(testimonialDiv[0]).fadeIn(0);
$(testimonialSliderDiv[0]).css("background-color" , "red");
for(var i = 0; i < testimonialSliderDiv.length; i++)
{
    testimonialSliderDiv[i].addEventListener("click" , displayTestimonial);
}
function displayTestimonial()
{
    var index = testimonialSliderDiv.indexOf(this);
    for(var i = 0; i < testimonialSliderDiv.length; i++)
    {
        if(testimonialSliderDiv[i].style.backgroundColor != "#e73131")
        {
            testimonialSliderDiv[i].style.backgroundColor = "#e73131";
        }
        if(testimonialDiv[i].style.display != "none" && i != index)
        {
            testimonialDiv[i].style.display = "none";
        }
    }
    testimonialSliderDiv[index].style.backgroundColor = "red";
    $(testimonialDiv[index]).fadeIn(300);
}
$(window).scroll(function()
{
    if($(window).scrollTop() >= $(".section2").offset().top - 5)
    {
        $(".cosmixNavBar").addClass("navBarBackgroundColor");
    }
    else
    {
        $(".cosmixNavBar").removeClass("navBarBackgroundColor");
    }
})
$(".nav-link").click(function()
{
    var href = $(this).attr("href");
    var topScroll = $(href).offset().top;
    $("html , body").animate({scrollTop : topScroll} , 1000);
})
var funFact = Array.from(document.querySelectorAll(".funFact"));
for(var i = 0; i < funFact.length; i++)
{
    funFact[i].style.borderRight = "1px solid #ddd";
}
funFact[funFact.length - 1].style.borderRight = "none";
var nameRegex = /^[a-zA-Z]{1,}.{0,}$/;
var emailRegex = /^[A-Za-z]{5,}(.+){0,}@(gmail|hotmail|outlook|yahoo).com$/;
var subjectRegex = /^.{8,}$/;
var messageRegex = /^.+$/;
var regexArray = [nameRegex , emailRegex , subjectRegex];
var inputDiv = Array.from(document.querySelectorAll(".inputDiv input"));
var warningMessage = Array.from(document.querySelectorAll(".warningMessage"));
var sendNowButton = document.querySelector(".sendNowButton");
sendNowButton.addEventListener("click" , sendNow);
function sendNow()
{
    displayError(inputDiv , regexArray , warningMessage);
    if(messageRegex.test($(".inputDiv textarea").val())== false)
    {
        $(warningMessage[warningMessage.length - 1]).slideDown(300);
    }
    else
    {
        $(warningMessage[warningMessage.length - 1]).slideUp(300);
    }
}
function displayError(inputs , regex , paragraph)
{
    for(var i = 0; i < inputs.length; i++)
    {
        if(regex[i].test(inputs[i].value) == false)
        {
            $(paragraph[i]).slideDown(300);         
        }
        else
        {
            $(paragraph[i]).slideUp(300);
        }
    }
}