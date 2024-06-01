import { useState } from 'react';

const Login = () =>
{
    const [user, setUser] = useState({username: '', password: ''});
    const [text, setText] = useState(false);
    const [invalid, setInvalid] = useState(false);

    const handleChange = (e) =>
    {
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if(user.username !== "user")
        {
            setInvalid(true);
            return;
        }

        if(user.password !== "password")
        {
            setInvalid(true);
            return;
        }

        setInvalid(false);
        setText(true);
    }

    return(
        <div>
            <h1>Login Page</h1>
            {invalid && <p>Invalid username or password</p>}
            {!text ? <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input name="username" type="text" value={user.username} onChange={handleChange} placeholder="username" required/>
                </div>
                <div>
                    <label>Password:</label>
                    <input name="password" type="password" value={user.password} onChange={handleChange} placeholder="password" required/>
                </div>
                <button>Submit</button>
            </form> :
            <p>Welcome, user!</p>}
        </div>
    )
}

export default Login