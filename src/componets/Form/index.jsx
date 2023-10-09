import { useState, useEffect } from "react";
import "./styles.css";

function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (email) {
      validateEmail();
    }
  }, [email]);

  useEffect(() => {
    if (phone) {
      validatePhone();
    }
  }, [phone]);

  async function validateEmail() {
    try {
      const urlEmail =
        "https://community-neutrino-email-validate.p.rapidapi.com/email-validate";
      const options = {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key":
            "1ce4f9e209mshebfae2dc8980898p169950jsne1f43d5bf573",
          "X-RapidAPI-Host": "community-neutrino-email-validate.p.rapidapi.com",
        },
        body: new URLSearchParams({
          email: email,
        }),
      };

      const response = await fetch(urlEmail, options);
      const result = await response.json();

      if (result.valid) {
        setValidEmail(true);
      } else {
        setValidEmail(false);
        setFormError("O endereço de e-mail não é válido.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function validatePhone() {
    const url = `https://veriphone.p.rapidapi.com/verify?phone=${phone}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1ce4f9e209mshebfae2dc8980898p169950jsne1f43d5bf573",
        "X-RapidAPI-Host": "veriphone.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setValidPhone(result.phone_valid);
    } catch (error) {
      console.error(error);
    }
  }

  function handleClick(e) {
    e.preventDefault();

    if (name && validEmail && validPhone) {
      console.log("success");
    } else {
      setFormError("Preencha todos os campos corretamente.");
      console.log(validEmail, validPhone);
    }
  }

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className="containerForm">
      <h1>Personal Info</h1>
      <h4>Please provide your name, email address, and phone number.</h4>
      <div className="sectionInput">
        <form className="form">
          <label>
            Name
            <input
              onChange={handleChangeName}
              type="text"
              name="name"
              value={name}
            />
          </label>
          <label>
            Email Address
            <input
              onChange={handleChangeEmail}
              type="email"
              name="email"
              value={email}
            />
          </label>
          <label>
            Phone Number
            <input
              onChange={handleChangePhone}
              type="tel"
              name="phone"
              value={phone}
            />
          </label>
          <button onClick={handleClick} className="button" type="submit">
            Next Step
          </button>
          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    </div>
  );
}

export default Form;
