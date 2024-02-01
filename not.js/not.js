console.log("hello")
// tag list 

var br = '<br>',
h2 = '<h2>'
h2c = '</h2>'
img = '<img width="50%;" src="/logo/logo.png" alt="not png"/>',
text = '  You have entered without any user ID. So you need to search a your user ID.',
search = `

<form action="/user/" method="get">
  <label for="user"></label>
  <div class="rx-rote">
    
  <input placeholder="Search Your GitHub Username" type="search" name="user" id="user" value=""  required/><button type="submit" class="uui"><i class="bi bi-search"></i></button>
    </div>

</form>

`
,
cn = '<center>',
cnc= '</center>'







var body = document.getElementById("error");
metrr();
function metrr(){
 
  var show = cn+br+br+br+br+h2+text+h2c+img+search+cnc; 
  body.innerHTML=show; 

}




