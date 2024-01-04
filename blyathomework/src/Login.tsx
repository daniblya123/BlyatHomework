import { useState } from "react";

function Login(){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (<>
    <div>
    <h2>
        Login
    </h2>
    </div>
        </>)
}
export default Login;