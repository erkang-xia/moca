import React, { useState } from 'react';

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
        <div>
            <h1>Orientation Test</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Date:
                    <input type="text" name="date" value={formData.date} onChange={handleChange} />
                </label>
                <label>
                    Month:
                    <input type="text" name="month" value={formData.month} onChange={handleChange} />
                </label>
                <label>
                    Year:
                    <input type="text" name="year" value={formData.year} onChange={handleChange} />
                </label>
                <label>
                    Day:
                    <input type="text" name="day" value={formData.day} onChange={handleChange} />
                </label>
                <label>
                    Place:
                    <input type="text" name="place" value={formData.place} onChange={handleChange} />
                </label>
                <label>
                    City:
                    <input type="text" name="city" value={formData.city} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Orientation;
