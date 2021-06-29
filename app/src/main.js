//import $ from 'jquery';
// Get Page List
function getPageList() {
	$('h1').remove();
	$.get('./api', data => {
		data.forEach(file => {
			$('body').append(`<h1>${file}</h1>`);
		});
	}, "JSON");
}
getPageList(); // загрузка страницы
// /Get Page List
// Create New Page
$('button').click( () => {
	$.post('./api/createNewPage.php', {
		"name": $('input').val()
	}, () => {
		getPageList(); // Создание новой страницы
	})
	.fail (() => {
		alert('Такая страница уже существует');
	});
});
// /Create New Page