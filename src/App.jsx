import { Link } from 'react-router-dom';
import './App.css'

function App() {

  const handleForm = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          alert('user added successfully.');
          form.reset();
        }
      })
  }
  return (
    <>
      <Link to={'/users'}><button>Users</button></Link>
      <h2>Simple CURD</h2>
      <form onSubmit={handleForm}>
        <input type="text" name="name" placeholder='enter name' id="" />
        <br /> <br />
        <input type="email" name="email" placeholder='enter email' id="" />
        <br /> <br />
        <input type="submit" value="submit" />
      </form>
    </>
  )
}

export default App;

