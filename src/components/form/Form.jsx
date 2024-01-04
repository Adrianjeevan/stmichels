import React, { useState } from "react";

function Form() {
  const [data, setData] = useState({});
  const [submit, setSubmit] = useState(false);
  const [names, setNames] = useState("");
  const [classes, setClasses] = useState();
  const [places, setPlaces] = useState();
  const [numbers, setNumbers] = useState("");
  const [mails, setMails] = useState();

  const [letter, setLetter] = useState(false);
  const [mailer, setMailer] = useState(false);
  const [numerror, setNumerror] = useState(false);

  const [success, setSuccess] = useState(false);

  const getInputs = (value, name) => {
    let datas = { [name]: value };
    setData({ ...data, ...datas });
    setNames(data.name);
    setClasses(data.class);
    setNumbers(data.number);
    setPlaces(data.place);
    setMails(data.mail);
  };

  const submitClick = (e) => {
    //  e.preventDefault()
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var namet = names !== "";
    var numbert = numbers !== "";

    
    if (names !== "" && numbers !== "") {
      setSubmit(false);
      Email.send({
        SecureToken: "db780841-f439-45d3-9740-ad415aa8d1fd",
        To: "st.michelsenglishschool@gmail.com",
        From: "st.michelsenglishschool@gmail.com",
        Subject: "new enquiry",
        Body: data,
      }).then(
        (message) => alert(message),

        setSuccess(true)
      );
    } else if ((names == "") & (numbers == "")) {
      setSubmit(true);
    }
  };

  return (
    <div className="form">
      <div>
        <input
          required
          type="text"
          placeholder="Student Name* "
          name="name"
          id="name"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
        />

        {letter && <p>Name Must contain Only letters</p>}
      </div>

      <select
        name="Class"
        id="class"
        placeholder="Select Class"
        onChange={(e) => getInputs(e.target.value, e.target.name)}
        required
      >
        <option value="Baby Day Care">Select Classes</option>
        <option value="Baby Day Care">Baby Day Care</option>
        <option value="Baby Class">Baby Class</option>
        <option value="L.K.G">L.K.G</option>
        <option value="U.K.G">U.K.G</option>
        <option value="Class 1-10">Class 1-10</option>
      </select>

      <div>
        <input
          type="text"
          name="place"
          id="place"
          placeholder="Enter your Place"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
          required
        />
      </div>

      <div>
        <input
          type="text"
          name="contact"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          id="number"
          placeholder="Enter Your Mobile.no"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
          required
        />
        {numerror && <p>Must contain only numbers</p>}
      </div>

      <div>
        <input
          type="mail"
          name="mail"
          id="mail"
          placeholder="Enter Your E-mail"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
          required
        />

        {mailer && <p>enter valid mail</p>}
      </div>

      <div>{submit && <p>one or more field is empty!</p>}</div>

      {success && <div>Your Form has been Submitted</div>}

      <button
        className="roundbtn"
        onClick={(e, datas) => {
          submitClick(e, datas);
        }}
      >
        Send a message
      </button>
    </div>
  );
}

export default Form;
