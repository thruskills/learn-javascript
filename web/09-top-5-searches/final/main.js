var list = document.querySelector('.output ol');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');
list.innerHTML = '';
var myHistory = [];
function search(){
    if (searchInput.value !== '') {
        myHistory.unshift(searchInput.value);

        list.innerHTML = '';

        for (var i = 0; i < myHistory.length; i++) {
            itemText = myHistory[i];
            var listItem = document.createElement('li');
            listItem.textContent = itemText;
            list.appendChild(listItem);
        }

        if (myHistory.length >= 5) {
            myHistory.pop();
        }

        searchInput.value = '';
        searchInput.focus();
    }
}
searchBtn.onclick = search;

searchInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        search();
    }
});