import { useState } from "react";
import { usernameValidator, dateValidator } from "./Validators";

function App() {
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isFirstNameFocus, setIsFirstNameFocus] = useState(false);

  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isLastNameFocus, setIsLastNameFocus] = useState(false);

  const [isGenderValid, setIsGenderValid] = useState(false);
  const [isGenderFocus, setIsGenderFocus] = useState(false);

  const [isDateValid, setIsDateValid] = useState(false);
  const [isDateFocus, setIsDateFocus] = useState(false);

  const [isResponseValid, setIsResponseValid] = useState(false);
  const [isResponseFocus, setIsResponseFocus] = useState(false);

  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const handleFirstNameChange = (event) => {
    setIsFirstNameValid(usernameValidator(event.target.value));
  };

  const handleLastNameChange = (event) => {
    setIsLastNameValid(usernameValidator(event.target.value));
  };

  const handleGenderChange = (event) => {
    setIsGenderValid(event.target.value);
  };

  const handleDateChange = (event) => {
    setIsDateValid(dateValidator(event.target.value));
  };

  const handleResponseChange = (event) => {
    setIsResponseValid(usernameValidator(event.target.value));
  };

  const showToast = (content, status) => {
    let toast = document.querySelector(".toast");
    let toastContent = document.getElementById("toast-content");
    toastContent.innerText = content;
    toast.classList.remove("hidden");

    if (status === 1) {
        document.querySelector('alert').classList.add("alert-success");
    } else {
        document.querySelector('alert').classList.add("alert-error");
    }

    setTimeout(() => {
      toast.classList.add("hidden");
      document.querySelector('alert').classList.remove("alert-success");
      document.querySelector('alert').classList.remove("alert-success");
    }
    , 3000);
  };

  const submitForm = () => {
    let data = {
      firstName: document.getElementById("first-name").value,
      lastName: document.getElementById("last-name").value,
      gender: document.getElementById("gender").value,
      date: document.getElementById("date").value,
      response: document.getElementById("response").value,
    };
    // Send data to the server
    fetch("http://localhost:5000/send_response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
            showToast(data.message, 1);
        }
        if (data.status === "error") {
            showToast(data.message, 0);
          }
      })
      .catch((error) => {
        showToast("Something went wrong, please try again later", 0);
      });
  };
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div class="toast hidden">
          <div class="alert alert-info">
            <span id="toast-content"></span>
          </div>
        </div>

        <div
          className="p-6 flex flex-col items-center justify-center border rounded-lg border-gray-500"
          style={{ width: "90%", maxWidth: "500px" }}
        >
          <fieldset className="fieldset w-2/3">
            <legend className="fieldset-legend">First Name</legend>
            <input
              id="first-name"
              type="text"
              className={`input w-full outline-none focus:ring-0 focus:outline-none ${
                isFirstNameFocus
                  ? !isFirstNameValid
                    ? "input-error"
                    : "input-success"
                  : ""
              }`}
              onChange={handleFirstNameChange}
              onFocus={() => setIsFirstNameFocus(true)}
              placeholder="Chames"
            />
            <p
              className={`fieldset-label text-error ${
                isFirstNameFocus && !isFirstNameValid ? "" : "hidden"
              }`}
            >
              First name must be longer than 3 letters
            </p>
          </fieldset>

          <fieldset className="fieldset w-2/3">
            <legend className="fieldset-legend">Last Name</legend>
            <input
              id="last-name"
              type="text"
              className={`input w-full outline-none focus:ring-0 focus:outline-none ${
                isLastNameFocus
                  ? !isLastNameValid
                    ? "input-error"
                    : "input-success"
                  : ""
              }`}
              onChange={handleLastNameChange}
              onFocus={() => setIsLastNameFocus(true)}
              placeholder="Dinuka"
            />
            <p
              className={`fieldset-label text-error ${
                isLastNameFocus && !isLastNameValid ? "" : "hidden"
              }`}
            >
              First name must be longer than 3 letters
            </p>
          </fieldset>

          <fieldset className="fieldset w-2/3">
            <legend className="fieldset-legend">Gender</legend>
            <select
              id="gender"
              className={`input w-full outline-none focus:ring-0 focus:outline-none ${
                isGenderFocus
                  ? !isGenderValid
                    ? "input-error"
                    : "input-success"
                  : ""
              }`}
              onChange={handleGenderChange}
              onFocus={() => setIsGenderFocus(true)}
            >
              <option disabled selected>
                Select Your Gender
              </option>
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
              <option value={"unknown"}>Prefer not to say</option>
            </select>
            <p
              className={`fieldset-label text-error ${
                isGenderFocus && !isGenderValid ? "" : "hidden"
              }`}
            >
              Please select an option
            </p>
          </fieldset>

          <fieldset className="fieldset w-2/3">
            <legend className="fieldset-legend">Birth of Date</legend>
            <input
              id="date"
              type="date"
              className={`input w-full outline-none focus:ring-0 focus:outline-none ${
                isDateFocus
                  ? !isDateValid
                    ? "input-error"
                    : "input-success"
                  : ""
              }`}
              onChange={handleDateChange}
              onFocus={() => setIsDateFocus(true)}
            />
            <p
              class={`fieldset-label text-error ${
                isDateFocus && !isDateValid ? "" : "hidden"
              }`}
            >
              You must be over 16 to response
            </p>
          </fieldset>

          <fieldset className="fieldset w-2/3 pb-4">
            <legend className="fieldset-legend">Your response</legend>
            <textarea
              id="response"
              className={`textarea h-24 outline-none focus:ring-0 focus:outline-none ${
                isResponseFocus
                  ? !isResponseValid
                    ? "input-error"
                    : "input-success"
                  : ""
              }`}
              onChange={handleResponseChange}
              onFocus={() => setIsResponseFocus(true)}
              placeholder="Response"
            ></textarea>
            <p
              className={`fieldset-label text-error ${
                isResponseFocus && !isResponseValid ? "" : "hidden"
              }`}
            >
              Response must be longer
            </p>
          </fieldset>

          <fieldset className="fieldset w-2/3">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="checkbox checked:bg-indigo-500 mr-2 mb-1"
                onChange={(e) => setIsTermsChecked(e.target.checked)}
              />
              I agree to the terms and conditions (required)
            </label>
          </fieldset>
          <button
            className="btn w-2/3 bg-primary"
            disabled={
              !isFirstNameValid ||
              !isLastNameValid ||
              !isGenderValid ||
              !isDateValid ||
              !isResponseValid ||
              !isTermsChecked
            }
            onClick={submitForm}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
