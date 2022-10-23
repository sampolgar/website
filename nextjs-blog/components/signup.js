export default function Form() {
  return (
    <form action='/api/form' method='post'>
      <label htmlFor='email'>Email Address</label>
      <input id='email' name='email' type='email' />
      <button type='submit'>Sign Up</button>
    </form>
  );
}

async function signupUser(event) {
  event.preventDefault();

  const res = await fetch("/api/signup", {
    body: JSON.stringify({
      email: event.target.email.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  const result = await res.json();
  event.target.reset();
  console.log(result);
}
