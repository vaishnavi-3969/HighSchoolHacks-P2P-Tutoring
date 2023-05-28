import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { getDatabase, ref, push, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user } = useAuth0();
    const [userType, setUserType] = useState('');
    const [linkedUsername, setLinkedUsername] = useState('');
    const [githubUsername, setGithubUsername] = useState('');
    const [location, setLocation] = useState('');
    const [school, setSchool] = useState('');
    const [grade, setGrade] = useState('');
    const [fees, setFees] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [subjectExpertise, setSubjectExpertise] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'linkedUsername':
                setLinkedUsername(value);
                break;
            case 'githubUsername':
                setGithubUsername(value);
                break;
            case 'location':
                setLocation(value);
                break;
            case 'school':
                setSchool(value);
                break;
            case 'grade':
                setGrade(value);
                break;
            case 'fees':
                setFees(value);
                break;
            case 'subjectExpertise':
                setSubjectExpertise(value);
                break;
            default:
                break;
        }
    };

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    };

    const handleSubmit = () => {
        const database = getDatabase(app);
        let profileRef;
        if (userType === "tutor") {
            profileRef = ref(database, 'tutor');
        } else if (userType === 'tutee') {
            profileRef = ref(database, 'tutee')
        } else {
            alert("Error");
        }

        const profileData = {
            name: user.name,
            email: user.email,
            userType: userType,
            linkedUsername: linkedUsername,
            githubUsername: githubUsername,
            location: location,
            school: school,
            grade: grade,
            fees: fees,
            subjectExpertise: subjectExpertise,
        };
        push(profileRef, profileData);
        alert('Profile saved successfully!');
        if(userType === 'tutor'){
            window.location.href = '/tutors';
            alert("Welcome Tutor...")
        }else if (userType === 'tutee'){
            window.location.href = '/tutees';
            alert("Welcome Tutee...")
        }
       
};

useEffect(() => {
    // Check if user is authenticated and retrieve user data
    // Update isAuthenticated state accordingly
    if (user) {
        // Update user data and authentication status
        setIsAuthenticated(true);
    }
}, [isAuthenticated]);

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '50px',
    },
    heading: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    welcome: {
        fontSize: '20px',
        marginBottom: '10px',
    },
    description: {
        fontSize: '16px',
        marginBottom: '10px',
    },
    form: {
        width: '500px',
    },
    label: {
        display: 'block',
        margin: '5px 0',
    },
    radioLabel: {
        display: 'inline-block',
        marginRight: '10px',
    },
    input: {
        width: '100%',
        height: '30px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        paddingLeft: '5px',
        fontSize: '14px',
    },
    button: {
        marginTop: '20px',
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};


const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: "hacks-df68f.firebaseapp.com",
    projectId: "hacks-df68f",
    storageBucket: "hacks-df68f.appspot.com",
    messagingSenderId: "361173421570",
    appId: "1:361173421570:web:79e4391a42d4564c8f211b",
    measurementId: "G-24BW9CM14D"
};

const app = initializeApp(firebaseConfig);

return (
    <div style={styles.container}>
        {isAuthenticated ? (
            <>
                <h1 style={styles.heading}>Profile</h1>
                <p style={styles.welcome}>Welcome, {user.name}!</p>
                <p style={styles.description}>Please fill out your profile information:</p>
                <label style={styles.label}>
                    User Type:
                </label>
                <label style={styles.label}>
                    <input
                        type="radio"
                        name="userType"
                        value="tutee"
                        checked={userType === 'tutee'}
                        onChange={handleUserTypeChange}
                        style={styles.input}
                    />
                    Tutee
                </label>
                <label style={styles.label}>
                    <input
                        type="radio"
                        name="userType"
                        value="tutor"
                        checked={userType === 'tutor'}
                        onChange={handleUserTypeChange}
                        style={styles.input}
                    />
                    Tutor
                </label>

                {userType === 'tutee' && (
                    <>
                    </>
                )}
                {userType === 'tutor' && (
                    <>
                        <label style={styles.label}>
                            Fees(per session):
                            <input type="text" name="fees" value={fees} onChange={handleChange} style={styles.input} />
                        </label>
                        <label style={styles.label}>
                            Subject Expertise:
                            <input type="text" name="subjectExpertise" value={subjectExpertise} onChange={handleChange} style={styles.input} />
                        </label>
                    </>
                )}
                <label style={styles.label}>
                    School:
                    <input type="text" name="school" value={school} onChange={handleChange} style={styles.input} />
                </label>
                <label style={styles.label}>
                    Grade:
                    <input type="text" name="grade" value={grade} onChange={handleChange} style={styles.input} />
                </label>
                <label style={styles.label}>
                    LinkedIn Username:
                    <input type="text" name="linkedUsername" value={linkedUsername} onChange={handleChange} style={styles.input} />
                </label>
                <label style={styles.label}>
                    GitHub Username:
                    <input type="text" name="githubUsername" value={githubUsername} onChange={handleChange} style={styles.input} />
                </label>
                <label style={styles.label}>
                    Location:
                    <input type="text" name="location" value={location} onChange={handleChange} style={styles.input} />
                </label>
                <Button variant="" type="submit" style={styles.button} onClick={handleSubmit}>
                    Save Profile
                </Button>
            </>
        ) : (
            <>
                <h1 style={styles.heading}>Access Denied</h1>
                <p style={styles.description}>Please sign in to view your profile.</p>
            </>
        )}
    </div>
);
};

export default Profile;
