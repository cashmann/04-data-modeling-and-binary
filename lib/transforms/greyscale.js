'use strict';

module.exports= function(bmp){
  for(let i=0; i < bmp.palette.length; i+=4){
    let grayValue = (Math.max(bmp.palette[i], bmp.palette[i+1], bmp.palette[i+2])+Math.min(bmp.palette[i], bmp.palette[i+1], bmp.palette[i+2]))/2;
    bmp.palette[i] = grayValue;
    bmp.palette[i+1] = grayValue;
    bmp.palette[i+2] = grayValue;
  }
  
};