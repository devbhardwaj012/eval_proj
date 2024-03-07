const fs = require('fs');

// Read the contents of the JSON file
const jsonData = fs.readFileSync('data.json', 'utf8');
const compareData = fs.readFileSync('uploads.json', 'utf8');
// Parse the JSON data into a JavaScript object
const data = JSON.parse(jsonData);
const compare = JSON.parse(compareData);
// Now you can work with the data object
// console.log(data);
// console.log(compare);

function findElementById(id) {
    return data.find(item => item.id === id);
  }

const element1 = findElementById("1"); // Find element with id 2
  const element2 = findElementById("2"); // Find element with id 2
  const element3 = findElementById("3"); // Find element with id 2
  const element4 = findElementById("4"); // Find element with id 2
  const element5 = findElementById("5"); // Find element with id 2
  const element6 = findElementById("6");

  let array1=[];
  array1[0]=element1.safeSearchAnnotation.adult;
  array1[1]=element1.safeSearchAnnotation.violence;
  array1[2]=element1.logoAnnotations[0].description;
  array1[3]=element1.labelAnnotations[0].description;
  array1[4]=element1.labelAnnotations[1].description;

  let array2=[];
array2[0]=element2.safeSearchAnnotation.adult;
array2[1]=element2.safeSearchAnnotation.violence;
array2[2]=element2.logoAnnotations[0].description;
array2[3]=element2.labelAnnotations[0].description;
array2[4]=element2.labelAnnotations[1].description;

let array3 = [
    element3.safeSearchAnnotation.adult,
    element3.safeSearchAnnotation.violence,
    element3.logoAnnotations[0].description,
    element3.labelAnnotations[0].description,
    element3.labelAnnotations[1].description
];

let array4 = [
    element4.safeSearchAnnotation.adult,
    element4.safeSearchAnnotation.violence,
    element4.logoAnnotations[0].description,
    element4.labelAnnotations[0].description,
    element4.labelAnnotations[1].description
];


let array5 = [
    element5.safeSearchAnnotation.adult,
    element5.safeSearchAnnotation.violence,
    element5.logoAnnotations[0].description,
    element5.labelAnnotations[0].description,
    element5.labelAnnotations[1].description
];


let array6 = [
    element6.safeSearchAnnotation.adult,
    element6.safeSearchAnnotation.violence,
    element6.logoAnnotations[0].description,
    element6.labelAnnotations[0].description,
    element6.labelAnnotations[1].description
];

const ikeaProduct = compare.find(product => product.Brand === "Ikea");

// if (ikeaProduct) {
//   console.log("Ikea product found:", ikeaProduct);
// } else {
//   console.log("Ikea product not found.");
// }

// console.log(ikeaProduct.Material);

let d=[];
let d1=[];
let d2=[];
let e1=[];
let e2=[];
let e=[];
let c1=[];
let c2=[];
let c=[];
const product1= compare.find(product => product.Brand === array1[2]);
if(product1){
    d1[0]=16.5;
    if(product1.ProductName === array1[4]){
        d2[0]=16.5;
        e1[0]=16.5;
    } else {
        d2[0]=0;
        e1[0]=0;
    }

    const category= product1.ProductCategory;
    if(category){
        if(category=== array1[3]){
            e2[0]=16.5;
        } else{
            e2[0]=0;
        }
    }
    // console.log(d1,d2);
}
else{
    d1[0]=0;
}

const product2=compare.find(product => product.Brand === array2[2]);
if(product2){
    d1[1]=16.5;
    if(product2.ProductName === array2[4]){
        d2[1]= 16.5;
        e1[1]=16.5;
    } else {
        d2[1]=0;
        e1[1]=0;
    }
    const category= product2.ProductCategory;
    if(category){
        if(category=== array2[3]){
            e2[1]=16.5;
        } else{
            e2[1]=0;
        }
    }
} else {
    d1[1]=0;
}

