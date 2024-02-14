// пропишем функцию random
const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

// найдем кнопку
const btn = document.querySelector('#btn');
// повесим обработчик событий
btn.addEventListener('click', () => {
    btn.style.left = `${random(0, 40)}%`;
    btn.style.top = `${random(0, 40)}%`;
});
































// // функция рандом
// const random = (min, max) => {
//   const rand = min + Math.random() * (max - min + 1);
//   return Math.floor(rand);
// };

// // убегающая кнопка
// const btn = document.querySelector('#btn');
// btn.addEventListener('mouseenter', () => {
//     btn.style.left = `${random(0, 90)}%`;
//     btn.style.top = `${random(0, 90)}%`;
// });

// // победа
// btn.addEventListener('click',
//   () => alert('Congratulations! You hit the button! What are you doing with your life?')
// );