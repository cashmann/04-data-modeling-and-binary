'use strict';

module.exports= function(bmp){
  console.log('transform!');
  console.log(bmp.palette.length);

  for(let i=0; i < bmp.palette.length; i+=4){
    if(bmp.palette[i] > 123 || bmp.palette[i+1]>123 || bmp.palette[i+2]>123){
      for(let x = i; x<i+3; x++ ){
        bmp.palette[x]= 255;
      }
    } else{
      for(let x = i; x<i+3; x++ ){
        bmp.palette[x]= 0;
      }
    }
  }
  
};