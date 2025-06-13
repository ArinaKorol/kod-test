let btn = document.getElementById('btn');

btn.addEventListener("click", function() {
    let year = parseInt(document.getElementById('year').value);
    let currentYear = new Date().getFullYear();
    let result = document.getElementById('result');
    
    if (isNaN(year) || year > currentYear)  {
        result.textContent = 'Ошибка! Перепроверьте данные'
    } else {
        result.textContent = `Ваш возраст: ${currentYear - year}`
    }
 });
