import React from "react";
//import { useNavigate } from 'react-router-dom';
import img1 from "./images/logo.gif";
import styles from "./Home.css";

const Home=()=>{
   // const Navigate = useNavigate();
    const redirectToStudentPage=()=>{
     //  Navigate("/Studentlogin");
    }
    const redirectToFacultyPage=()=>{
       // Navigate("/Facultylogin");
     }

    
     
 return (
            <div className="background-image-container">
                <div className={styles.body}>
                    <div className={styles.container}>
                        <img src={img1} alt="img1" width="100%" />
                        <h1 className={styles.h1}>Login As</h1>
                        <div className={styles['login-container']}>
                            <div className={styles['button-container']}>
                                <button className="btn" onClick={redirectToStudentPage}><b>Student Login</b></button>
                                <br />
                                <button className="btn" style={{ marginTop: '10px' }} onClick={redirectToFacultyPage}><b>Faculty Login</b></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


   


export default Home;