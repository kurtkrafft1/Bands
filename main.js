let bandNumber = 1;


const takeNumber = function (bandName) {
    return `${bandNumber}. ${bandName}`;
    bandNumber++;
}

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console
const stageNumber = 1;

const bandsArr = [];
const storeBand = (band) => {
    const newBand = {
        bandName: document.querySelector('.bandName').value,
        bandBio: document.querySelector('.bandBio').value,
        bandGenre: document.querySelector('#bandGenre').value,
        bandsNumber: bandNumber
    }
    bandNumber++;
    bandsArr.unshift(newBand);
    // console.log(bandsArr)
}

const getNumber = () => {
    let html = `<div class="urNumba"> <h6>Thanks for submitting ${bandsArr[0].bandName}!</h6><h7>Your number is: ${bandsArr[0].bandsNumber}`
    const numberDiv = document.querySelector('.urNumber');
    numberDiv.innerHTML = html;
}

const formButton = document.getElementById('submitBand');
formButton.addEventListener('click', storeBand);

const numButton = document.getElementById('bandNum');
numButton.addEventListener('click', getNumber);

const checkBandNumber = () => {
    let bandSearch = document.querySelector('.numLookup').value;
    let userBand = bandsArr.filter(function (item) {
        return item.bandName === bandSearch;
    });
    alert(`Hello ${userBand[0].bandName} your number is ${userBand[0].bandsNumber}.`);
}
const searchButton = document.querySelector('.btnSearch');
searchButton.addEventListener('click', checkBandNumber);


// const checkBandNumber = () => {
//     let bandSearch = document.querySelector('.numLookup').value;
//     for (let i=0; i<bandsArr.length; i++){
//         if(bandSearch === bandsArr[i].bandName){
//             alert(`Awesome ${bandsArr[i].bandName}, your number is ${bandsArr[i].bandsNumber} and the band that is on stage is number ${stageNumber}.`)
//         } else {
//             // alert("Sorry we couldn't find your band, are you sure you spelled it correctly?");
//             continue
//         }
//     }
// }