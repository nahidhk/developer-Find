console.log("hello Word!");

async function displayData() {
    try {
        const response = await fetch("/user/userdata.json");
        const data = await response.json();
        const dataContainer = document.getElementById('data-container');

        // Loop through the data and display it
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
  
   
<div class="box-profile animate__animated animate__flipInX ">
  <img class="profile-img animate__animated animate__zoomInDown" src="https://github.com/${item.username}.png" alt="Developer Find Powered by Nahid HK"/><br/>
  <span class="title">${item.name}</span><br>
  <span><i class="bi bi-geo-alt-fill"></i>${item.address}</span>
  <br>
  <span class="skill">${item.skill} </span>
  <center>
    
  <p class="about">${item.about}</p>
    </center>
    
<div class="social-box">
  <a class="icon" href="${item.linkedin}"><i class="bi bi-linkedin"></i></a>
  <a class="icon" href="${item.x}"><i class="bi bi-twitter-x"></i></a>
  
    <a class="icon" href="https://github.com/${item.username}">
      <i class="bi bi-github"></i>
    </a>

    <a class="icon" href="${item.facebook}">
    <i class="bi bi-facebook"></i>
    </a>
    
      <a class="icon" href="${item.website}">
   <i class="bi bi-globe-americas"></i>
    </a>
    
</div>
<br>
<center>
  
<a class="abtn" href="/user/?user=${item.username}">View Profile</a>
</center>

</div>   
</div>
  
  
    
            
            
            
            `;
            dataContainer.appendChild(itemElement);
        });
    } catch (error) {
        console.error('Error fetching or displaying data:', error);
    }
}

// Call the displayData function to load and display JSON data
displayData();
//
//

function windocall(){
  window.location.href="aduser";
}










document.write(`
<div style="position:fixed;z-index:100;bottom:20px;right:20px;height:66px;width:70px;background-color:#232323;border-radius:10px;">
  
  <a href="https://github.com/nahidhk/developer-Find">
    
   <i style="font-size: 50px;color: white;padding: 10px;" class="bi bi-github"></i> 
  </a>
  
  </div>
`);











