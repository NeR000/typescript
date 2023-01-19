import validator from 'validator';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (e: Event) {
  e.preventDefault();
  hideErrorMessages(this);
  checkForEmptyFormFields(username, email, password, password2);
  validateEmailField(email);
  comparePassword(password, password2);

  if (shouldSubmitForm(form)) {
    console.log('Formulário enviado');
    username.value = '';
    email.value = '';
    password.value = '';
    password2.value = '';
  }
});

function checkForEmptyFormFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) {
      showErrorMessage(input, 'Este campo não pode estar vazio');
    }
  });
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMsg = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;

  errorMsg.innerHTML = msg;
  formFields.classList.add('show-error-message');
}

function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.show-error-message')
    .forEach((item) => item.classList.remove('show-error-message'));
}

function validateEmailField(email: HTMLInputElement): void {
  const isEmail = validator.isEmail(email.value);

  if (!isEmail) showErrorMessage(email, 'Informe um email válido');
}

function comparePassword(
  password: HTMLInputElement,
  password2: HTMLInputElement,
) {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'As senhas devem ser iguais');
    showErrorMessage(password2, 'As senhas devem ser iguais');
  }
}

function shouldSubmitForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.show-error-message').forEach(() => (send = false));
  return send;
}
