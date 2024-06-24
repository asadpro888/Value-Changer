let box = document.querySelector('.chil');
let input = document.querySelector('input');

input.addEventListener('input', () => {
    box.style.borderRadius = input.value;
    box.style.backgroundColor = input.value;
    box.style.border = input.value;
    box.style.marginTop = input.value;
    box.style.textAlign = input.value;
    box.style.boxShadow = input.value;
})