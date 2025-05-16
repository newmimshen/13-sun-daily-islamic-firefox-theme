function chooseLengthOfArray (nameOfSun){ //get length
    return nameOfSun.length;
}

function chooseRandomItem (array,length,minimum){ // get person/image
    return array[Math.floor(Math.random() * length) + minimum];
}
function floatThemeTo(){
    if(navigator.language === 'fa-IR')   // according to language changes theme float to right or left
        sunTheme.properties.additional_backgrounds_alignment = ['left center'];
    else
        sunTheme.properties.additional_backgrounds_alignment = ['right center'];
}
function chooseSun () {
    let p;
    floatThemeTo();
    switch(time){
        case 0:
            p = chooseRandomItem(persons,2,1);
            sunTheme.images.additional_backgrounds = [sunPersons[p][Math.floor(Math.random() * chooseLengthOfArray(sunPersons[p]))]];
            break;
        case 1:
            p = chooseRandomItem(persons,2,3);
            sunTheme.images.additional_backgrounds = [sunPersons[p][Math.floor(Math.random() * chooseLengthOfArray(sunPersons[p]))]];
            break;
        case 2:
            p = chooseRandomItem(persons,3,5);
            sunTheme.images.additional_backgrounds = [sunPersons[p][Math.floor(Math.random() * chooseLengthOfArray(sunPersons[p]))]];
            break;
        case 3:
            p = chooseRandomItem(persons,4,8);
            sunTheme.images.additional_backgrounds = [sunPersons[p][Math.floor(Math.random() * chooseLengthOfArray(sunPersons[p]))]];
            break;
        case 4:
            sunTheme.images.additional_backgrounds = [sunPersons.askari[Math.floor(Math.random() * chooseLengthOfArray(sunPersons.askari))]];
            break;
        case 5:
            sunTheme.images.additional_backgrounds = [sunPersons.hojjat[Math.floor(Math.random() * chooseLengthOfArray(sunPersons.hojjat))]];
            break;
        case 6:
            sunTheme.images.additional_backgrounds = [sunPersons.nabi[Math.floor(Math.random() * chooseLengthOfArray(sunPersons.nabi))]];
            break;
    }
}