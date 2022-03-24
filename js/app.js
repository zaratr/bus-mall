'use strict'
//DOM References
let VOTINGROUNDS= 25;
let tempArr = []; 
//DOM ref
  let imgContainer = document.getElementById('shopImages');
  let resultsBtn = document.getElementById('view-results-btn');
  let resultsList = document.getElementById('display-results-list');
  let chartElem = document.getElementById('chart').getContext('2d');


//classes

class store 
{
    clientName;//name of the product
    filePath;//string with the file path of url
    imgShownCounter;//has the times image shown
    image;
    clicks;
    constructor() 
    {
        this.clientName = "";//store name set to zero
        this.filePath = "";//use this with random
        this.image= "";//image with jpg tied to the name
        this.imgShownCounter = 0;//counter to count shown
        this.clicks=0;//clicks random from user
    }
    random() {return this.random = Math.floor(Math.random() * (65 - 23) + 23);}
}

class store1 extends store 
{
    constructor(clientName, clientFilePath) 
    {
        super();//inherits
        //asserts that clientName, clientFilepath
        //this.imgShownCounter = 0; by inheritance
        //this.clicks is set to 0
        this.clientName= clientName;
        this.filePath= clientFilePath;
        this.image=`img/${this.clientName}.${this.filePath}`;
    }
}

class store2 extends store
{
    constructor(toCpyObj)
    {
      super();
      try
      {
        this.clientName= toCpyObj.clientName;
        this.filePath= toCpyObj.filePath;
        this.imgShownCounter= toCpyObj.imgShownCounter;
        this.image=`img/${this.clientName}.${this.filePath}`;
        this.clicks=toCpyObj.clicks;
      }
      catch(exception)
      {
        console.log("object had incorrect values. please check constructor")
      }
      return;
    }
}

//assign storeArr with constructors
//global
let storeArr = [
  new store1('bag'      , 'jpg'),
  new store1('banana'   , 'jpg'),
  new store1('bathroom' , 'jpg'),
  new store1('boots'    , 'jpg'),
  new store1('breakfast', 'jpg'),
  new store1('bubblegum', 'jpg'),
  new store1('chair'    , 'jpg'),
  new store1('cthulhu'  , 'jpg'),
  new store1('dog-duck' , 'jpg'),
  new store1('dragon'   , 'jpg'),
  new store1('pen'      , 'jpg'),
  new store1('pet-sweep', 'jpg'),
  new store1('scissors' , 'jpg'),
  new store1('shark'    , 'jpg'),
  new store1('sweep'    , 'png'),
  new store1('tauntaun' ,'jpg'),
  new store1('unicorn'  , 'jpg'),
  new store1('water-can', 'jpg'),
  new store1('wine-glass', 'jpg')
  ];
  
 
//Functions objects

function charter()
{
  let prodName = [];
  let prodClicks = [];
  let prodViews = [];

  for(let i = 0; i < storeArr.length; ++i)
  {
    prodName.push(storeArr[i].clientName);
    prodClicks.push(storeArr[i].clicks);
    prodName.push(storeArr[i].imgShownCounter);
  }

  let literalChart = {
    type: 'bar',
    data: {
      labels: prodName,
      datasets: [{
        label: '# of Votes',
        data: prodClicks,
        backgroundColor: [
          'yellow'
        ],
        borderColor: [
          'black'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: prodViews,
        backgroundColor: [
          'darkgrey'
        ],
        borderColor: [
          'black'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y:{
          beginAtZero: true
        }
      },
    }
  };
  new Chart(chartElem, literalChart);//using another script library
}





function getRandom(len){ return Math.floor(Math.random() * len);}
function main()//works similar to main in other programming languages. for simplicity all work will be here.
{
  /*
    local declarations
  */
  let imgOne= document.getElementById('image-one');
  let imgTwo= document.getElementById('image-two');
  let imgThree= document.getElementById('image-three');
  let imContainer = [];//local array to hold temp amount of images
  let rando = 0;
  let len = storeArr.length;
    //function calling
  while(tempArr.length < 6)
  {
    rando = getRandom(len);
    if(!tempArr.includes(rando))
    {
      tempArr.push(rando);
    }
  }
  if(tempArr.length === 6)
  {
    tempArr.splice(0, 3)

  }
   let index1 = tempArr[0] ;
   let index2 = tempArr[1] ;
   let index3 = tempArr[2] ;

    imgOne.src= storeArr[index1].image;
    imgOne.alt= storeArr[index1].clientName;
    storeArr[index1].imgShownCounter++;

    imgTwo.src= storeArr[index2].image;
    imgTwo.alt= storeArr[index2].clientName;
    storeArr[index2].imgShownCounter++;

    imgThree.src= storeArr[index3].image;
    imgThree.alt= storeArr[index3].clientName;
    storeArr[index3].imgShownCounter++;
  
    return 0;
}

main();
//* event handles */
function handleClick(event)
{
  let imgClicked = event.target.alt;

  for(let i = 0; i < storeArr.length; ++i)
  {
    if(imgClicked === storeArr[i].clientName) 
    {
      storeArr[i].clicks++;
    }
  }

    --VOTINGROUNDS;
    if(VOTINGROUNDS === 0)
    {
      imgContainer.removeEventListener('click', handleClick);
      return;
    }
    main();
}

/*
function handleShowResult()
{
  if(VOTINGROUNDS !== 0)
  {
    return;
  }
  for(let i = 0; i < storeArr.length; i++)
  {
    let li = document.createElement('li');
    li.textContent = `${storeArr[i].clientName} was viewed ${storeArr[i].imgShownCounter} and clicked on ${storeArr[i].clicks} many times`
    resultsList.appendChild(li);
  }
}
resultsBtn.
addEventListener('click', handleShowResult);
*/
imgContainer.addEventListener('click', handleClick);