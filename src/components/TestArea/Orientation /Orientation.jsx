import React, { useState } from 'react';
import styles from './Orientation.module.css'; // Importing CSS module

const Orientation = () => {
    const [formData, setFormData] = useState({
        date: '',
        month: '',
        year: '',
        day: '',
        place: '',
        city: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Information:\nDate: ${formData.date}\nMonth: ${formData.month}\nYear: ${formData.year}\nDay: ${formData.day}\nPlace: ${formData.place}\nCity: ${formData.city}`);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Orientation Test</h1>
            <p className={styles.instructions}>Tell me the [year, month, exact date, and day of the week], also the name of this place, and which city it is in.</p>
            <form onSubmit={handleSubmit}>
                <label className={styles.label}>
                    Date:
                    <input type="text" name="date" value={formData.date} onChange={handleChange} className={styles.input} />
                </label>
                <label className={styles.label}>
                    Month:
                    <input type="text" name="month" value={formData.month} onChange={handleChange} className={styles.input} />
                </label>
                <label className={styles.label}>
                    Year:
                    <input type="text" name="year" value={formData.year} onChange={handleChange} className={styles.input} />
                </label>
                <label className={styles.label}>
                    Day:
                    <input type="text" name="day" value={formData.day} onChange={handleChange} className={styles.input} />
                </label>
                <label className={styles.label}>
                    Place:
                    <input type="text" name="place" value={formData.place} onChange={handleChange} className={styles.input} />
                </label>
                <label className={styles.label}>
                    City:
                    <input type="text" name="city" value={formData.city} onChange={handleChange} className={styles.input} />
                </label>
                <button type="submit" className={styles.button}>Submit</button>
            </form>
        </div>
    );
};

export default Orientation;
