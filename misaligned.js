const {expect} = require('chai')
 const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
 const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
let colorSet= new Map();

function print_color_map() {
   for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            console.log(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
        }
    }
    return majorColors.length * minorColors.length;
}

function printColorMapStub() {
     for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
    colorSet.set((i * 5 + j)+1,{'majorColor':majorColors[i],'minorColor':minorColors[j]});
          }
        }
}
function checkColorMap(colorCode,expectMajorColor,expectedMinorColor){
  printColorMapStub();
  let indivdualColorSet= colorSet.get(colorCode)
  if(indivdualColorSet.majorColor===expectMajorColor && indivdualColorSet.minorColor===expectedMinorColor ){
    console.log("Success")
  }else{
    throw 'Failure!! ColorCode and Colors are mismatch';
  }
  }
result = print_color_map();
expect(result).equals(25);
checkColorMap(1,'White','Blue');
checkColorMap(9,'Red','Brown');
console.log('All is well (maybe!)');
