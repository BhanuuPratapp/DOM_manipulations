const ul = document.querySelector('.items');

ul.firstElementChild.textContent = 'Hello';
ul.firstElementChild.style.background = 'red';
//ul.secondElementChild.textContent = 'Hello';
ul.children[1].style.background = 'red';

//ul.children[1].innerText = 'Brad';
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>';


const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
 e.preventDefault();
 console.log(e.target.id);
 document.querySelector('#my-form').style.background = '#ccc';

 document.querySelector('body').classList.add('bg-dark');
 document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
 document.querySelector('.items').secondElementChild.innerHTML = '<h1>Hello</h1>';

})
