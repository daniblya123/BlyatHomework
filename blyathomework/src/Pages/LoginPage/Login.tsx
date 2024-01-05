import { useState } from "react";

function Login(){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email + pass)
    }

    return (
    <>
    <div className="LoginForm">
        <form onSubmit={handleSubmit}>
            <label for="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label for="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e. target.value)} type="password" placeholder="*********" id="password" name="password"/>
            <button>Login</button>
        </form>
    </div>
    </>
    )
}
export default Login;