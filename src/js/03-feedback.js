import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCAL_KEY = "feedback-form-state";
let data = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};

if (data) {
    for (let key in data) {
        form[key].value = data[key]
    }
}

form.addEventListener('input', throttle(saveData, 500));
form.addEventListener('submit', onSubmit)

function saveData(event) {
    const { name, value } = event.target;
    data[name] = value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data))
}

function onSubmit(event) {
    event.preventDefault();
    console.log({ email: email.value, message: message.value });
    if (email.value === '' || message.value === '') {
        return alert('All fields must be filled!');
    }
    localStorage.removeItem(LOCAL_KEY);
    event.currentTarget.reset();
    data = {};
}