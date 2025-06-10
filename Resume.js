
   const allinput = document.querySelectorAll("input");
  document.getElementById("generate").addEventListener("click", () =>{
   
    const mydiv = document.querySelector(".resume");

    if (allinput && mydiv && allinput.length >= 20) {
      const value = allinput[0].value;
      localStorage.setItem("resume", value);
    
            mydiv.innerHTML=`
            <div class="section">
  <h1>${allinput[0].value}</h1>
  <p>Email: ${allinput[1].value} | Phone:${allinput[2].value} | Location: ${allinput[3].value}</p>
</div>
  <div class="section">
    <h2>Professional Summary</h2>
    <p>${allinput[4].value}</p>
  </div>

  <div class="section">
    <h2>Skills</h2>
    
      <p>${allinput[5].value}</p>
      <p>${allinput[6].value}</p>
      <p>${allinput[7].value}</p>
      <p>${allinput[8].value}</p>
    
  </div>

  <div class="section">
    <h2>Work Experience</h2>
    <h3>${allinput[9].value}</h3>
        <p>${allinput[10].value}</p>
        <p>${allinput[11].value}</p>
  </div>

  <div class="section">
    <h2>Education</h2>
    <p><strong>${allinput[12].value}</strong>  ${allinput[13].value}</p>
    <p><strong>${allinput[14].value}</strong>  ${allinput[15].value}</p>
  </div>

  <div class="section">
    <h2>Projects</h2>
    
      <p><strong>${allinput[16].value}</strong> ${allinput[17].value}</p>
      <p><strong>${allinput[18].value}</strong> ${allinput[19].value}</p>
    
  </div>
  
         `;
    }
    else {
      alert("Please fill all fields correctly.");
    }
  }
  );
