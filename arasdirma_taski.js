const obj = {
    name:"Ad",
    surnname:"Soyad",
    arr:[1,2,3,4]
};
const frozenObj = Object.freeze(obj);
console.log(frozenObj);

frozenObj.name="emil";
console.log(frozenObj);
const obj1 = {
    name:"Ad1",
    surnname:"Soyad1",
    arr:[11,22,33,44]
};
// ekstra info  deep froze && seal usullari da var 