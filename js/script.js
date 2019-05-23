'use strict';
(function(){
	var data = [
		{
			id: 'box1',
			title: 'First box',
			content: '<p>Lorem ipsum dolor sit amet!</p>',
			categories: ['highlighted', 'special-header', 'important']
		},
		{
			id: 'box2',
			title: 'Second box',
			content: '<p>Lorem ipsum dolor sit amet!</p>',
			categories: ['special-header', 'important']
		},
		{
			id: 'box3',
			title: 'Third box',
			content: '<p>Lorem ipsum dolor sit amet!</p>',
			categories: ['highlighted', 'important']
		},
		{
			id: 'box4',
			title: 'Fourth box',
			content: '<p>Lorem ipsum dolor sit amet!</p>',
			categories: ['highlighted']
		},
		{
			id: 'box5',
			title: 'Fifth box',
			content: '<p>Lorem ipsum dolor sit amet!</p>',
			categories: []
		}
	];

	for (var i = 0; i < data.length; i++) {
		var newDiv = document.createElement('div');
		var boxId = data[i].id;
		newDiv.setAttribute('id', boxId);

		var newHeader = document.createElement('header');
		var boxHeader = data[i].title;
		newHeader.innerHTML = boxHeader;


		var boxContent = data[i].content;
		newDiv.innerHTML = boxContent; //DEL
		document.body.append(newDiv);

		newDiv.append(newHeader);

		//var document.body = newDiv.parentNode;
		//document.body.insertBefore(newDiv, newHeader);
	}

/*
		// tworzy pusty węzeł elementu
		// bez ID, jakichkolwiek atrybutów lub jakiejkolwiek zawartości
		var sp1 = document.createElement('div');

		// daje to atrybut id nazwany 'newSpan'
		sp1.setAttribute("id", "testid");

		// tworzy jakąś zawartość dla nowo powstałego elementu.
		var sp1_content = document.createTextNode("Jest to nowy element span. ");

		// zwraca się, która treść ma być do nowego elementu.
		sp1.appendChild(sp1_content);

		var sp2 = document.getElementById("content");
		var parentDiv = sp2.parentNode;

		// wstawia nowy element do DOM przed sp2
		parentDiv.insertBefore(sp1, sp2);



	};

/*
		//działą, ale wrzuca wszystkie wartości tablicy categories do jednej klasy, a nie do kilku
		//var dataClass = data[i].categories;
		//boxId.setAttribute('class', dataClass)
		
		var dataClass = data[i].categories;
		for (var i = 0; i < dataClass.length; i++) {
			var dataClassItem = dataClass[i];
			//boxId.classList.add(dataClassItem);
			boxId.setAttribute('class', dataClassItem);
		};
	};
*/

})(); 