var createNode = function(ul, li, txt) {
    var div = document.createElement('div'),
        ul = document.createElement(ul);
    var txtNode, list;
    // loop trough the li arr and call createLi fn
    // with 
    for (var i in li) {
		list = createLi(li[i]);
        list.style.padding = '10px 0';
        txtNode = document.createTextNode(txt);
        list.appendChild(txtNode); // add text content to li's
        ul.appendChild(list);
    }
    
    div.appendChild(ul);
    div.style.with = '50%';
    div.style.margin = '0 auto';
    // Style for the ul
	ul.id = 'chopping-list'; 
    ul.with = '100%';
	ul.style.listStyleType = 'none';
    ul.style.fontFamily = 'Helvetica, verdana, sans-serif'; 
	ul.style.textAlign = 'center';
    // get the nodes parend, child, and sibling
	var firstItem = ul.firstChild;
	var secondItem = firstItem.nextSibling;
	var lastItem = ul.lastChild;
	// add a class attr and value to li's
	firstItem.className = 'One';
	secondItem.className = 'Two';
	lastItem.className = 'Three';
	// Get all li element
	var ulNodesList = [firstItem, secondItem, lastItem];
	for (var i in ulNodesList) {
		styleListItem(ulNodesList[i]);
	} 
	
	document.body.appendChild(div);
// return ul;
};

// create on li 
function createLi(li) {
  return document.createElement(li);
    
}

// Style the list items
function styleListItem(li) {
	switch(li.className) {
        case 'One':
			li.style.backgroundColor = '#00f';
			li.style.color = '#fff';
			break;
        case 'Two':
		 	li.style.backgroundColor = '#ff0';
			li.style.color = '#fff';
			break;
		case 'Three':
		 	li.style.backgroundColor = '#f00';
			li.style.color = '#fff';
			break;
        default:
			li.style.backgroundColor = '#f0f';
			li.style.color = '#fff';
	}
return li;
}

createNode('ul', ['li', 'li', 'li', 'li'], 'List', 'List Item');