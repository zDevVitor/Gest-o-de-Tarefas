import '../../styles/style.scss'

function LoginPage() {
    return (
        <div className="container">
            <div className="login-section">
                <h1>Login</h1>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
