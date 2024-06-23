import { useState } from 'react';
import './Login.css'; // Import your stylesheet
import LoginForm from './LoginForm';

const Login = ({type = 'student'}) => {
    const [activeTab, setActiveTab] = useState(type);

    return (
        <div className="login-container">
            <header className="login-header">
                <h2>ExamHub</h2>
                <p>Login As</p>
            </header>
            <div className="tabs">
                <button
                    className={activeTab === 'student' ? 'active' : ''}
                    onClick={() => setActiveTab('student')}
                >
                    Student
                </button>
                <button
                    className={activeTab === 'admin' ? 'active' : ''}
                    onClick={() => setActiveTab('admin')}
                >
                    Administrator
                </button>
            </div>
            <div className="tab-content">
                {activeTab === 'student' && <LoginForm
                    loginUrl="http://localhost:3001/api/student/login"
                    successRedirect="/home"
                    registerPath="/student/register"
                    title="Student Login"
                />}
                {activeTab === 'admin' && <LoginForm
                    loginUrl="http://localhost:3001/api/admin/login"
                    successRedirect="/addAnnoucements"
                    registerPath="/admin/register"
                    title="Admin Login"
                />}
            </div>
        </div>
    );
};

export default Login;
