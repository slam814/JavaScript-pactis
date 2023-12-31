var bookPrice = [100, 33, 20, 66, 77, 998, 300, 20, 200, 300, 77, 99, 20];

for(let i = 0; i < bookPrice.length; i++){
    const oneBookPrice = bookPrice[i];

    if(oneBookPrice > 200){
        continue;
    }
    console.log(oneBookPrice);
}