import Link from "next/link";
// import { FormEvent } from "react";
import utilStyles from "../styles/utils.module.css";

export default function formHandler() {
  const handleSubmit = async (e) => {
    // prevent form from submitting & refreshing
    e.preventDefault();

    // get form data
    const formData = new FormData(e.target);
    console.log("form data: " + formData);

    console.log(JSON.stringify("e is" + e));
    console.log(JSON.stringify("e target is" + e));

    const form = e.target;

    const data = {
      email: form.email.value,
    };

    console.log("data" + form.email.data);

    //send the form data to the api and get a response
    const response = await fetch("/api/formSubmit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(`this is your email? ${result.email}`);
  };

  return (
    <div className='container'>
      <h1 className={utilStyles.title}>
        Form{""}
        <Link href='/'>
          <a> with</a>
        </Link>{" "}
        {""}
        Javascript.
      </h1>

      <p className={utilStyles.description}>
        <code className={utilStyles.code}>pages/js-form.js</code>
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
