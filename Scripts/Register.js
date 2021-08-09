const Password1 = document.getElementById('password1');
const Password2 = document.getElementById('password2');

const passwordcheck = () => {
  if (
    Password1.value.length < 5 ||
    Password1.value === undefined ||
    Password1.value !== Password2.value
  ) {
    alert('Entered password is less than 5 charecters or Password missmatch');
    return false;
  } else {
    true;
  }
};
