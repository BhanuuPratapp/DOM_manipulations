<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  <title>Item Lister</title>
</head>
<body>
<header id="main-header" class="bg-success text-white p-4 mb-3">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
            <h1 id="header-title">Item Lister</h1>
        </div>
        <div class="col-md-6 align-self-center">
            <input type="text" class="form-control" id="filter" placeholder="Search Items...">
        </div>
      </div>
    </div>
  </header>
  <div class="container">
   <div id="main" class="card card-body">
    <h2 class="title">Add Items</h2>
    <form onsubmit="saveToLocalStorage(event)" id="addForm" class="form-inline mb-3">
      <input type="text"  class="form-control mr-2" id="item">
      <input type="submit" class="btn btn-dark" value="Submit">
    </form>
    <h2 class="title">Items</h2>
    <ul id="items" class="list-group">
      <li class="list-group-item">Item 1 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
      <li class="list-group-item">Item 2 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
      <li class="list-group-item">Item 3 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
      <li class="list-group-item">Item 4 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
    </ul>
   </div>
  </div>
  <script>
   function saveToLocalStorage(event) {
    event.preventDefault();
    let myobj = {
     name : event.target.item.value,
    }
   let myobj_serialized = JSON.stringify(myobj);
   localStorage.setItem('value', myobj_serialized);
   let name_deserialized = JSON.parse(localStorage.getItem('value'));
   console.log(name_deserialized);
   
}
  </script>
</body>
</html>
