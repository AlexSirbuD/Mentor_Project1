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

const activeBox = document.querySelector('.active_box')
const activeBox2 = document.querySelector('.active_box2')
const activeBox3 = document.querySelector('.active_box3')



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

cardInputNumber.addEventListener('click', () => {
  activeBox.classList.remove('box_hidden');
  activeBox2.classList.add('box_hidden');
  activeBox3.classList.add('box_hidden');
  activeBox3.classList.toggle('active_box_animation')
});

// cardInputNumber.addEventListener('input', (e) => {

//   let fullNumbers = e.target.value.replace(/\D/g, '');
//   let numbers4by4 = '';
//   e.target.value = fullNumbers;
//   if (fullNumbers.length > 16) {
//     // e.preventDefault()
//     e.target.value = fullNumbers.substring(0, 16)
//     return
//   };

//   fullNumbers = fullNumbers.split(' ').join('');

//   for (let i = 0; i < fullNumbers.length; i++) {
//     if (i % 4 == 0 && i > 0) numbers4by4 = numbers4by4.concat('  ');
//     numbers4by4 = numbers4by4.concat(fullNumbers[i]);
//   }
//   cardNumber.value = numbers4by4 + values4by4.slice(numbers4by4.length, values4by4.length);
//   cardNumber.value[1].style.color = 'red'
// });

// proba

const numbers = document.querySelectorAll('.animated-heading');
const input = document.getElementById('input');

let index = 0;
cardInputNumber.addEventListener('input', (e) => {

  let fullNumbers = e.target.value.replace(/\D/g, '');
  e.target.value = fullNumbers;
  if (index > 16) {
    e.preventDefault()
    e.target.value = fullNumbers.substring(0, 16)
    index = 16
    return
  };
  for (let i = 0; i < numbers.length; i++) {

    numbers[i].innerHTML = cardInputNumber.value[i]
    if (numbers[i].innerHTML === 'undefined') {
      numbers[i].innerHTML = '#'
    }
  }


  let elem = document.getElementById(`${index}`)
  const spanUnu = document.createElement('span')
  spanUnu.setAttribute('id', `span_${index}`)
  elem.value = cardInputNumber.value
  elem.appendChild(spanUnu)
  elem.classList.remove('animation_down')
  elem.classList.add('animation')
})

cardInputNumber.addEventListener('keydown', (e) => {
  if (e.keyCode == 8) {
    let elem = document.getElementById(`${index}`)
    elem.removeChild(document.getElementById(`span_${index}`))
    elem.classList.remove('animation')
    elem.classList.add('animation_down')
    index--
    console.log(index)
  }
  else {
    index++
    console.log(index)
  }
})

cardInputName.addEventListener('click', () => {
  activeBox.classList.add('box_hidden');

  activeBox2.classList.remove('box_hidden');
  activeBox3.classList.add('box_hidden')
})

cardInputName.addEventListener('input', (e) => {

  cardName.value = (e.target.value).toUpperCase();
});


cardInputMonth.addEventListener('click', () => {
  activeBox2.classList.add('box_hidden');
  activeBox3.classList.remove('box_hidden')
  setTimeout(() => {
    if (a)
      activeBox3.classList.add('active_box_animation')
    // activeBox3.style.animation = 'none'
  }, 500)
})

cardInputYear.addEventListener('click', () => {
  activeBox2.classList.add('box_hidden');
  activeBox3.classList.remove('box_hidden')
  setTimeout(() => {
    activeBox3.classList.add('active_box_animation')
    // activeBox3.style.animation = 'none'
  }, 500)
})
cardInputMonth.addEventListener('input', (e) => {
  cardMonth.value = e.target.value
})

cardInputYear.addEventListener('input', (e) => {
  cardYear.value = e.target.value
})

cardInputCvc.onblur = () => {
  flip.classList.toggle("is-flipped");
  cardFace.classList.remove('hidden');
  cardBack.classList.toggle('hidden');
  activeBox3.classList.add('box_hidden')
  // cardFace.style.display = 'block';
  // cardBack.style.display = 'none';

}

cardInputCvc.onfocus = (e) => {
  flip.classList.toggle("is-flipped");
  cardFace.classList.toggle('hidden');
  cardBack.classList.toggle('hidden');
  // activeBox3.classList.toggle('active_box_animation')
  // cardFace.style.display = 'none';
  // cardBack.style.display = 'block';
  cardInputCvc.addEventListener('input', (e) => {
    let onlyNumbers = e.target.value.replace(/\D/g, '');
    e.target.value = onlyNumbers;
    cardCvc.value = e.target.value
    console.log(e.target.value)
  })
}










