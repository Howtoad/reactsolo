import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import { useForm } from "react-hook-form";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
    `,
  };
  return (
    <div css={styles.contact}>
      <h1>Booking a flight</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name of event
          <input type="text"></input>
        </label>
        <label>
          Your name
          <input
            type="text"
            {...register("firstName", { required: true, minLength: 2 })}
          ></input>
          {errors.firstName?.type === "required" && " Name is required"}
          {errors.firstName?.type === "minLength" &&
            " Name must be at least 2 letter"}
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
