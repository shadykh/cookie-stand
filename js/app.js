'use strict';

let hours=['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];

const Seattle = {
  name: 'Seattle',
  min:23,
  max:65,
  avgCookie:6.3,
  hourlyCustomer: [],
  averageCookiesPerCustomer:[],
  hourlyCustomerFun: function() {
    this.hourlyCustomer = generateQookies( this.min,this.max );
  },
  averageCookiesPerCustomerFun: function() {
    for ( let i = 0; i < this.hourlyCustomer.length;i++ ){
      this.averageCookiesPerCustomer.push(Math.ceil( this.hourlyCustomer[i]*this.avgCookie ) );
    }
  },

  render: function() {
    const parentElement = document.getElementById( 'Seattle' );

    // Create Element
    // append element to parent element
    // set text content to the element

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h3' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.name;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < this.averageCookiesPerCustomer.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${hours[i]}: ${this.averageCookiesPerCustomer[i]}cookies.`;
      console.log( this.averageCookiesPerCustomer[i] );
    }
  }
};


Seattle.hourlyCustomerFun();
Seattle.averageCookiesPerCustomerFun();
Seattle.render();

const Tokyo = {
  name: 'Tokyo',
  min:3,
  max:24,
  avgCookie:1.2,
  hourlyCustomer: [],
  averageCookiesPerCustomer:[],
  hourlyCustomerFun: function() {
    this.hourlyCustomer = generateQookies( this.min,this.max );
  },
  averageCookiesPerCustomerFun: function() {
    for ( let i = 0; i < this.hourlyCustomer.length;i++ ){
      this.averageCookiesPerCustomer.push(Math.ceil( this.hourlyCustomer[i]*this.avgCookie ) );
    }
  },

  render: function() {
    const parentElement = document.getElementById( 'Tokyo' );

    // Create Element
    // append element to parent element
    // set text content to the element

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h3' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.name;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < this.averageCookiesPerCustomer.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${hours[i]}: ${this.averageCookiesPerCustomer[i]}cookies.`;
      console.log( this.averageCookiesPerCustomer[i] );
    }
  }
};


Tokyo.hourlyCustomerFun();
Tokyo.averageCookiesPerCustomerFun();
Tokyo.render();

const Dubai = {
  name: 'Dubai',
  min:11,
  max:38,
  avgCookie:3.7,
  hourlyCustomer: [],
  averageCookiesPerCustomer:[],
  hourlyCustomerFun: function() {
    this.hourlyCustomer = generateQookies( this.min,this.max );
  },
  averageCookiesPerCustomerFun: function() {
    for ( let i = 0; i < this.hourlyCustomer.length;i++ ){
      this.averageCookiesPerCustomer.push(Math.ceil( this.hourlyCustomer[i]*this.avgCookie ) );
    }
  },

  render: function() {
    const parentElement = document.getElementById( 'Dubai' );

    // Create Element
    // append element to parent element
    // set text content to the element

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h3' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.name;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < this.averageCookiesPerCustomer.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${hours[i]}: ${this.averageCookiesPerCustomer[i]}cookies.`;
      console.log( this.averageCookiesPerCustomer[i] );
    }
  }
};


Dubai.hourlyCustomerFun();
Dubai.averageCookiesPerCustomerFun();
Dubai.render();

const Paris = {
  name: 'Paris',
  min:20,
  max:38,
  avgCookie:2.3,
  hourlyCustomer: [],
  averageCookiesPerCustomer:[],
  hourlyCustomerFun: function() {
    this.hourlyCustomer = generateQookies( this.min,this.max );
  },
  averageCookiesPerCustomerFun: function() {
    for ( let i = 0; i < this.hourlyCustomer.length;i++ ){
      this.averageCookiesPerCustomer.push(Math.ceil( this.hourlyCustomer[i]*this.avgCookie ) );
    }
  },

  render: function() {
    const parentElement = document.getElementById( 'Paris' );

    // Create Element
    // append element to parent element
    // set text content to the element

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h3' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.name;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < this.averageCookiesPerCustomer.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${hours[i]}: ${this.averageCookiesPerCustomer[i]}cookies.`;
      console.log( this.averageCookiesPerCustomer[i] );
    }
  }
};


Paris.hourlyCustomerFun();
Paris.averageCookiesPerCustomerFun();
Paris.render();



const Lima = {
  name: 'Lima',
  min:2,
  max:16,
  avgCookie:4.6,
  hourlyCustomer: [],
  averageCookiesPerCustomer:[],
  hourlyCustomerFun: function() {
    this.hourlyCustomer = generateQookies( this.min,this.max );
  },
  averageCookiesPerCustomerFun: function() {
    for ( let i = 0; i < this.hourlyCustomer.length;i++ ){
      this.averageCookiesPerCustomer.push(Math.ceil( this.hourlyCustomer[i]*this.avgCookie ) );
    }
  },

  render: function() {
    const parentElement = document.getElementById( 'Lima' );

    // Create Element
    // append element to parent element
    // set text content to the element

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h3' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.name;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < this.averageCookiesPerCustomer.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${hours[i]}: ${this.averageCookiesPerCustomer[i]}cookies.`;
      console.log( this.averageCookiesPerCustomer[i] );
    }
  }
};


Lima.hourlyCustomerFun();
Lima.averageCookiesPerCustomerFun();
Lima.render();


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







/*
function generateHours(){
  let hours1=[];
  for ( let i = 6; i<=12;i++ ){
    if ( i<12 ){
      hours1.push( i+'am' );
    }else{
      hours1.push( i+'pm' );
    }
  }
  for ( let i = 1; i<=8;i++ ){
    if ( i<8 ){
      hours1.push( i+'pm' );
    }else{
      hours1.push( 'Total' );
    }
  }
  return hours1;
}
console.log( generateHours() );
*/
