//esmodules type
import { upperCase } from "upper-case";
import _ from "lodash";
console.log(upperCase("hellooo sarannn"));

const name="saran";
console.log(upperCase(`hello ${name}`));

 //lodash functions..
console.log(_.capitalize("vanakkam chennai"));
let arr=[1,6,4,3,4,7,6,4,3,2,23,56,99];
console.log(_.uniq(arr));
let brr=_.chunk(arr,3);
console.log(brr);