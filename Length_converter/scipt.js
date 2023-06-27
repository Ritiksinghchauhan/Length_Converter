const length=document.querySelector('#amount');
const convertFrom=document.querySelector('#from');
const convertTo=document.querySelector('#to');
const formular=document.querySelector('.content');
const result=document.querySelector('#result');
const selectElement=document.querySelectorAll('select');


// const selectElement=document.querySelectorAll('select');
// console.log(selectElement);

//display formular hints
const hints=[{
    //0
    sameUnit:'Gives the same value'
},
{
    //1 
    c_m:'Divide the length by 100'
},
{
    //2 
    c_km:'Divide the length by 100000'

},
{
    //3
    m_c:'Multiply the length by 100'

},
{
    //4 
    m_km:'Divide the length by 1000'

},
{
    // 5
    km_c:'Multiply the length by 100000'

},
{
    //6 
    km_m:'Multiply the length by 1000'

},

];
const units=[
    'meter','kilometer'
];


for(let i=1;i>=0;i--){
    let option=`<option value=${units[i]}>${units[i]}</option>`;
    selectElement[0].firstElementChild.insertAdjacentHTML('afterend',option);
}

for(let i=1;i>=0;i--){
    let option=`<option value=${units[i]}>${units[i]}</option>`;
    selectElement[1].firstElementChild.insertAdjacentHTML('afterend',option);
}


function convertUnits(){
    if(
        (convertFrom.value==='centimeter') && (convertTo.value==='centimeter') ||
        (convertFrom.value==='meter') && (convertTo.value==='meter') ||
        (convertFrom.value==='kilometer') && (convertTo.value==='kilometer')

    )
    {
        result.value=length.value;
    }


    else if((convertFrom.value==='centimeter') && (convertTo.value==='meter')) 
   {
    console.log("It works successfully...");
    result.value=length.value/100;
    formular.textContent=hints[1].c_m;

    }
    else if((convertFrom.value==='centimeter') && (convertTo.value==='kilometer')) 
    {
    console.log("It works successfully...");
    result.value=length.value/100000;
    formular.textContent=hints[2].c_km;

    }
    else if((convertFrom.value==='meter') && (convertTo.value==='centimeter')) 
    {
    console.log("It works successfully...");
    result.value=length.value*100;
    formular.textContent=hints[3].m_c;

    }
    else if((convertFrom.value==='meter') && (convertTo.value==='kilometer')) 
    {
    console.log("It works successfully...");
    result.value=length.value/1000;
    formular.textContent=hints[4].m_km;

    }

    else if((convertFrom.value==='kilometer') && (convertTo.value==='centimeter')) 
    {
    console.log("It works successfully...");
    result.value=length.value*100000;
    formular.textContent=hints[5].km_c;

    }

    else if((convertFrom.value==='kilometer') && (convertTo.value==='meter')) 
    {
    console.log("It works successfully...");
    result.value=length.value*1000;
    formular.textContent=hints[6].km_m;

    }
}

    




convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
length.addEventListener('input',convertUnits);