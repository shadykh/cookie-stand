'use strict';

let hours=['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];
let cityNames = ['Seattle','Tokyo','Dubai','Paris','Lima'];
let minCity = [23,3,11,20,2];
let maxCity = [65,24,38,38,16];
let avgCookieCity = [6.3,1.2,3.7,2.3,4.6];
let footerArr = [];
let footerSumArr = [];

function City ( name, min, max, avgCookie ) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
  this.hourlyCustomer = [];
  this.averageCookiesPerCustomer = [];
  this.footer=[];
}

City.prototype.hourlyCustomerFun = function(){
  this.hourlyCustomer = generateQookies( this.min,this.max );
};

City.prototype.averageCookiesPerCustomerFun = function(){
  for ( let i = 0; i<this.hourlyCustomer.length;i++ ){
    this.averageCookiesPerCustomer.push( Math.ceil( this.hourlyCustomer[i]*this.avgCookie ) );
  }

};

City.prototype.footerFun = function(){

  for( let i = 0; i <hours.length;i++ ){
    this.footer.push( this.averageCookiesPerCustomer[i] );
  }
  footerArr.push( this.footer );
};

City.prototype.renderHeader = function(){
  const parentElement = document.getElementById( 'City' );
  // Create Element
  // append element to parent element
  // set text content to the element
  const articleElement = document.createElement( 'article' );
  parentElement.appendChild( articleElement );


  const tableElement = document.createElement( 'table' );
  tableElement.setAttribute( 'id', 'Table' );
  articleElement.appendChild( tableElement );

  const tr1Element = document.createElement( 'tr' );
  tableElement.appendChild( tr1Element );
  const tdElement = document.createElement( 'th' );
  tr1Element.appendChild( tdElement );
  tdElement.textContent = 'City/Time';
  for( let j = 0; j < hours.length;j++ ){
    const tdElement = document.createElement( 'th' );
    tr1Element.appendChild( tdElement );
    tdElement.textContent = hours[j];
  }
};

City.prototype.renderData = function(){
  const parentElement = document.getElementById( 'Table' );

  const tr1Element = document.createElement( 'tr' );
  parentElement.appendChild( tr1Element );
  const tdElement = document.createElement( 'td' );
  tr1Element.appendChild( tdElement );
  tdElement.textContent = this.name;
  for( let j = 0; j < hours.length;j++ ){
    const tdElement = document.createElement( 'td' );
    tr1Element.appendChild( tdElement );
    tdElement.textContent = this.averageCookiesPerCustomer[j];
  }
};



City.prototype.renderFooter = function(){
  for( let i=0;i<hours.length;i++ ){
    let sum=0;
    for ( let h=0;h<cityNames.length;h++ ){
      sum=sum+footerArr[h][i];
    }
    footerSumArr.push( sum );
  }
  const parentElement = document.getElementById( 'Table' );

  const tr1Element = document.createElement( 'tr' );
  parentElement.appendChild( tr1Element );

  const tdElement = document.createElement( 'th' );
  tr1Element.appendChild( tdElement );
  tdElement.textContent = 'Total';

  for( let j = 0; j < hours.length;j++ ){
    const tdElement = document.createElement( 'th' );
    tr1Element.appendChild( tdElement );
    tdElement.textContent = footerSumArr[j];
  }
};


const Seattle = new City( cityNames[0],minCity[0],maxCity[0],avgCookieCity[0] );
const Tokyo = new City( cityNames[1],minCity[1],maxCity[1],avgCookieCity[1] );
const Dubai = new City( cityNames[2],minCity[2],maxCity[2],avgCookieCity[2] );
const Paris = new City( cityNames[3],minCity[3],maxCity[3],avgCookieCity[4] );
const Lima = new City( cityNames[4],minCity[4],maxCity[4],avgCookieCity[4] );


Seattle.hourlyCustomerFun();
Seattle.averageCookiesPerCustomerFun();
Seattle.renderHeader();
Seattle.renderData();
Seattle.footerFun();

Tokyo.hourlyCustomerFun();
Tokyo.averageCookiesPerCustomerFun();
Tokyo.renderData();
Tokyo.footerFun();

Dubai.hourlyCustomerFun();
Dubai.averageCookiesPerCustomerFun();
Dubai.renderData();
Dubai.footerFun();

Paris.hourlyCustomerFun();
Paris.averageCookiesPerCustomerFun();
Paris.renderData();
Paris.footerFun();

Lima.hourlyCustomerFun();
Lima.averageCookiesPerCustomerFun();
Lima.renderData();
Lima.footerFun();
console.log(footerArr);
Lima.renderFooter();
console.log(footerSumArr);


function generateQookies( min, max ) {
  let cookiesArry = [];
  let cookies = 0;
  let sum = 0;
  for ( let i = 1; i <= hours.length;i++ ){
    sum = sum + cookies;
    if ( i === hours.length ) {
      cookiesArry.push( sum );
    }else{
      cookies = Math.floor( Math.random() * ( max - min + 1 ) + min );
      cookiesArry.push( cookies );
      sum = sum + cookies;
    }
  }
  return cookiesArry;
}

