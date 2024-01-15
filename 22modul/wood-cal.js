function woodCalculator(chairQuntity, tableQuantity, bedQuantity){

    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWood = chairQuntity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;

    return totalWood;



}

const totalWood = woodCalculator(0, 1, 0);
console.log(`total wood required: ${totalWood}`)