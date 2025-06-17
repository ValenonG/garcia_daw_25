var form = document.getElementById('subscription-form');
var inputs = form.querySelectorAll('input');
var title = document.getElementById('form-title');
var nameInput = document.getElementById('name-complete');
window.onload = function () {
  var storedData = localStorage.getItem('subscriptionResponse');
  if (storedData) {
    var parsed = JSON.parse(storedData);
    inputs.forEach(function(input) {
      var value = parsed[input.name];
      if (value !== undefined) {
        input.value = value;
        if (input.name === 'name-complete') {
          updateTitle();
        }
      }
    });
  }
};

var modal = document.getElementById('modal');
var modalTitle = document.getElementById('modal-title');
var modalMessage = document.getElementById('modal-message');
var modalResponse = document.getElementById('modal-response');
var modalClose = document.getElementById('modal-close');

modalClose.onclick = function () {
  modal.classList.add('hidden');
};

function showError(input, message) {
  var errorSpan = document.getElementById('error-' + input.name);
  if (errorSpan) {
    errorSpan.textContent = message;
  }
  input.style.borderColor = 'red';
}


function hideError(input) {
  var errorSpan = document.getElementById('error-' + input.name);
  if (errorSpan) {
    errorSpan.textContent = '';
  }
  input.style.borderColor = 'blue';
}


function validateInput(input) {
  var value = input.value.trim();
  var name = input.name;

  if (value === '') {
    return 'Este campo es obligatorio.';
  }

  switch (name) {
    case 'name-complete':
      if (value.length <= 6 || !value.includes(' ')) {
        return 'Debe tener más de 6 letras y al menos un espacio.';
      }
      break;
    case 'email':
      if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(value)) {
        return 'Ingrese un email válido.';
      }
      break;
    case 'password':
      if (!/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(value)) {
        return 'Al menos 8 caracteres, con letras y números.';
      }
      break;
    case 'repeat-password':
      if (value !== form.password.value) {
        return 'Las contraseñas no coinciden.';
      }
      break;
    case 'age':
      var ageNum = parseInt(value, 10);
      if (isNaN(ageNum) || ageNum < 18) {
        return 'Debe ser mayor de 18 años.';
      }
      break;
    case 'telephone':
      if (!/^[0-9]{7,}$/.test(value)) {
        return 'Teléfono inválido. Solo números, al menos 7 dígitos.';
      }
      break;
    case 'address':
      if (value.length < 5 || !value.includes(' ')) {
        return 'Dirección inválida. Al menos 5 caracteres con espacio.';
      }
      break;
    case 'city':
      if (value.length < 3) {
        return 'Ciudad debe tener al menos 3 caracteres.';
      }
      break;
    case 'zip-code':
      if (value.length < 3) {
        return 'Código postal debe tener al menos 3 caracteres.';
      }
      break;
    case 'dni':
      var dniNum = parseInt(value, 10);
      if (isNaN(dniNum) || dniNum < 1000000 || dniNum > 99999999) {
        return 'Ingrese un DNI válido (7 u 8 dígitos).';
      }
      break;
  }

  return '';
}


function updateTitle() {
  var nameValue = nameInput.value.trim();
  title.textContent = nameValue ? 'HOLA ' + nameValue : 'Formulario de suscripción';
}


inputs.forEach(function(input) {
  input.addEventListener('blur', function() {
    var error = validateInput(input);
    if (error) {
      showError(input, error);
    } else {
      hideError(input);
    }
  });

  input.addEventListener('focus', function() {
    hideError(input);
  });

  if (input.name === 'name-complete') {
    input.addEventListener('input', updateTitle);
  }
});


form.addEventListener('submit', function (e) {
  e.preventDefault();

  var isValid = true;
  var data = {};
  var i;

  for (i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    var error = validateInput(input);
    if (error) {
      showError(input, error);
      isValid = false;
    } else {
      hideError(input);
      data[input.name] = input.value.trim();
    }
  }

  if (!isValid) {
    modalTitle.textContent = 'Error en la validación';
    modalMessage.textContent = 'Por favor, corregí los errores en el formulario.';
    modalResponse.textContent = '';
    modal.classList.remove('hidden');
    return;
  }

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(function (response) {
      if (!response.ok) {
        return response.text().then(function (text) {
          throw new Error(text || 'Error en la suscripción');
        });
      }
      return response.json();
    })
    .then(function (responseData) {
      modalTitle.textContent = '¡Suscripción exitosa!';
      modalMessage.textContent = 'Gracias por suscribirte. Estos son los datos recibidos del servidor:';
      modalResponse.textContent = JSON.stringify(responseData, null, 2);
      modal.classList.remove('hidden');

      localStorage.setItem('subscriptionResponse', JSON.stringify(responseData));
      form.reset();
      title.textContent = 'Formulario de suscripción';
    })
    .catch(function (error) {
      modalTitle.textContent = 'Error en la suscripción';
      modalMessage.textContent = 'No se pudo completar la suscripción.';
      modalResponse.textContent = error.message;
      modal.classList.remove('hidden');
    });
});