const product3 = compare.find(product => product.Brand === array3[2]);
if (product3) {
    d1[2] = 16.5;
    if (product3.ProductName === array3[4]) {
        d2[2] = 16.5;
        e1[2] = 16.5;
    } else {
        d2[2]=0;
        e1[2]=0;
    }

    const category= product3.ProductCategory;
    if(category){
        if(category=== array3[3]){
            e2[2]=16.5;
        } else{
            e2[2]=0;
        }
    }
} else {
    d1[2]=0;
}

// Element 4
const product4 = compare.find(product => product.Brand === array4[2]);
if (product4) {
    d1[3] = 16.5;
    if (product4.ProductName === array4[4]) {
        d2[3] = 16.5;
        e1[3]=16.5;
    } else {
        d2[3]=0;
        e1[3] = 0;
    }
    const category= product4.ProductCategory;
    if(category){
        if(category=== array4[3]){
            e2[3]=16.5;
        } else{
            e2[3]=0;
        }
    }
} else { d1[3]=0;}

// Element 5
const product5 = compare.find(product => product.Brand === array5[2]);
if (product5) {
    d1[4] = 16.5;
    if (product5.ProductName === array5[4]) {
        d2[4] = 16.5;
        e1[4] = 16.5;
    } else{
        d2[4] = 0;
        e1[4] = 0;
    }
    const category= product5.ProductCategory;
    if(category){
        if(category=== array5[3]){
            e2[4]=16.5;
        } else{
            e2[4]=0;
        }
    }
} else {
    d1[4]=0;
}

// Element 6
const product6 = compare.find(product => product.Brand === array6[2]);
if (product6) {
    d1[5] = 16.5;
    if (product6.ProductName === array6[4]) {
        d2[5] = 16.5;
        e1[5] = 16.5;
    } else{
        d2[5]=0;
        e1[5] = 0;
    }
    const category= product6.ProductCategory;
    if(category){
        if(category=== array6[3]){
            e2[5]=16.5;
        } else{
            e2[5]=0;
        }
    }
} else{
    d1[5]=0;
}

if(array1[0]=="VERY_UNLIKELY"){
    c1[0]=16.5;
}
else if(array1[0]=="UNLIKELY"){
    c1[0]=13.2;
}
else if(array1[0]=="POSSIBLE"){
    c1[0]=9.9;
}
else if(array1[0]=="LIKELY"){
    c1[0]=6.6;
}
else if(array1[0]=="VERY_LIKELY"){
    c1[0]=3.3;
}


if (array2[0] == "VERY_UNLIKELY") {
    c1[1] = 16.5;
}
else if(array2[0]=="UNLIKELY"){
    c1[1]=13.2;
}
else if(array2[0]=="POSSIBLE"){
    c1[1]=9.9;
}
else if(array2[0]=="LIKELY"){
    c1[1]=6.6;
}
else if(array2[0]=="VERY_LIKELY"){
    c1[1]=3.3;
}

if (array3[0] == "VERY_UNLIKELY") {
    c1[2] = 16.5;
}
else if(array3[0]=="UNLIKELY"){
    c1[2]=13.2;
}
else if(array3[0]=="POSSIBLE"){
    c1[2]=9.9;
}
else if(array3[0]=="LIKELY"){
    c1[2]=6.6;
}
else if(array3[0]=="VERY_LIKELY"){
    c1[2]=3.3;
}

if (array4[0] == "VERY_UNLIKELY") {
    c1[3] = 16.5;
}
else if(array4[0]=="UNLIKELY"){
    c1[3]=13.2;
}
else if(array4[0]=="POSSIBLE"){
    c1[3]=9.9;
}
else if(array4[0]=="LIKELY"){
    c1[3]=6.6;
}
else if(array4[0]=="VERY_LIKELY"){
    c1[3]=3.3;
}

if (array5[0] == "VERY_UNLIKELY") {
    c1[4] = 16.5;
}
else if(array5[0]=="UNLIKELY"){
    c1[4]=13.2;
}
else if(array5[0]=="POSSIBLE"){
    c1[4]=9.9;
}
else if(array5[0]=="LIKELY"){
    c1[4]=6.6;
}
else if(array5[0]=="VERY_LIKELY"){
    c1[4]=3.3;
}

