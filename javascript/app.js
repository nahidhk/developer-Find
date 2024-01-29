console.log("hello Word!");

async function displayData() {
    try {
        const response = await fetch("data/userdata.json");
        const data = await response.json();
        const dataContainer = document.getElementById('data-container');

        // Loop through the data and display it
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
  <h3> ${item.pin}</h3>         <p>Student Name: ${item.student_name}</p>
                <p>Father's Name: ${item.father_name}</p>
                <p>Mother's Name: ${item.mother_name}</p>
                <p>NID Number: ${item.nid_no}</p>
                <p>Birth Date: ${item.birth_date}</p>
                <p>Guardian Name: ${item.ovivok_name}</p>
                <p>Guardian Mobile: ${item.mobile}</p>
                <p>Guardian Email: ${item.email}</p>
    <p>            
       জাতীয়তা: ${item.nationality}
       </p>
       <p>বিভাগ :${item.division}
       </p>
       <p>জেলা :${item.district}
       </p>
    <p>উপজেলা :${item.upazila}
    </p>  
    <p> থানা:${item.thana}
    </p>
    <p> গ্রাম: ${item.gram}
    
    </p>
    <p>বিষয়ে: ${item.eco1}
    </p>
    <p>pin ${item.pin}
    </p>
       <hr>
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
