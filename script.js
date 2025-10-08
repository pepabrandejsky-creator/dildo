document.getElementById('testForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Číselné otázky
    const q1 = parseInt(document.querySelector('input[name="q1"]').value);
    const q2 = parseInt(document.querySelector('input[name="q2"]').value);
    const q3 = parseInt(document.querySelector('input[name="q3"]').value);

    // Radiobutton otázky
    const q4Elem = document.querySelector('input[name="q4"]:checked');
    const q5Elem = document.querySelector('input[name="q5"]:checked');

    if (!q4Elem || !q5Elem) {
        alert('Vyber prosím všechny odpovědi Ano/Ne.');
        return;
    }

    const q4 = parseInt(q4Elem.value);
    const q5 = parseInt(q5Elem.value);

    const score = q1 + q2 + q3 + q4 + q5;

    // Hodnoty výsledků podle celkového skóre (3–17)
    let resultText = '';
    let resultColor = '';

    if (score <= 5) {
        resultText = 'hodně chill guy';
        resultColor = 'green';
    } else if (score <= 8) {
        resultText = 'jentak mě nic nenasere';
        resultColor = 'blue';
    } else if (score <= 12) {
        resultText = 'lolko je lolko ale dá se přežít';
        resultColor = 'gray';
    } else if (score <= 15) {
        resultText = 'sere mě to ale nechám to stáhlý';
        resultColor = 'orange';
    } else {
        resultText = 'hodně bych chtěl přestat hrát a hromas je lopaťák';
        resultColor = 'red';
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerText = `Výsledek: ${resultText}`;
    resultDiv.style.color = resultColor; // nastaví barvu výsledku
});


