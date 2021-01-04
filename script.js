if (location.hostname === 'www.repubblica.it' || location.hostname === 'www.lastampa.it') {
    fetch(window.location.href).then(function (response) {
        // The API call was successful!
        console.log('giornaligratis loaded article');
        return response.text();
    }).then(function (html) {
        // Convert the HTML string into a document object
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');

        // Get the whole article code
        var newABody = doc.querySelector('#article-body');
        let childOrig = document.getElementById('article-body');
        let parentOrig = childOrig.parentNode;
        parentOrig.replaceChild(newABody, childOrig);
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}
