var btn = document.querySelector('button');

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

function output(inp) {
    document.body.appendChild(document.createElement('pre')).innerHTML = inp;
}

btn.onclick = function(){
    var projectId = document.getElementById('projectId').value;
    fetch('http://localhost:3030/projects/' + projectId, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    })
    .then(response => response.json())
    .then(data => {
        var str = JSON.stringify(data, undefined, 4);
        output(syntaxHighlight(str));
    })// JSON-string from `response.json()` call
    .catch(error => console.error(error));
}
