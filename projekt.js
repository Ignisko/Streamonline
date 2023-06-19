document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('form');
  const nameInput = document.querySelector('input[name="name"]');
  const surnameInput = document.querySelector('input[name="surname"]');
  const wojewodztwaSelect = document.querySelector('select[name="wojewodztwa"]');
  const interestsTextarea = document.querySelector('textarea[name="interests"]');
  const agreementCheckbox = document.querySelector('input[name="agreement"]');
  const submitButton = document.querySelector('input[name="submit"]');
  
  const savedDataDiv = document.createElement('div');
  const changeButton = document.createElement('button');
  changeButton.textContent = 'Zmień';
  document.body.append(savedDataDiv);
  document.body.append(changeButton);
  savedDataDiv.style.display = 'none';
  changeButton.style.display = 'none';
  
  // Load saved data from local storage
  const savedData = JSON.parse(localStorage.getItem('formData'));
  if (savedData) {
    form.style.display = 'none';
    savedDataDiv.style.display = 'block';
    changeButton.style.display = 'block';
    savedDataDiv.textContent = JSON.stringify(savedData, null, 2);
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple validation
    if (!nameInput.value || !surnameInput.value) {
      alert('Proszę wypełnić pola Imię i Nazwisko');
      return;
    }

    const formData = {
      name: nameInput.value,
      surname: surnameInput.value,
      wojewodztwo: wojewodztwaSelect.value,
      interests: interestsTextarea.value,
      agreement: agreementCheckbox.checked,
    };
    
    // Save data to local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    
    // Display saved data and hide form
    form.style.display = 'none';
    savedDataDiv.style.display = 'block';
    changeButton.style.display = 'block';
    savedDataDiv.textContent = JSON.stringify(formData, null, 2);
  });

  changeButton.addEventListener('click', function() {
    // Load data from local storage and fill form
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      nameInput.value = savedData.name;
      surnameInput.value = savedData.surname;
      wojewodztwaSelect.value = savedData.wojewodztwo;
      interestsTextarea.value = savedData.interests;
      agreementCheckbox.checked = savedData.agreement;
    }

    // Hide saved data and display form
    form.style.display = 'block';
    savedDataDiv.style.display = 'none';
    changeButton.style.display = 'none';
  });
});
console.log("stert")


