function triggerExample1() {
	const element = document.querySelector('#example1');

	const storage = document.createElement('textarea');
	storage.value = element.innerHTML;
	element.appendChild(storage);

	storage.select();
	storage.setSelectionRange(0, 99999);
	document.execCommand('copy');
	element.removeChild(storage);
}

