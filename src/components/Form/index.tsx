import "./Form.css";
import { CandidateData } from "../types";
import { useForm, SubmitHandler } from "react-hook-form";
import fetchPost from "../../api/fetch";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CandidateData>();
  const onSubmit: SubmitHandler<CandidateData> = (data) => {
    fetchPost(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="date">
          Date:
          <input
            type="date"
            id="date"
            {...register("date", {
              required: true,
            })}
          />
        </label>
      </div>
      <div>
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            id="firstName"
            placeholder="enter first name"
            {...register("firstName", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
              maxLength: 20,
            })}
          />
        </label>
        {errors.firstName && <p>This field is required</p>}
      </div>
      <div>
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            id="lastName"
            placeholder="enter last name"
            {...register("lastName", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
        </label>
        {errors.lastName && <p>This field is required</p>}
      </div>
      <div>
        <label htmlFor="email">
          E-mail
          <input
            type="text"
            id="email"
            placeholder="E-mail"
            {...register("email", {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
            })}
          />
        </label>
        {errors.email && <p>Wrong email pattern</p>}
      </div>
      <div>
        <label htmlFor="phone">
          Phone
          <input
            type="text"
            id="phone"
            placeholder="Phone"
            {...register("phone", {
              required: true,
              pattern: /^[0-9]+$/,
              minLength: 12,
            })}
          />
        </label>
        {errors.phone && <p>Only 0-9 numbers, more than 12 numbers</p>}
      </div>
      <div>
        <label htmlFor="linkedIn">
          LinkedIn
          <input
            type="text"
            id="linkedIn"
            placeholder="url after www.linkedin.com/in/"
            {...register("linkedIn")}
          />
        </label>
      </div>
      <div>
        <label htmlFor="position">
          Position
          <select {...register("position")} id="position">
            <option value="trainee">Trainee</option>
            <option value="junior">Junior</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="JSSkill">
          JS Skill
          <input type="checkbox" id="JSSkill" {...register("JSSkill")} />
        </label>
      </div>
      <div>
        <fieldset>
          <legend>Framework</legend>
          <label htmlFor="react">
            <input
              type="checkbox"
              value="react"
              id="react"
              {...register("framework")}
            />
            React
          </label>
          <label htmlFor="angular">
            <input
              type="checkbox"
              value="angular"
              id="angular"
              {...register("framework")}
            />
            Angular
          </label>
          <label htmlFor="vue">
            <input
              type="checkbox"
              value="vue"
              id="vue"
              {...register("framework")}
            />
            Vue
          </label>
        </fieldset>
      </div>
      <div>
        <fieldset className="experience-block">
          <legend>Experience</legend>
          <label htmlFor="none">
            <input
              type="radio"
              id="none"
              value="0"
              {...register("experience")}
            />
            None
          </label>
          <label htmlFor="lessThan1year">
            <input
              type="radio"
              id="lessThan1year"
              value="<1 y"
              {...register("experience")}
            />
            0-1 year
          </label>
          <label htmlFor="lessThan2year">
            <input
              type="radio"
              id="lessThan2year"
              value="1-2 y>"
              {...register("experience")}
            />
            1-2 years
          </label>
          <label htmlFor="moreThan2year">
            <input
              type="radio"
              id="moreThan2year"
              value=">2 y"
              {...register("experience", { required: true })}
            />
            &gt;2 years
          </label>
        </fieldset>
        {errors.education && <p>This field is required</p>}
      </div>
      <div>
        <fieldset>
          <legend>Education</legend>
          <label htmlFor="self-study">
            <input
              type="radio"
              id="self-study"
              value="self-study"
              {...register("education", { required: true })}
            />
            Self-study
          </label>
          <label htmlFor="degree">
            <input
              type="radio"
              id="degree"
              value="degree"
              {...register("education", { required: true })}
            />
            Degree in IT
          </label>
          <label htmlFor="courses">
            <input
              type="radio"
              id="courses"
              value="courses"
              {...register("education", { required: true })}
            />
            Courses/Bootcamp
          </label>
        </fieldset>
        {errors.education && <p>This field is required</p>}
      </div>
      <div>
        <fieldset className="english-block">
          <legend>English</legend>
          <label htmlFor="A1">
            <input
              type="radio"
              id="A1"
              value="A1"
              {...register("english", { required: true })}
            />
            A1
          </label>
          <label htmlFor="A2">
            <input
              type="radio"
              id="A2"
              value="A2"
              {...register("english", { required: true })}
            />
            A2
          </label>
          <label htmlFor="B1">
            <input
              type="radio"
              id="B1"
              value="B1"
              {...register("english", { required: true })}
            />
            B1
          </label>
          <label htmlFor="B2">
            <input
              type="radio"
              id="B2"
              value="B2"
              {...register("english", { required: true })}
            />
            B2
          </label>
          <label htmlFor="C1">
            <input
              type="radio"
              id="C1"
              value="C1"
              {...register("english", { required: true })}
            />
            C1
          </label>
          <label htmlFor="C2">
            <input
              type="radio"
              id="C2"
              value="C2"
              {...register("english", { required: true })}
            />
            C2
          </label>
        </fieldset>
        {errors.english && <p>This field is required</p>}
      </div>
      <div>
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          rows={4}
          cols={30}
          placeholder="notes"
          {...register("notes")}
        ></textarea>
      </div>
      <div className="button-block">
        <input className="btn btn-submit" type="submit" value="Submit" />
        <input className="btn btn-reset" type="reset" value="Reset" />
      </div>
    </form>
  );
}
