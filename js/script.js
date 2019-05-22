'use strict';
(function(){

	var mainBox = document.querySelector('.container')
	var boxes = mainBox.querySelectorAll('div');
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

	for (var i = 0; i < boxes.length; i++) {

		var boxHeader = boxes[i].querySelector('header');
		var dataHeader = data[i].title;
		boxHeader.innerHTML += dataHeader;

		var boxId = boxes[i];
		var dataId = data[i].id;
		boxId.setAttribute('id', dataId);

		var boxContent = boxes[i].querySelector('p');
		var dataContent = data[i].content;
		boxContent.innerHTML += dataContent;

		/* działą, ale wrzuca wszystkie wartości tablicy categories do jednej klasy, a nie do kilku
		var dataClass = data[i].categories;
		boxId.setAttribute('class', dataClass)
		*/

		var dataClass = data[i].categories;
		for (var i = 0; i < dataClass.length; i++) {
			var dataClassItem = dataClass[i];
			//boxId.classList.add(dataClassItem);
			boxId.setAttribute('class', dataClassItem);
		};
	};
})(); 