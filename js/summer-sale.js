//
function productPrice1(){
const price1=elementPrice('element-1-price');
const totalPriceData=elementPrice('total-price')

const totalPrice1=price1+totalPriceData;
const totalPrice=document.getElementById('total-price');
totalPrice.innerText=totalPrice1;
addcalculateEntry('Accessories',price1);
const discountPrice=document.getElementById('discount-price');
const total=document.getElementById('to-tal');
if(totalPrice1>=200){
    const newPrice=totalPrice1*0.2;
    discountPrice.innerText=newPrice.toFixed(0);
    const newTotal=totalPrice1-newPrice;
    total.innerText=newTotal.toFixed(0);
}


}
function productPrice2(){
const price2=elementPrice('element-2-price');
const totalPriceData=elementPrice('total-price')
const totalPrice2=price2+totalPriceData;
const totalPrice=document.getElementById('total-price');
totalPrice.innerText=totalPrice2;
addcalculateEntry('Accessories',price2);
const discountPrice=document.getElementById('discount-price');
const total=document.getElementById('to-tal');
if(totalPrice2>=200){
    const newPrice=totalPrice2*0.2;
    discountPrice.innerText=newPrice.toFixed(0);
    const newTotal=totalPrice2-newPrice;
    total.innerText=newTotal.toFixed(0);
}
}



function productPrice3(){
const price3=elementPrice('element-3-price');
const totalPriceData=elementPrice('total-price')
const totalPrice3=price3+totalPriceData;
const totalPrice=document.getElementById('total-price');
totalPrice.innerText=totalPrice3;
addcalculateEntry('Home cooker',price3);
const discountPrice=document.getElementById('discount-price');
const total=document.getElementById('to-tal');
if(totalPrice3>=200){
    const newPrice=totalPrice3*0.2;
    discountPrice.innerText=newPrice.toFixed(0);
    const newTotal=totalPrice3-newPrice;
    total.innerText=newTotal.toFixed(0);
}
}
function productPrice4(){
const price4=elementPrice('element-4-price');
const totalPriceData=elementPrice('total-price')
const totalPrice4=price4+totalPriceData;
const totalPrice=document.getElementById('total-price');
totalPrice.innerText=totalPrice4;
addcalculateEntry('Sports Black cap',price4);
const discountPrice=document.getElementById('discount-price');
const total=document.getElementById('to-tal');
if(totalPrice4>=200){
    const newPrice=totalPrice4*0.2;
    discountPrice.innerText=newPrice.toFixed(0);
    const newTotal=totalPrice4-newPrice;
    total.innerText=newTotal.toFixed(0);
}
}
function productPrice5(){
const price5=elementPrice('element-5-price');
const totalPriceData=elementPrice('total-price')
const totalPrice5=price5+totalPriceData;
const totalPrice=document.getElementById('total-price');
totalPrice.innerText=totalPrice5;
addcalculateEntry('Full jersey set',price5);
const discountPrice=document.getElementById('discount-price');
const total=document.getElementById('to-tal');
if(totalPrice5>=200){
    const newPrice=totalPrice5*0.2;
    discountPrice.innerText=newPrice.toFixed(0);
    const newTotal=totalPrice5-newPrice;
    total.innerText=newTotal.toFixed(0);
}
}
function productPrice6(){
const price6=elementPrice('element-6-price');
const totalPriceData=elementPrice('total-price')
const totalPrice6=price6+totalPriceData;
const totalPrice=document.getElementById('total-price');
totalPrice.innerText=totalPrice6;
addcalculateEntry('Sports Cates',price6);
const discountPrice=document.getElementById('discount-price');
const total=document.getElementById('to-tal');
if(totalPrice6>=200){
    const newPrice=totalPrice6*0.2;
    discountPrice.innerText=newPrice.toFixed(0);
    const newTotal=totalPrice6-newPrice;
    total.innerText=newTotal.toFixed(0);
}
}
function productPrice7(){
const price7=elementPrice('element-7-price');
const totalPriceData=elementPrice('total-price')
const totalPrice7=price7+totalPriceData;
const totalPrice=document.getElementById('total-price');
totalPrice.innerText=totalPrice7;
addcalculateEntry('Single Relax Chair',price7);
const discountPrice=document.getElementById('discount-price');
const total=document.getElementById('to-tal');
if(totalPrice7>=200){
    const newPrice=totalPrice7*0.2;
    discountPrice.innerText=newPrice.toFixed(0);
    const newTotal=totalPrice7-newPrice;
    total.innerText=newTotal.toFixed(0);
}
}
function productPrice8(){
const price8=elementPrice('element-8-price');
const totalPriceData=elementPrice('total-price')
const totalPrice8=price8+totalPriceData;
const totalPrice=document.getElementById('total-price');
totalPrice.innerText=totalPrice8;
addcalculateEntry('Children Play',price8);
const discountPrice=document.getElementById('discount-price');
const total=document.getElementById('to-tal');
if(totalPrice8>=200){
    const newPrice=totalPrice8*0.2;
    discountPrice.innerText=newPrice.toFixed(0);
    const newTotal=totalPrice8-newPrice;
    total.innerText=newTotal.toFixed(0);
}
}
function productPrice9(){
const price9=elementPrice('element-9-price');
const totalPriceData=elementPrice('total-price')
const totalPrice9=price9+totalPriceData;
const totalPrice=document.getElementById('total-price');
totalPrice.innerText=totalPrice9;
addcalculateEntry('Flexible Sofa',price9);
const discountPrice=document.getElementById('discount-price');
const total=document.getElementById('to-tal');
if(totalPrice9>=200){
    const newPrice=totalPrice9*0.2;
    discountPrice.innerText=newPrice.toFixed(0);
    const newTotal=totalPrice9-newPrice;
    total.innerText=newTotal.toFixed(0);
}
}

 






//Reuseable function
function elementPrice(inputPrice){
    const elementPrice=document.getElementById(inputPrice);
    
    const elementPriceString=elementPrice.innerText;
    const p=parseFloat(elementPriceString);
    return p;
    
}
//
function addcalculateEntry(productName,price){
    const entryPrice=document.getElementById('entry-price');
    const count=entryPrice.childElementCount;
    const entry=document.createElement('p');
    entry.innerHTML=`${count+1} ${productName} ${price}`;
    entryPrice.appendChild(entry);
}


