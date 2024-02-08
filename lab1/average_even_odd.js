function getAvg() {
    let numbers = document.getElementById('nums').value.split(' ');
    
    let numbers_even = numbers.filter((num) => num % 2 == 0);
    let numbers_odd = numbers.filter((num) => num % 2 != 0);
    
    let avg_even = numbers_even.reduce((acc, num) => acc + parseInt(num), 0) / numbers_even.length;
    
    let avg_odd = numbers_odd.reduce((acc, num) => acc + parseInt(num), 0) / numbers_odd.length;

    document.getElementById('avg_even').innerHTML = `Even: ${avg_even}`;
    document.getElementById('avg_odd').innerHTML = `Odd: ${avg_odd}`;
}