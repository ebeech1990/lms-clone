document.getElementById('spe').addEventListener('keyup', function() {
    var kitten = document.getElementById('spe').value;
    kitten = kitten.toLowerCase();
    var searchStrings = ['qwe', 'americredit', 'bay view', 'nationwide equ', 'the moss ', 'kurt gei', 'haier', 'objekts'];
    for (var i = 0; i < searchStrings.length; i++) {
        if (kitten.search(searchStrings[i]) !== -1) {
            alert('potential watchlist');
        }
    }
