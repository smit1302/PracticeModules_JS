//Cookies
console.log(navigator.cookieEnabled);
//Create a new Cookie
document.cookie="firstName=Smit; expires=Sun,1 January 2030 12:00:00 UTC; path=/";
document.cookie="LastName=SmitChoksi; expires=Tue,25 December 2023 10:46:00 UTC; path=/";
//console.log(document.cookie); 
setCookie("Darshan","darshan@gmail.com",365);
deleteCookie("Darshan");
console.log(document.cookie);
function setCookie(name,value,daystoLive){
    const date=new Date();
    date.setTime(date.getTime()+daystoLive*24*60*60);
    let expires="expires"+date.toUTCString();
    document.cookie=`${name}=${value}; $expires}; path=/`;
}


function deleteCookie(name){
    setCookie(name,null,null);
}