let meat = 700; // meat everyday, g
let frozenVegetables = 500; // frozen vegetables, g
let freshVegetables = 800; // fresh vegetables, g
let proteinBars = 2; //protein bars, pieces
let eggs = 10; // eggs, pieces
let chease = 100; // chease, g

let days = prompt('На какой срок делаем закупку');

let resultMeat = days * meat;
let resultFrozenVegetables = days * frozenVegetables;
let resultFreshVegetables = days * freshVegetables;
let resultProteinBars = days * proteinBars;
let resultEggs = days * eggs;
let resultChease = days * chease;


alert(`Вам нужно купить ${resultMeat} грамм мяса, ${resultFrozenVegetables} грамм замороженных овощей, ${resultFreshVegetables} грамм свежих овощей, ${resultProteinBars} протеиновых батончиков, ${resultEggs} яиц, ${resultChease} грамм сыра на ${days} дней`);