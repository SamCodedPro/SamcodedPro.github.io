let add = document.getElementById('add-count');
let lower = document.getElementById('lower-count');

let int = document.getElementById('number');
let integer = 0;

add.addEventListener('click', function(){
	integer += 1;
	int.innerHTML = integer;
})

lower.addEventListener('click', function(){
	integer -= 1;
	int.innerHTML = integer;
})
