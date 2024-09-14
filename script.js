let Data = new XMLHttpRequest();
Data.addEventListener("load",value);
Data.open("GET","https://restcountries.com/v3.1/all");
Data.send();

function value() {
    let StoringData = JSON.parse(this.responseText);
   
// 1.Using Filter i Got The Asia Continents from the given api

    StoringData.filter((ele) => {
    if(ele.continents == "Asia") {
        console.log(ele);
    }
    })

// 2.Using The Filter i Got The population Less than 2 lak
   
StoringData.filter((Data) => {
    if(Data.population < 200000){
        console.log(Data.population);
    }
    })

// 3.Print the following details name.
   
    StoringData.forEach((elements) => {
        console.log(elements.name);
    })


// 3.2 Print the following details capital using forEach function ?

    StoringData.forEach((Datas) => {
    console.log("The Head Quaters Of:" +" "+ Datas.altSpellings[2] + " " +" Is " + Datas.capital);
    })
 
// 3.3 Print the following details flag using forEach function ?
   
    StoringData.forEach((element) => {
     console.log(element.flag)
    })
   
// 4.Print the total population of countries using reduce function ?

    let FinalData= StoringData
    .map((element) => {
      return element.population;
    })
    .reduce((accumulator, current) => accumulator += current);
     console.log(FinalData);

// 5.Print the country which uses US Dollars as currency
 
        let Datas=StoringData.filter((arr) => {
         if(arr.currencies!=undefined){
             return arr;
         }
       });
       Datas.forEach((rage)=>{
         if(rage.currencies.USD){
             console.log(rage.name.common)
         }
       })
   
}     