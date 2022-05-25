const myForm = document.querySelector("#form");
const values = {
  firstName: "",
  email: "",
  tel: "",
  pesel: "",
  zipcode: "",
};

document.querySelector("#havePesel").onclick = () => {
  const disabled = document.querySelector("#pesel").disabled;
  disabled
    ? (document.querySelector("#pesel").disabled = false)
    : (document.querySelector("#pesel").disabled = true);
};

const sendEmail = (event) => {
  const firstName = document.querySelector("#firstName").value;
  const email = document.querySelector("#email").value;
  const tel = document.querySelector("#tel").value;
  const pesel = document.querySelector("#pesel").value;
  const havePesel = document.querySelector("#havePesel").checked;
  const zipcode = document.querySelector("#zipcode").value;

  event.preventDefault();

  //First name validation
  if (firstName.length < 40) {
    values.firstName = firstName;
  } else {
    document.querySelector("#firstNameValidation").innerHTML =
      "Za długie imię (maksymalnie 40 znaków)!";
  }

  //Email validation
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    values.email = email;
  } else {
    document.querySelector("#emailValidation").innerHTML = "Zły email";
  }

  //Phone number validation
  if (
    /(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/g.test(tel)
  ) {
    values.tel = tel;
  } else {
    document.querySelector("#telValidation").innerHTML = "Zły format numeru!";
  }

  //Zipcode validation
  values.pesel = pesel;
  if (/^([0-9]{2})(-[0-9]{3})?$/i.test(zipcode)) {
    values.zipcode = zipcode;
  } else {
    document.querySelector("#zipcodeValidation").innerHTML =
      "Zły format kodu pocztowego!";
  }
  myForm.reset();
  alert(JSON.stringify(values, null, 4));
};

myForm.addEventListener("submit", sendEmail);
