function getXmlHttpRequest(){if (window.XMLHttpRequest){try{return new XMLHttpRequest();}catch (e){}}else if (window.ActiveXObject){try{return new ActiveXObject('Msxml2.XMLHTTP');}catch (e){}try{return new ActiveXObject('Microsoft.XMLHTTP');}catch (e){}}return null;}
var statusMenu='';
function whatkindofMenu(){var screenWidth=screen.width;var screenHeight=screen.height;if(screenWidth > '568')statusMenu="Big";else statusMenu="small";return statusMenu;}
function hiddenFixedMenu(){var Bigmenu=document.getElementById("wrappMenu");var smallmenu=document.getElementById("HamburgerMenu");var menu=whatkindofMenu();if(menu ="Big")Bigmenu.style.display="none";if(menu ="small")smallmenu.style.display="none";}
function visibleFixedMenu(){if(statusMenu =="Big")document.getElementById("wrappMenu").style.display="block";else document.getElementById("HamburgerMenu").style.display="block";}
//Отправка Заказа и звонков из разных мест
var typeOrder='';
//Открывае модальное окно
function openModalBoxOrder(order){var shadow=document.getElementById('Ordershadow');typeOrder=order;shadow.style.display='block';document.getElementById('OrderBoxCeni').style.display='block';shadow.onclick=closeModalBoxOrder;document.getElementById("closeModal").onclick=closeModalBoxOrder;hiddenFixedMenu();}
//Посылаем на сервер запрос если все ок то открываем openThanksforOrder()
function submitOrder(){var username=document.getElementById('usernameOrder');var phone=document.getElementById('phone');var cityOrder=document.getElementById('cityOrder');if(phone.value==''){phone.placeholder="Введите Ваш номер телефона!";return;}var searchString="usernameOrder="+username.value+"&"+"cityOrder="+cityOrder.value+"&"+"phone="+phone.value+"&"+"typeOrder="+typeOrder;var req = getXmlHttpRequest();req.open("POST","action.php",true);req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");req.setRequestHeader("Content-Length",searchString.length);req.send(searchString);req.onreadystatechange = function(){if (req.readyState == 4){if (req.status == 200){username.value="";phone.value="";cityOrder.value="";username.placeholder="Ваше имя";cityOrder.placeholder="Ваш город";phone.placeholder="Ваш телефон";openThanksforOrder();}}}}
//Закрываем модальное окно и появляется меню
function closeModalBoxOrder(){document.getElementById('Ordershadow').style.display='';document.getElementById('OrderBoxCeni').style.display='';visibleFixedMenu();}
function openThanksforOrder(){closeModalBoxOrder();var shadow=document.getElementById('ShadowThanksOrder');document.getElementById('ContThanksOrder').style.display='block';document.getElementById('closeImg').onclick=closeThanksforOrder;shadow.style.display='block';shadow.onclick=closeThanksforOrder;hiddenFixedMenu();}
function closeThanksforOrder(){document.getElementById('ContThanksOrder').style.display='';visibleFixedMenu();}
function openModalBoxPodrobno_Block_land_1(){var shadow=document.getElementById('Podrobno_Block_land_1_Schadow');shadow.style.display='block';document.getElementById('Wrap_Podrobno_Block_land_1').style.display='block';shadow.onclick=closeModalBoxPodrobno_Block_land_1;document.getElementById("Block_land_1_Close").onclick=closeModalBoxPodrobno_Block_land_1;hiddenFixedMenu();}
function closeModalBoxPodrobno_Block_land_1(){document.getElementById('Podrobno_Block_land_1_Schadow').style.display='';document.getElementById('Wrap_Podrobno_Block_land_1').style.display='';visibleFixedMenu();}
var count=1;var id_imgBox="imgBox";var VC="VideoComent";var id_video="vid";
function getImgBlock(status){if(status == 'true') nextImgBlock();else  prevImgBlock();}	
function hideImgBox(){var BoxNow=id_imgBox+count;var imgBoxNow=document.getElementById(BoxNow);imgBoxNow.style.display="none";closeVideo();}
function displayImgBox(){var BoxNext=id_imgBox+count;var imgBoxNext=document.getElementById(BoxNext);imgBoxNext.style.display="block";openVideo();}
function nextImgBlock(){hideImgBox();if(count >= 3) count=0;count++;displayImgBox();}
function prevImgBlock(){hideImgBox();if(count <= 1) count=4;count--;displayImgBox();}
function openVideo(){var vidloc=id_video+count;var hrefVid=document.getElementById(vidloc);
switch(vidloc){case 'vid1': hrefVid.setAttribute('src',"https://www.youtube.com/embed/3cdDGjEx7Ys?rel=0");break;
case 'vid2': hrefVid.setAttribute('src',"https://www.youtube.com/embed/g3Tbi-4Gmno?rel=0");break;
case 'vid3': hrefVid.setAttribute('src',"https://www.youtube.com/embed/JK2_N1OkPIg?rel=0");break;
default: hrefVid.setAttribute('src',"https://www.youtube.com/embed/3cdDGjEx7Ys?rel=0");}}
function closeVideo(){var vidloc=id_video+count;document.getElementById(vidloc).setAttribute('src','');}
var index=1;var id="otzivBlock";
function getOtziv(status){if(status == 'true')nextOtzive();else prevOtzive();}
function hide(){var idNow=id+index;document.getElementById(idNow).style.display="none";}
function display(){var idNext=id+index;var otzNext=document.getElementById(idNext);otzNext.style.display="block";}
function nextOtzive(){hide();if(index >= 3) index=0;index++;display();}	
function prevOtzive(){hide();if(index <= 1)	index=4;index--;display();}
function addOtzive(){document.getElementById('OtzBox').style.display='block';document.getElementById("closeAddOtzive").onclick=closeaddOtzive;var shadow=document.getElementById('Otzshadow');shadow.style.display='block';shadow.onclick=closeaddOtzive;hiddenFixedMenu();}
function closeaddOtzive(){document.getElementById('Otzshadow').style.display='';document.getElementById('OtzBox').style.display='';visibleFixedMenu();}
function openThanks(){closeaddOtzive();var shadow=document.getElementById('thxShadow');document.getElementById('wrappthxBox').style.display='block';document.getElementById('closeth').onclick=closeThanks;shadow.style.display='block';shadow.onclick=closeThanks;hiddenFixedMenu();}
function closeThanks(){document.getElementById('wrappthxBox').style.display='';visibleFixedMenu();}
function submitOtzive(woher){var woher=woher;var username=document.getElementById('username');var city=document.getElementById('city');var textOtz=document.getElementById('textOtz');if(textOtz.value==''){textOtz.placeholder="Вы не оставили отзыв!";return;}if(username.value==''){username.placeholder="Введите Ваше имя!";return;}var searchString="username="+username.value+"&"+"city="+city.value+"&"+"textOtz="+textOtz.value+"&"+"woher="+woher;var req = getXmlHttpRequest();req.open("POST", "action.php", true);req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");req.setRequestHeader("Content-Length", searchString.length);req.send(searchString);req.onreadystatechange = function(){if (req.readyState == 4){if (req.status == 200){username.value="";city.value="";textOtz.value="";username.placeholder="Ваше имя";textOtz.placeholder="Ваш отзыв";openThanks();}}}}	
function onPhotoClick(img){var photo=document.getElementById('BigPhoto');var shadow=document.getElementById('Sertshadow');document.getElementById('SertContainerImg').style.display='block';shadow.style.display='block';var bigFotoUrl=img.src.slice(0,-5);bigFotoUrl+="2.jpg";photo.style.background='url("'+bigFotoUrl+'") no-repeat';photo.style.backgroundSize='cover';photo.onclick=closePhoto;shadow.onclick=closePhoto;hiddenFixedMenu();}
function closePhoto(){document.getElementById('SertContainerImg').style.display='';visibleFixedMenu();}