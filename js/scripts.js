// My Scripts

// Option A: show() and hide() 
// Option B: toggleClass() or addCLass(), removeClass()

// Click Illustration
$('button:nth-child(1)').click( function(){
  
   // Hide Illustrations 
  $('.personal').hide();
  // $('.fan').hide();
  $('.comm').hide();
  $('.about').hide();
  // Show Photo
  $('.AR').show();
  

});


// Click Photo
$('button:nth-child(2)').click( function(){
  

   // Hide Illustrations 
  $('.AR').hide();
  // $('.fan').hide();
  $('.comm').hide();
  $('.about').hide();
  // Show Photo
  $('.personal').show();

});

// // Click Photo
// $('button:nth-child(3)').click( function(){
  

//    // Hide Illustrations 
//   $('.personal').hide();
//   $('.AR').hide();
//   $('.comm').hide();
//   $('.about').hide();
//   // Show Photo
//   $('.fan').show();

// });


// Click Photo
$('button:nth-child(3)').click( function(){
  

   // Hide Illustrations 
  $('.AR').hide();
  // $('.fan').hide();
  $('.personal').hide();
  $('.about').hide();
  // Show Photo
  $('.comm').show();

});

// Click Photo
$('button:nth-child(4)').click( function(){
  

   // Hide Illustrations 
  $('.AR').hide();
  // $('.fan').hide();
  $('.comm').hide();
  $('.personal').hide();
  // Show Photo
  $('.about').show();

});


