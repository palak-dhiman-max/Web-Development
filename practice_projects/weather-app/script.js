const apikey ="7f420233afdf187aa71cd27075dc682b"
const api = "https://api.openweathermap.org/data/2.5/weather?units=metric"
  let toggle = document.querySelector(".weather");
async function check(city) {

    try{

    
    const response = await fetch(api + `&q=${city}`  +`&appid=${apikey}` );
    let content = await response.json();
   

     if(!response.ok){
        throw new Error("Invalid city name");
     }

    //  if(content.status == 404){
    //   document.querySelector(".error").style.display="block";
    //   toggle.style.display="none";
    //  }


    document.querySelector(".city").innerHTML=content.name;
    document.querySelector(".temp").innerHTML=Math.round(content.main.temp )+"°C";
     document.querySelector(".humidity").innerHTML=content.main.humidity +"%";
      document.querySelector(".wind").innerHTML=content.wind.speed +"km/h";
 

   
    toggle.style.display="flex";
         let image = document.querySelector(".cloud");
    if(content.weather[0].main=="Clouds"){
        image.src ="https://static.vecteezy.com/system/resources/previews/014/455/640/non_2x/illustration-creative-icon-3d-weather-forecast-sign-meteorological-sun-cloud-isolated-on-background-free-vector.jpg ";
    } 

    else if(content.weather[0].main=='Clear'){
        image.src="https://png.pngtree.com/png-clipart/20230813/original/pngtree-vector-illustration-of-weather-icon-sun-with-clear-sky-vector-picture-image_10530522.png";
    }

       else if(content.weather[0].main=="Rain"){
        image.src="https://previews.123rf.com/images/yupiramos/yupiramos1802/yupiramos180210193/95223360-weather-cloud-rainy-icon-vector-illustration-design.jpg";
    }
       else if(content.weather[0].main=="Drizzle"){
        image.src="https://cdn3d.iconscout.com/3d/premium/thumb/snowfall-3d-icon-png-download-5753016.png";
    }
       else if(content.weather[0].main=="Mist"){
        image.src="https://static.vecteezy.com/system/resources/thumbnails/071/484/946/small/misty-weather-3d-icon-png.png";
    }
    
      document.querySelector(".error").style.display="none";
            }

            catch(error){
                showError(error.message);
            }
        }
        
function showError(data){

      document.querySelector(".error").style.display="block";
      document.querySelector(".error").innerHTML=data;
      toggle.style.display="none";
}

let search = document.querySelector(".search-btn");
let search1 = document.querySelector(".search-box");
search.addEventListener('click',()=>{
     check(search1.value);

})