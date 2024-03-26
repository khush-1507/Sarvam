import React, { useState } from 'react';
import img2 from "./images/logo.gif";
import timetable from "./timetable.css";

function TimeTable() {
    const [teacherName, setTeacherName] = useState('');
    const [day, setDay] = useState('');
    const [time, setTime] = useState('');
    const [timetable, setTimetable] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('your_api_endpoint_here', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ teacherName, day, time })
            });

            const data = await response.json();

            if (response.ok) {
                setTimetable(data);
                setErrorMessage('');
            } else {
                setTimetable('');
                setErrorMessage(data.message || 'Error fetching timetable');
            }
        } catch (error) {
            setTimetable('');
            setErrorMessage('Error fetching timetable');
        }
    };

    return (
        
        <div className="background-image-container">
        
        <div className="container">
            <center><img src={img2} alt="Logo" className="logo" /></center>
            <h2><b>ENTER THE TEACHER DETAILS</b></h2>
            <h5><b><center>FILL ALL THE COLUMNS IN CAPITAL LETTERS</center></b></h5>
            <form onSubmit={handleSubmit}>
         
                <label htmlFor="teacher_name"><center>Enter Teacher Name:</center></label>
                <input type="text" id="teacher_name" name="teacher_name" value={teacherName} onChange={(e) => setTeacherName(e.target.value)} required />

                <label htmlFor="day"><center>Day</center></label>
                <input type="text" id="day" name="day" value={day} onChange={(e) => setDay(e.target.value)} required />

                <label htmlFor="time"><center>Time</center></label>
                <input type="text" id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} required />

                <input type="submit" value="Submit" />
              
            
            {timetable && (
                <center>
                    <h2><b>{teacherName} IS IN</b></h2>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>ROOM_NO</th>
                                <th>BUILDING</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timetable.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.ROOM_NO}</td>
                                    <td>{item.Building}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </center>
            )}
            {errorMessage && <p>{errorMessage}</p>}
            <p>To know the exact location visually <a href="https://www.google.com/maps/@30.3235072,77.938688,15z?entry=ttu"><b>TAP HERE</b></a></p>
            <a href="https://www.google.com/maps/@30.3235072,77.938688,15z?entry=ttu" className="btn btn-warning">Logout</a>
            </form>
        </div>
        </div>
    );
}

export default TimeTable;
