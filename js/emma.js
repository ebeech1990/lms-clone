//start
document.getElementById('spe').addEventListener('keyup', function(e) {
    var kitten = document.getElementById('spe').value;
    kitten = kitten.toLowerCase();
    if (kitten.search('qwe') !== -1) {
        alert('potential watchlist');
    }
        if (kitten.search('americredit') !== -1) {
            alert('potential watchlist');
        }
        if (kitten.search('bay view') !== -1) {
            alert('potential watchlist');
        }
        if (kitten.search('nationwide equ') !== -1) {
            alert('potential watchlist');
        }
        if (kitten.search('the moss ') !== -1) {
            alert('potential watchlist');
        }
        if (kitten.search('kurt gei') !== -1) {
            alert('potential watchlist');
        }
        if (kitten.search('haier') !== -1) {
            alert('potential watchlist');
        }
        if (kitten.search('objekts') !== -1) {
            alert('potential watchlist');
        }

    document.getElementById('spe').value = kitten;
},false);
//end
