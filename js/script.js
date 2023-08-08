const countriesElem=document.querySelector(".countries");
const dropDown=document.querySelector(".dropDown")
const dropElem=document.querySelector(".drop")
const region=document.querySelectorAll(".region")
const search=document.querySelector(".search")
const toggle=document.querySelector(".toggle")
const moon=document.querySelector(".moon")
async function getCountry(){
         const url=await fetch("https://restcountries.com/v3.1/all");
         const res=await url.json();
         console.log(res);
         res.forEach(element=>{
          displayCountries(element)

});
}
getCountry()

function displayCountries(countries){
const country=document.createElement("div")
country.classList.add("country")
country.innerHTML=` 
    <div class="country-img">
    <img src="${countries.flags.png}" alt="">     
    </div>
    <div class="country-info">
      <h5 class="countryName">${countries.name.common}</h5>
      <p><strong>population</strong> ${countries.population}</p> 
      <p class="regionName"><strong>Region</strong> ${countries.region}</p>  
      <p><strong>Capital</strong> ${countries.capital[0]}</p>
    </div>`;
countriesElem.appendChild(country)
country.addEventListener("click",()=>{
showCountryDetail(countries)
})
}


dropDown.addEventListener("click",()=>{
dropElem.classList.toggle("showDropDown")
})
const regionName=document.getElementsByClassName("regionName")

const countryName=document.getElementsByClassName("countryName")

region.forEach(element =>{
  element.addEventListener("click",()=>{
    console.log(element);
  Array.from(regionName).forEach(elem=>{
    console.log(elem.innerText);
    if(elem.innerText.includes(element.innerText)|| element.innerText=="All"){
      elem.parentElement.parentElement.style.display="grid"
    }else{
      elem.parentElement.parentElement.style.display="none"
    }
    });
  })
  });

search.addEventListener("input",()=>{
  console.log(search.value.toLowerCase());
  Array.from(countryName).forEach(elem=>{
    console.log(elem)
    if(elem.innerText.toLowerCase().includes(search.value.toLowerCase())){
      elem.parentElement.parentElement.style.display="grid"
    }else{
      elem.parentElement.parentElement.style.display="none"
    }
    }); 
})
toggle.addEventListener("click",()=>{
 document.body.classList.toggle("dark") 
 moon.classList.toggle("fas")
})

const countryModal=document.querySelector(".countryModal");
function showCountryDetail(countries){

  let keyOfLanguage = Object.keys(countries.languages)
  let language = countries.languages[keyOfLanguage[0]]


  countryModal.classList.toggle("show") 
  countryModal.innerHTML=`  <button class="back">Back</button>
  <div class="modal">
    <div class="leftModal">
      <img src="${countries.flags.png}" alt="">
    </div>
    <div class="rightModal">
     <h1>${countries.name.common}</h1> 
     <div class="modalinfo">
      <div class="innerLeft inner">
      
        <p><strong>Native Name:</strong> ${countries.nativeName}</p> 
        <p><strong>population:</strong> ${countries.population}</p>  
        <p><strong>region:</strong> ${countries.region}</p>
        <p><strong>subregion:</strong> ${countries.subregion}</p>
  
             </div>
  <div class="innerRight inner">
    <p><strong>capital:</strong> ${countries.capital}</p> 
        <p ><strong>Top Level Domain:</strong> ${countries.region}</p>  
        <p><strong>Currencies:</strong> ${countries.capital[0]}</p>
        <p><strong>Languages:</strong> ${language}</p>
    
  </div>
     </div>
    </div>
  </div>`

  const back=countryModal.querySelector(".back")
back.addEventListener("click",()=>{
countryModal.classList.toggle("show")
})
}
