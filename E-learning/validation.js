document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = this;
    const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');
    let errors = [];

    
    requiredFields.forEach(field => {
        field.style.borderColor = ''; 
    });

    // tsekarei an ola ta pedia einai simpliromena
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            errors.push(`Το πεδίο "${field.previousElementSibling.textContent}" είναι υποχρεωτικό.`);
            field.style.borderColor = 'red'; // kanei highlight ta kena pedia
        }
    });

    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();

    // eleegxei an oi kodikoi einai idioi
    if (password !== confirmPassword) {
        errors.push('Τα passwords δεν ταιριάζουν.');
        document.getElementById('password').style.borderColor = 'red';
        document.getElementById('confirm-password').style.borderColor = 'red';
    }

    // elegxei an eisai apo 18 kai panw
    const age = today.getFullYear() - birthdate.getFullYear();
    if (age < 18 || (age === 18 && today < new Date(birthdate.setFullYear(today.getFullYear())))) {
        errors.push('Πρέπει να είστε τουλάχιστον 18 ετών.');
        document.getElementById('birthdate').style.borderColor = 'red';
    }

    // deixnei pou exoun ginei ta errors
    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        alert('Επιτυχής Εγγραφή!');
        form.submit();
    }
});
