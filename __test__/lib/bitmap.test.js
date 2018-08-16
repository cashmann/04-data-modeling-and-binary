'use strict';
const fs = require('fs');
const fileHouse = `${__dirname}/../../assets/palette-bitmap.bmp`;
const fileHouseOutput = `${__dirname}/../../output/palette-bitmap.bmp`;
const Bitmap = require('../../lib/bitmap');
describe('bitmap', ()=>{
  it('can read basic header fields', ()=>{
    var bmp = Bitmap.fromFile(fileHouse);
    expect(bmp.type).toBe('BM');
    expect(bmp.size).toBeGreaterThan(0);
    expect(bmp.offset).toBeGreaterThan(0);
    expect(bmp.img.length).toBeGreaterThan(0);
    expect(bmp.size).toBeGreaterThanOrEqual(bmp.img.length);
    expect(bmp.width).toBe(100);
    expect(bmp.height).toBe(100);
    expect(bmp.headerSize).toBe(40);
    expect(bmp.paletteColorCount).toBe(256);
    expect(bmp.palette.length).toBe(1024);
    console.log(bmp);
  });
  it('can write a new bmp file', ()=>{
    var bmp = Bitmap.fromFile(fileHouse);
    bmp.writeToFile(fileHouseOutput);
    expect(fs.existsSync(fileHouseOutput)).toBe(true);
  });
});