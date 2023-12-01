const cardNumber = document.getElementById('card_num');
const cardInputNumber = document.getElementById('form_card_number');

const cardName = document.getElementById('card__name');
const cardInputName = document.getElementById('form_card_name');

const cardMonth = document.getElementById('card_date_month');
const cardInputMonth = document.getElementById('month');

const cardYear = document.getElementById('card_date_year');
const cardInputYear = document.getElementById('year');

const cardCvc = document.querySelector('.card_cvc')
const cardInputCvc = document.getElementById('form_card_cvc');

const cardFace = document.querySelector('.card_face');
const cardBack = document.querySelector('.card_back');

const flip = document.querySelector(".flip");

const logo = document.getElementById('logo');

const images = [
  './img/visaLogo_st.png',
  './img/discoverLogo_st.png',
  './img/masterCard_st.png',
];
values4by4 = '';
let cardNumberValue = Array(16).fill('#').join('');
for (let i = 0; i < cardNumberValue.length; i++) {
  if (i % 4 == 0 && i > 0) values4by4 = values4by4.concat('  ');
  values4by4 = values4by4.concat(cardNumberValue[i]);
};
let ind = 0;
const change = () => {
  logo.src = images[ind];
  ind > 1 ? ind = 0 : ind++;
};
window.onload = function () {
  cardNumber.value = values4by4
  setInterval(change, 8000)
};


cardInputNumber.addEventListener('input', (e) => {

  let fullNumbers = e.target.value.replace(/\D/g, '');
  let numbers4by4 = '';
  e.target.value = fullNumbers;
  if (fullNumbers.length > 16) {
    e.preventDefault()
    e.target.value = fullNumbers.substring(0, 16)
    return
  };

  fullNumbers = fullNumbers.split(' ').join('');

  for (let i = 0; i < fullNumbers.length; i++) {
    if (i % 4 == 0 && i > 0) numbers4by4 = numbers4by4.concat('  ');
    numbers4by4 = numbers4by4.concat(fullNumbers[i]);
  }
  cardNumber.value = numbers4by4 + values4by4.slice(numbers4by4.length, values4by4.length);
});

cardInputName.addEventListener('input', (e) => {

  cardName.value = (e.target.value).toUpperCase();
});

cardInputMonth.addEventListener('input', (e) => {
  cardMonth.value = e.target.value
})

cardInputYear.addEventListener('input', (e) => {
  cardYear.value = e.target.value
})

cardInputCvc.onblur = () => {
  flip.classList.toggle("is-flipped");
  cardFace.classList.remove('hidden')
  cardBack.classList.toggle('hidden')
  // cardFace.style.display = 'block';
  // cardBack.style.display = 'none';

}

cardInputCvc.onfocus = (e) => {
  flip.classList.toggle("is-flipped");
  cardFace.classList.toggle('hidden')
  cardBack.classList.toggle('hidden')
  // cardFace.style.display = 'none';
  // cardBack.style.display = 'block';
  cardInputCvc.addEventListener('input', (e) => {
    let onlyNumbers = e.target.value.replace(/\D/g, '');
    e.target.value = onlyNumbers;
    cardCvc.value = e.target.value
    console.log(e.target.value)
  })
}










