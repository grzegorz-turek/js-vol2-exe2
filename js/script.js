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

	var mainDiv = document.getElementById('content');
	for (var i = 0; i < data.length; i++) {
		var newDiv = document.createElement('div');
		mainDiv.appendChild(newDiv);
		var boxId = data[i].id;
		newDiv.setAttribute('id', boxId);
		var newHeader = document.createElement('header');
		newDiv.appendChild(newHeader);
		var boxHeader = data[i].title;
		newHeader.innerHTML = boxHeader;
		var boxContent = data[i].content;
		newDiv.innerHTML += boxContent;
		var dataClass = data[i].categories.join(' ');
		newDiv.setAttribute('class', dataClass);
	};
})(); 