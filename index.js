const height = prompt('Введіть довжину масиву: ');
const width = prompt('Введіть ширину масиву: ');
const arr = [];

for (let i = 0; i < width; i++)
{
    arr.push([]);
    for(let j = 0; j < height; j++){
        arr[i][j] = +prompt(`Введіть елемент [${i}] [${j}]`);
    }
}
console.log(arr);

for (let i = 0; i < height; i++)
{
    let suma = 0;
    for(let j = 0; j < width; j++){
        suma += arr[j][i];
    }
    console.log(`Сума елементів в ${i} стовпці: ${suma}`);
}
for (let i = 0; i < width; i++)
{
    let suma2 = 0;
    for(let j = 0; j < height; j++){
        suma2 += arr[i][j];
    }
    console.log(`Сума елементів в ${i} рядку: ${suma2}`);
}