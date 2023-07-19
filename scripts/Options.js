const listOptions = document.querySelectorAll('.press-enter2');
var optionIndex = 1;

function EnablePressStart() {
    listOptions.forEach((option) => option.classList.remove('selected'));
    console.log('option-'+optionIndex);
    var currentOption = document.getElementById('option-'+optionIndex);
    currentOption.classList.add('selected');
    PressSound();
}

document.addEventListener('keyup', function(event) { 
    console.log(window.location.href);
    if (event.key === 'Enter') {
        if (window.location.href == './index.html') {
            window.location.href = './Options.html';
        }
        else {
            window.location.href = './Play.html';
        }
    }
    
    if(event.key === 'ArrowDown') {
        console.log(event.key);
        if(optionIndex < 4) {
            optionIndex++;
            EnablePressStart();
        }
    }

    if(event.key === 'ArrowUp') {
        console.log(event.key);
        if(optionIndex > 1) {
            optionIndex--;
            EnablePressStart();
        }
    }
});