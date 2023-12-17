//forin
//forin gives the key but forof gives the value of the key
//forin works with object,arrays but does not work with map as map is not iteratable.

const myObject={
    name1:`gs`,
    name2:`gs1`,
    name3:`gs2`,
    name4:`gs3`,

}
for (const key in myObject) {
    console.log(`key: ${key}, value: ${myObject[key]}`);
}