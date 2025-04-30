function copyAddress() {
    const address = document.querySelector('.wallet').innerText;
    navigator.clipboard.writeText(address).then(() => {
        alert('Адресу скопійовано!');
    });
}
