import React, { useState } from "react";
import "./Form.css";
import { Candidate } from "../types";

const initialState: Candidate = {
  id: "",
  date: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  linkedIn: "",
  position: "trainee",
  JSSkill: false,
  framework: [],
  experience: "none",
  education: "self-study",
  english: "A1",
  notes: " ",
};

const initialStatePropForm = {
  firstNameValidated: true,
  lastNameValidated: true,
  emailValidated: true,
  phoneValidated: true,
  notesValidated: true,
  disabled: true,
};

function Form() {
  const [form, setForm] = useState(initialState);
  const [propForm, setPropForm] = useState(initialStatePropForm);
  function formValidator(event: any) {
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
        if (!value.match(/^[A-Za-z]+$/)) {
          setPropForm((prevForm) => {
            return {
              ...prevForm,
              firstNameValidated: false,
            };
          });
        } else {
          setPropForm((prevForm) => {
            return {
              ...prevForm,
              firstNameValidated: true,
            };
          });
        }
        break;
      case "lastName":
        if (!value.match(/^[A-Za-z]+$/)) {
          setPropForm((prevForm) => {
            return {
              ...prevForm,
              lastNameValidated: false,
            };
          });
        } else {
          setPropForm((prevForm) => {
            return {
              ...prevForm,
              lastNameValidated: true,
            };
          });
        }
        break;
      case "email":
        if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
          setPropForm((prevForm) => {
            return {
              ...prevForm,
              emailValidated: false,
            };
          });
        } else {
          setPropForm((prevForm) => {
            return {
              ...prevForm,
              emailValidated: true,
            };
          });
        }
        break;
      case "phone":
        if (!value.match(/^[0-9]+$/) || value.length < 12) {
          setPropForm((prevForm) => {
            return {
              ...prevForm,
              phoneValidated: false,
            };
          });
        } else {
          setPropForm((prevForm) => {
            return {
              ...prevForm,
              phoneValidated: true,
            };
          });
        }
        break;
      case "notes":
        if (value.length > 200) {
          setPropForm((prevForm) => {
            return {
              ...prevForm,
              notesValidated: false,
            };
          });
        } else {
          setPropForm((prevForm) => {
            return {
              ...prevForm,
              notesValidated: true,
            };
          });
        }
        break;
      default:
        console.log("wrong");
    }
  }

  function handleChange(event: any) {
    setPropForm((prevForm) => {
      return {
        ...prevForm,
        disabled: false,
      };
    });
    const { name, value, type, checked } = event.target;
    if (name !== "framework") {
      setForm((prevForm) => {
        return {
          ...prevForm,
          [name]: type === "checkbox" ? checked : value,
        };
      });
    } else {
      // @ts-ignore
      if (form.framework.includes(value)) {
        setForm((prevForm) => {
          return {
            ...prevForm,
            framework: prevForm.framework.filter(
              (framework) => framework !== value
            ),
          };
        });
      } else {
        // @ts-ignore
        setForm((prevForm) => {
          return {
            ...prevForm,
            framework: [...prevForm.framework, value],
          };
        });
      }
    }
  }

  function SubmitForm(e: any) {
    e.preventDefault();
    if (
      propForm.firstNameValidated &&
      propForm.lastNameValidated &&
      propForm.emailValidated &&
      propForm.phoneValidated &&
      propForm.notesValidated
    ) {
      setForm(initialState);
      console.log(form);
    } else {
      alert("You should fix mistakes");
    }
  }
  function handleClear(e: any) {
    setForm(initialState);
    setPropForm(initialStatePropForm);
  }

  return (
    <div>
      <form className="form" onSubmit={SubmitForm}>
        <div>
          <label htmlFor="numberList">ID: </label>
          <input
            type="text"
            id="id"
            name="id"
            placeholder="10"
            value={form.id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="12.02.2023"
            value={form.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First name"
            value={form.firstName}
            onChange={handleChange}
            onBlur={formValidator}
            style={
              propForm.firstNameValidated
                ? { borderColor: "black" }
                : { borderColor: "red" }
            }
            required
          />
          <p>
            {!propForm.firstNameValidated
              ? "Valid name include (A-Z) (a-z) (' space -)"
              : " "}
          </p>
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last name"
            value={form.lastName}
            onChange={handleChange}
            onBlur={formValidator}
            style={
              propForm.lastNameValidated
                ? { borderColor: "black" }
                : { borderColor: "red" }
            }
            required
          />
          <p>
            {!propForm.lastNameValidated
              ? "Valid name include (A-Z) (a-z) (' space -)"
              : " "}
          </p>
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            onBlur={formValidator}
            style={
              propForm.emailValidated
                ? { borderColor: "black" }
                : { borderColor: "red" }
            }
            required
          />
          <p>{!propForm.emailValidated ? "Wrong email pattern" : " "}</p>
        </div>
        <div>
          <label htmlFor="linkedIn">LinkedIn</label>
          <input
            type="text"
            id="linkedIn"
            name="linkedIn"
            placeholder="LinkedIn url"
            value={form.linkedIn}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone"
            minLength={12}
            value={form.phone}
            onChange={handleChange}
            onBlur={formValidator}
            style={
              propForm.phoneValidated
                ? { borderColor: "black" }
                : { borderColor: "red" }
            }
            required
          />
          <p>
            {!propForm.phoneValidated
              ? "Must contain only 0-9 numbers and at least 12 numbers"
              : " "}
          </p>
        </div>
        <div>
          <label htmlFor="position"> Position</label>
          <select
            id="position"
            value={form.position}
            onChange={handleChange}
            name="position"
          >
            <option value="trainee">Intern</option>
            <option value="junior">Junior</option>
          </select>
        </div>
        <div>
          <label htmlFor="JSSkill"> JS Skill</label>

          <input
            type="checkbox"
            id="JSSkill"
            name="JSSkill"
            // @ts-ignore
            checked={form.JSSkill}
            onChange={handleChange}
          />
        </div>
        <fieldset>
          <legend>Framework</legend>
          <input
            type="checkbox"
            id="react"
            name="framework"
            value="react"
            checked={form.framework.includes("react")}
            onChange={handleChange}
          />
          <label htmlFor="react"> React</label>
          <br />
          <input
            type="checkbox"
            id="angular"
            name="framework"
            value="angular"
            checked={form.framework.includes("angular")}
            onChange={handleChange}
          />
          <label htmlFor="angular"> Angular</label>
          <br />
          <input
            type="checkbox"
            id="vue"
            name="framework"
            value="vue"
            checked={form.framework.includes("vue")}
            onChange={handleChange}
          />
          <label htmlFor="vue"> Vue</label>
        </fieldset>
        <div>
          <fieldset className="experience-block">
            <legend>Experience</legend>
            <input
              type="radio"
              id="none"
              name="experience"
              value="none"
              checked={form.experience === "none"}
              onChange={handleChange}
            />
            <label htmlFor="none">None</label>
            <br />
            <input
              type="radio"
              id="lessThan1year"
              name="experience"
              value="lessThan1year"
              checked={form.experience === "lessThan1year"}
              onChange={handleChange}
            />
            <label htmlFor="lessThan1year">0-1 year</label>
            <br />
            <input
              type="radio"
              id="lessThan2year"
              name="experience"
              value="lessThan2year"
              checked={form.experience === "lessThan2year"}
              onChange={handleChange}
            />
            <label htmlFor="lessThan2year">1-2 years</label>
            <br />
            <input
              type="radio"
              id="moreThan2year"
              name="experience"
              value="moreThan2year"
              checked={form.experience === "moreThan2year"}
              onChange={handleChange}
            />
            <label htmlFor="moreThan2year"> &gt;2 years</label>
          </fieldset>
        </div>
        <div>
          <fieldset>
            <legend>Education</legend>
            <input
              type="radio"
              id="self-study"
              name="education"
              value="self-study"
              checked={form.education === "self-study"}
              onChange={handleChange}
            />
            <label htmlFor="self-study">Self-study</label>
            <br />
            <input
              type="radio"
              id="degree"
              name="education"
              value="degree"
              checked={form.education === "degree"}
              onChange={handleChange}
            />
            <label htmlFor="degree">Degree in IT</label>
            <br />
            <input
              type="radio"
              id="courses"
              name="education"
              value="courses"
              checked={form.education === "courses"}
              onChange={handleChange}
            />
            <label htmlFor="courses">Courses/Bootcamp</label>
          </fieldset>
        </div>
        <div>
          <fieldset className="english-block">
            <legend>English</legend>
            <input
              type="radio"
              id="A1"
              name="english"
              value="A1"
              checked={form.english === "A1"}
              onChange={handleChange}
            />
            <label htmlFor="A1">A1</label>
            <br />
            <input
              type="radio"
              id="A2"
              name="english"
              value="A2"
              checked={form.english === "A2"}
              onChange={handleChange}
            />
            <label htmlFor="A2">A2</label>
            <br />
            <input
              type="radio"
              id="B1"
              name="english"
              value="B1"
              checked={form.english === "B1"}
              onChange={handleChange}
            />
            <label htmlFor="B1">B1</label>
            <br />
            <input
              type="radio"
              id="B2"
              name="english"
              value="B2"
              checked={form.english === "B2"}
              onChange={handleChange}
            />
            <label htmlFor="B2">B2</label>
            <br />
            <input
              type="radio"
              id="C1"
              name="english"
              value="C1"
              checked={form.english === "C1"}
              onChange={handleChange}
            />
            <label htmlFor="C1">C1</label>
            <br />
            <input
              type="radio"
              id="C2"
              name="english"
              value="C2"
              checked={form.english === "C2"}
              onChange={handleChange}
            />
            <label htmlFor="C2">C2</label>
          </fieldset>
        </div>
        <div>
          <label htmlFor="notes">Notes</label>
          <textarea
            name="notes"
            id="notes"
            // @ts-ignore
            rows="4"
            // @ts-ignore
            cols="30"
            placeholder="notes"
            value={form.notes}
            onChange={handleChange}
            onBlur={formValidator}
            style={
              propForm.notesValidated
                ? { borderColor: "black" }
                : { borderColor: "red" }
            }
          ></textarea>
          <p>
            {!propForm.notesValidated
              ? "Please decrease text area <200 characters"
              : ""}
          </p>
        </div>
        <div className="button-block">
          <input className="btn-submit" type="submit" value="Submit" />
          <input
            className="btn-reset"
            type="reset"
            value="Reset"
            disabled={propForm.disabled}
            onClick={handleClear}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
