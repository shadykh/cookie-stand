'use strict';


const Seattle = {
  name: 'Seattle',
  cookies: [],
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
  min:23,
  max:65,
  avgCookie:6.3,
  cookiesQ: function() {
    this.cookies = generateQookies( this.min,this.max );
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

    for( let i = 0; i < this.cookies.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${this.hours[i]}: ${Math.floor( this.cookies[i]*this.avgCookie )}cookies.`;
    }
  }
};

Seattle.cookiesQ();
Seattle.render();

const Tokyo = {
  name: 'Tokyo',
  cookies: [],
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
  min:3,
  max:24,
  avgCookie:1.2,
  cookiesQ: function() {
    this.cookies = generateQookies( this.min,this.max );
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

    for( let i = 0; i < this.cookies.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${this.hours[i]}: ${Math.floor( this.cookies[i]*this.avgCookie )}cookies.`;
    }
  }
};

Tokyo.cookiesQ();
Tokyo.render();

const Dubai = {
  name: 'Dubai',
  cookies: [],
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
  min:11,
  max:38,
  avgCookie:3.7,
  cookiesQ: function() {
    this.cookies = generateQookies( this.min,this.max );
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

    for( let i = 0; i < this.cookies.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${this.hours[i]}: ${Math.floor( this.cookies[i]*this.avgCookie )}cookies.`;
    }
  }
};


Dubai.cookiesQ();
Dubai.render();

const Paris = {
  name: 'Paris',
  cookies: [],
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
  min:20,
  max:38,
  avgCookie:2.3,
  cookiesQ: function() {
    this.cookies = generateQookies( this.min,this.max );
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

    for( let i = 0; i < this.cookies.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${this.hours[i]}: ${Math.floor( this.cookies[i]*this.avgCookie )}cookies.`;
    }
  }
};

Paris.cookiesQ();
Paris.render();

const Lima = {
  name: 'Lima',
  cookies: [],
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
  min:2,
  max:16,
  avgCookie:4.6,
  cookiesQ: function() {
    this.cookies = generateQookies( this.min,this.max );
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

    for( let i = 0; i < this.cookies.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${this.hours[i]}: ${Math.floor( this.cookies[i]*this.avgCookie )}cookies.`;
    }
  }
};


Lima.cookiesQ();
Lima.render();


function generateQookies( min, max ) {
  let cookiesArry = [];
  let cookies = 0;
  let sum = 0;
  for ( let i = 1; i <= 15;i++ ){
    sum = sum + cookies;
    if ( i === 15 ) {
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
  let hours=[];
  for ( let i = 6; i<=12;i++ ){
    if ( i<12 ){
      hours.push( i+'am' );
    }else{
      hours.push( i+'pm' );
    }
  }
  for ( let i = 1; i<=8;i++ ){
    if ( i<8 ){
      hours.push( i+'pm' );
    }else{
      hours.push( 'Total' );
    }
  }
  return hours;
}
console.log( generateHours() );
*/
