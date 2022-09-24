let fullList = ["Capitán América: El Primer Vengador (2011) - Nota: 80", "Capitana Marvel (2019) - Nota: 79", "Iron Man (2008) - Nota: 94", "El Increíble Hulk (2008) - Nota: 67", "Iron Man 2 (2010) - Nota: 72", "Thor (2011) - Nota: 77", "Los Vengadores (2012) - Nota: 92", "Iron Man 3 (2013) - Nota: 79", "Thor: El mundo oscuro (2013) - Nota: 66", "Capitán América: El soldado de invierno (2014) - Nota: 90", "Guardianes de la Galaxia (2014) - Nota: 91", "Guardianes de la Galaxia 2 (2017) - Nota: 85", "Los Vengadores: Era de Ultrón (2015) - Nota: 77", "Ant-Man (2015) - Nota: 83", "Capitán América: Civil War (2016) - Nota: 90", "Viuda Negra (2021) - Nota: 80", "Black Panther (2018) - Nota: 96", "Doctor Extraño (2016) - Nota: 89", "Spider-Man: Homecoming (2017) - Nota: 92", "Ant-Man y la Avispa (2018) - Nota: 87", "Thor: Ragnarok (2017) - Nota: 93", "Vengadores: Infinity War (2018) - Nota: 85", "Vengadores: Endgame (2019) - Nota: 94", "Bruja Escarlata y Vision / Wandavision (2021) (Serie Disney+) - Nota: 91", "Falcon y El soldado de invierno (2021) (Serie Disney+) - Nota: 83", "Spider-Man: Lejos de casa (2019) - Nota: 90", "Spider-Man: No Way Home (2021) - Nota: 94", "Loki (2021) (Serie Disney+) - Nota: 92", "Eternals (2021) - Nota: 78", "Shang-Chi and the Legends of the Ten Rings (2021) - Nota: 92", "Ojo de Halcón (2021) (Serie Disney+) - Nota: 92", "Doctor Strange en el Multiverso de la Locura (2022) - Nota: 75", "Moon Knight (2022) (Serie Disney+) - Nota: 86", "Ms. Marvel (2022) (Serie Disney+) - Nota: 98", "Thor: Love and Thunder (2022) - Nota: 68", "She-Hulk (2022) - Nota: 88"];

let superArray = [];
fullList.forEach(cutIt);

function cutIt(item, index, arr) {
    let tempArr = item.split(/[()]/);
    if (tempArr.length > 3) {
        tempArr.splice(2, 2)
    }

    tempArr[0] = tempArr[0].slice(0, tempArr[0].length - 1);
    tempArr[2] = tempArr[2].slice([3], tempArr[2].length);

    superArray.push(tempArr);
};

console.log("super  :" + JSON.stringify(superArray, null, '\t'));