if (array6[0] == "VERY_UNLIKELY") {
    c1[5] = 16.5;
}
else if(array6[0]=="UNLIKELY"){
    c1[5]=13.2;
}
else if(array6[0]=="POSSIBLE"){
    c1[5]=9.9;
}
else if(array6[0]=="LIKELY"){
    c1[5]=6.6;
}
else if(array6[0]=="VERY_LIKELY"){
    c1[5]=3.3;
}


if(array1[1]=="VERY_UNLIKELY"){
    c2[0]=3.3;
}
if (array2[1] == "VERY_UNLIKELY") {
    c2[1] = 3.3;
}

if (array3[1] == "VERY_UNLIKELY") {
    c2[2] = 3.3;
}

if (array4[1] == "VERY_UNLIKELY") {
    c2[3] = 3.3;
}

if (array5[1] == "VERY_UNLIKELY") {
    c2[4] = 3.3;
}

if (array6[1] == "VERY_UNLIKELY") {
    c2[5] = 3.3;
}

<<<<<<< HEAD
for(let i=0; i< d1.length; i++){
    d[i]=d1[i]+d2[i];
    e[i]=e1[i]+e2[i];
=======
if(array1[1]=="VERY_UNLIKELY"){
    c2[0]=16.5;
}
else if(array1[1]=="UNLIKELY"){
    c2[0]=13.2;
}
else if(array1[1]=="POSSIBLE"){
    c2[0]=9.9;
}
else if(array1[1]=="LIKELY"){
    c2[0]=6.6;
}
else if(array1[1]=="VERY_LIKELY"){
    c2[0]=3.3;
}


if (array2[1] == "VERY_UNLIKELY") {
    c2[1] = 16.5;
}
else if(array2[1]=="UNLIKELY"){
    c2[1]=13.2;
}
else if(array2[1]=="POSSIBLE"){
    c2[1]=9.9;
}
else if(array2[1]=="LIKELY"){
    c2[1]=6.6;
}
else if(array2[1]=="VERY_LIKELY"){
    c2[1]=3.3;
}

if (array3[1] == "VERY_UNLIKELY") {
    c2[2] = 16.5;
}
else if(array3[1]=="UNLIKELY"){
    c2[2]=13.2;
}
else if(array3[1]=="POSSIBLE"){
    c2[2]=9.9;
}
else if(array3[1]=="LIKELY"){
    c2[2]=6.6;
}
else if(array3[1]=="VERY_LIKELY"){
    c2[2]=3.3;
}

if (array4[1] == "VERY_UNLIKELY") {
    c2[3] = 16.5;
}
else if(array4[1]=="UNLIKELY"){
    c2[3]=13.2;
}
else if(array4[1]=="POSSIBLE"){
    c2[3]=9.9;
}
else if(array4[1]=="LIKELY"){
    c2[3]=6.6;
}
else if(array4[1]=="VERY_LIKELY"){
    c2[3]=3.3;
}

if (array5[1] == "VERY_UNLIKELY") {
    c2[4] = 16.5;
}
else if(array5[1]=="UNLIKELY"){
    c2[4]=13.2;
}
else if(array5[1]=="POSSIBLE"){
    c2[4]=9.9;
}
else if(array5[1]=="LIKELY"){
    c2[4]=6.6;
}
else if(array5[1]=="VERY_LIKELY"){
    c2[4]=3.3;
}

if (array6[1] == "VERY_UNLIKELY") {
    c2[5] = 16.5;
}
else if(array6[1]=="UNLIKELY"){
    c2[5]=13.2;
}
else if(array6[1]=="POSSIBLE"){
    c2[5]=9.9;
}
else if(array6[1]=="LIKELY"){
    c2[5]=6.6;
}
else if(array6[1]=="VERY_LIKELY"){
    c2[5]=3.3;
}

for(let i=0; i< d1.length; i++){
    d[i]=d1[i]+d2[i];
    e[i]=e1[i]+e2[i];
    c[i]=c1[i]+c2[i];
>>>>>>> local
}

console.log(array1);

