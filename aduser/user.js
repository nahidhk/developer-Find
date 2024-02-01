console.log("hello Word");
// GitHub user name 
var bbtn = document.getElementById('hava');

var mongo = document.getElementById("runio");

var montext = "<center><br><h1>You have a Joined!</h1></center>";


var username = document.getElementById("username");
var fullname = document.getElementById("fullname");
var address = document.getElementById("address");
var about = document.getElementById("about");
var skill = document.getElementById("skill");
var facebook = document.getElementById("facebook");
var twitter = document.getElementById("x");
var linkedin = document.getElementById("linkedin");
var web = document.getElementById("website");

function callmySteoge() {
  var value1 = username.value;
  var value2 = fullname.value;
  var value3 = address.value;
  var value4 = about.value;
  var value5 = skill.value;
  var value6 = facebook.value;
  var value7 = twitter.value;
  var value8 = linkedin.value;
  var value9 = web.value;
  /// set Have a Local store

  localStorage.setItem('username', value1);

  localStorage.setItem('name', value2);

  localStorage.setItem('address', value3);

  localStorage.setItem('about', value4);

  localStorage.setItem('skill', value5);

  localStorage.setItem('facebook', value6);

  localStorage.setItem('twitter', value7);

  localStorage.setItem('linkedin', value8);

  localStorage.setItem('website', value9);
  
 localStorage.setItem('btn','none');
 
 localStorage.setItem('lnc',montext);
 
bbtn.style.display="none";



}
duset();

function duset() {
  var data1 = localStorage.getItem('username');
  var data2 = localStorage.getItem('name');
  var data3 = localStorage.getItem('address');
  var data4 = localStorage.getItem('about');
  var data5 = localStorage.getItem('skill');
  var data6 = localStorage.getItem('facebook');
  var data7 = localStorage.getItem('twitter');
  var data8 = localStorage.getItem('linkedin');
  var data9 = localStorage.getItem('website');

var rebtn = localStorage.getItem('btn');

var mantx = localStorage.getItem('lnc');
// data updone 



username.value=data1;
fullname.value=data2;
address.value=data3;
about.value=data4;
skill.value=data5;
facebook.value=data6;
twitter.value=data7;
linkedin.value=data8;
web.value=data9;
bbtn.style.display=rebtn;
mongo.innerHTML=mantx;



}






