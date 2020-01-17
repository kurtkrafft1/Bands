let bandNumber = 1;


const takeNumber = function (bandName) {
    return `${bandNumber}. ${bandName}`;
    bandNumber++;
}

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console

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
        console.log(bandsArr)
    }

const getNumber = () => {
   let html = `<div class="urNumba"> <h6>Thanks for submitting ${bandsArr[0].bandName}!</h6><h7>Your number is: ${bandsArr[0].bandsNumber}`
   const numberDiv = document.querySelector('.urNumber');
   numberDiv.innerHTML=html;
}

const formButton = document.getElementById('submitBand');
formButton.addEventListener('click', storeBand);

const numButton = document.getElementById('bandNum');
numButton.addEventListener('click', getNumber);