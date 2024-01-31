console.log("hello Word!");

async function displayData() {
    try {
        const response = await fetch("/php/userdata.json");
        const data = await response.json();
        const dataContainer = document.getElementById('data-container');

        // Loop through the data and display it
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
  
   
<div class="box-profile">
  <img class="profile-img" src="https://github.com/${item.username}.png" alt="Developer Find Powered by Nahid HK"/><br/>
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
    
</div>
<br>
<center>
  
<a class="abtn" href="${item.website}">View Profile</a>
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
  window.location.href="aduser"
}

