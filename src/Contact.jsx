import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const Contact = () => {
  const schema = yup
    .object({
      firstName: yup
        .string()
        .lowercase()
        .required("Please fill in your name")
        .min(2, "Your name isnt that short"),
      eventName: yup
        .string()
        .lowercase()
        .required("Don't forget to name the event")
        .max(25, "YEah ok buddy, the event name isnt that long"),
      email: yup
        .string()
        .required("Please fill in your email")
        .email("must be a vlid one sir or mam"),
      age: yup
        .number()
        .typeError("Please fill in your age")
        .required("")
        .min(16, "You must be at least 16 to get a flight to an event")
        .max(55, "No older than 55 due to risk of health issues"),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  const styles = {
    contact: css`
      margin-bottom: 400px;
      & h1 {
        margin-bottom: 40px;
      }
      & label {
        display: grid;
        max-width: 400px;
        margin: 0 auto;
        text-align: left;
        font-size: 20px;
        margin-bottom: 5px;
      }
      & input {
        padding: 6px 10px;
        margin: 10px 0px;
        border: 1px solid black;
      }
      & textarea {
        height: 140px;
      }
      & select {
        padding: 6px 10px;
        margin: 10px 0px;
        border: 1px solid black;
      }
      & button {
        display: block;
        max-width: 100px;
        margin: 0 auto;
        width: 100%;
        height: 30px;
        background-color: #3b4cca;
        color: #ffde00;
      }
      & p {
        color: red;
        font-size: 14px;
      }
    `,
  };
  return (
    <div css={styles.contact}>
      <h1>Booking a flight</h1>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <label>
          Name of event
          <input type="text" {...register("eventName")}></input>
          <p>{errors.eventName?.message}</p>
        </label>
        <label>
          Your name
          <input type="text" {...register("firstName")}></input>
          <p>{errors.firstName?.message}</p>
        </label>
        <label>
          Your e-mail
          <input type="text" {...register("email")}></input>
          <p>{errors.email?.message}</p>
        </label>
        <label>
          Age
          <input type="number" {...register("age")}></input>
          <p>{errors.age?.message}</p>
        </label>
        <label>
          location of event
          <input type="text"></input>
        </label>
        <label>
          Extra notes (allergies, special needs etc.)
          <textarea></textarea>
        </label>
        <label>
          <select>
            <option>Lugia</option>
            <option>Charizard</option>
            <option>Ho-oh</option>
            <option>Zapdos</option>
            <option>Articuno</option>
            <option>Moltres</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
