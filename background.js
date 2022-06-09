let input = null

setInterval(() => {
    document.getElementById("date").innerHTML = new Date();
}, 1000)

window.onload = function() {
    input = document.getElementById('quote')
    input.addEventListener('change', updateValue);
    chrome.storage.local.get(['quote'])
    .then(result => input.value = result['quote'] ? result['quote'] : '')
}

function updateValue(e) {
    chrome.storage.local.set({quote: e.target.value});
}
