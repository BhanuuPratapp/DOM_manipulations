/*var itemList = document.querySelector('#items');
//parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor="#f4f4f4";
console.log(itemList.parentNode.parentNode.parentNode);
//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="#f4f4f4";
console.log(itemList.parentElement.parentElement.parentElement);

//chileNodes
console.log(itemList.childNodes);
//dont use childNodes..it will also show the text field which is basically white space and that is just pain in the ass
console.log(itemList.children);
//use this instead..no text field
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor= 'yellow';
console.log(itemList.firstChild);
//not useful..gives us text field..consider white space

console.log(itemList.firstElementChild);
itemList.lastElementChild.textContent = 'Hello';
//next sibling
console.log(itemList.nextSibling);
//not useful
console.log(itemList.nextElementSibling);
//useful
console.log(itemList.previousSibling);
//not useful
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';
 //create div

 var newDiv = document.createElement('div');
 //add class in div
 newDiv.className = 'hello'
 //add id
 newDiv.id = 'hello1';
 //add title
 newDiv.setAttribute('title','Hello Div');
 //create text node
 var newDivText = document.createTextNode('Hello world');
 //add text to div
 newDiv.appendChild(newDivText);
 var container = document.querySelector('header .container');
 var h1 = document.querySelector('header h1');


 //console.log(newDiv);
 newDiv.style.fontSize ='30px';
 container.insertBefore(newDiv, h1);
 console.log(newDiv);

 let parentNode = document.getElementById('items');
 
 console.log(parentNode);
 var newli = document.createElement('li');
 var  newlitext= document.createTextNode('Hello world');
newli.appendChild(newlitext);
 //parentNode.innerHTML = newli + parentNode.innerHTML;
 console.log(newli);
 newFile =  '<li>Hello World</li>';
 parentNode.innerHTML = '<li>Hello World</li>'+ parentNode.innerHTML;
*/
/*
 var form = document.getElementById('addForm');
 var itemList = document.getElementById('items');

 form.addEventListener('submit', addItem);
 //itemList.addEventListener('click', removeItem);

 function addItem(e){
  e.preventDefault();
 }
 
 var newItem = document.getElementById('main1').value;

 var li= document.createElement('li');

 li.className = 'list-group-item';
 li.appendChild(document.createTextNode(newItem));


//var delbutton = document.createElement('button');
//delbutton.className = 'btn btn-danger btn-sm float-right delete';

//delbutton.appendChild(document.createTextNode('x'));
//li.appendChild(delbutton);

itemList.appendChild(li);

function removeItem(e)
{
if(e.target.classList.contains('delete')){
    if(confirm('Are you sure')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
}
}
var editbutton = document.createElement('button');
editbutton.appendChild(document.createTextNode('EDIT'));
li.appendChild(editbutton);
itemList.appendChild(li);
*/
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
//filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');
  var editbutton = document.createElement('button');
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editbutton.className = 'btn btn-danger btn-sm float-righta delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  editbutton.appendChild(document.createTextNode('EDIT'));
  
  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editbutton);
  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//editbutton.appendChild(document.createTextNode('EDIT'));
//li.appendChild(editbutton);
//itemList.appendChild(li);
