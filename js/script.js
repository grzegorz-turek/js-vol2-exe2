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
		var mainDiv = document.getElementById('content'); //
		mainDiv.appendChild(newDiv); //

		var boxId = data[i].id;
		newDiv.setAttribute('id', boxId);

		var newHeader = document.createElement('header');
		newDiv.appendChild(newHeader);

		var boxHeader = data[i].title;
		newHeader.innerHTML = boxHeader;

		var boxContent = data[i].content;
		newDiv.innerHTML += boxContent;

		var dataClass = data[i].categories;
		for (var i = 0; i < dataClass.length; i++) {
			var dataClassSingle = dataClass[i];
			newDiv.setAttribute('class', dataClassSingle);
		};
	};

		//działą, ale wrzuca wszystkie wartości tablicy categories do jednej klasy, a nie do kilku
		//var dataClass = data[i].categories;
		//boxId.setAttribute('class', dataClass)

})(); 