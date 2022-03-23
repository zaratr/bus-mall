'use strict'
//DOM References
let VOTINGROUNDS= 25; 
//DOM ref
  let imgContainer = document.getElementById('shopImages');
  let resultsBtn = document.getElementById('view-results-btn');
  let resultsList = document.getElementById('display-results-list');
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
function getRandom(len){ return Math.floor(Math.random() * len);}
function main()//works similar to main in other programming languages. for simplicity all work will be here.
{
  /*
    local declarations
  */
  let imgOne= document.getElementById('image-one');
  let imgTwo= document.getElementById('image-two');
  let imgThree= document.getElementById('image-three');


   let len = storeArr.length;
    //function calling
    let checkIfSame1=     getRandom(len);
    let checkIfSame2=     getRandom(len);
    let checkIfSame3=     getRandom(len);

    while(checkIfSame1 === checkIfSame2 || checkIfSame1 === checkIfSame3 || checkIfSame2 === checkIfSame3) 
    {
      if(checkIfSame1 === checkIfSame2) checkIfSame2=getRandom(len);
      if(checkIfSame1 === checkIfSame3) checkIfSame3=getRandom(len);
      if(checkIfSame2 === checkIfSame3) checkIfSame2=getRandom(len);
    }
    
    imgOne.src= storeArr[checkIfSame1].image;
    imgOne.alt= storeArr[checkIfSame1].clientName;
    storeArr[checkIfSame1].imgShownCounter++;

    imgTwo.src= storeArr[checkIfSame2].image;
    imgTwo.alt= storeArr[checkIfSame2].clientName;
    storeArr[checkIfSame2].imgShownCounter++;

    imgThree.src= storeArr[checkIfSame3].image;
    imgThree.alt= storeArr[checkIfSame3].clientName;
    storeArr[checkIfSame3].imgShownCounter++;





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
imgContainer.addEventListener('click', handleClick);
resultsBtn.addEventListener('click', handleShowResult);