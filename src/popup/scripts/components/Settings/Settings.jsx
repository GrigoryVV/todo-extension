import React, { useState } from 'react';
import css from "./Settings.module.css";
import MyButton from '../../../../common/components/MyButton/MyButton';

const Settings = (props) => {

    let [city, setCity] = useState('');
    let [country, setCountry] = useState('');
    let [message, setMessage] = useState(false)

    const showSuccess = () => {
        setMessage(true);
        setTimeout(() => {setMessage(false)}, 3000);
    }

    const handleSave = () => {
        if (!city || !country) {
            alert("Please enter your city and country");
        } else {
            props.setPlace({
                city: city.toLowerCase(),
                country: country.toLowerCase()
            });
            showSuccess();
            setCity('');
            setCountry('');
        }
    }

    return (
        <>
            <h2 className={css.header}>Settings</h2>
            <div>
                {
                    message &&
                    <div className={css.success}>
                        Place was saved
                    </div>
                }
                <div className={css.input}>
                    <input type="text" maxLength="40"
                        placeholder="Enter your city"
                        value={city}
                        onChange={(e) => {setCity(e.target.value)}}
                    />
                </div>
                <div className={css.input}>
                    <input type="text" maxLength="40"
                        placeholder="Enter your country"
                        value={country}
                        onChange={(e) => {setCountry(e.target.value)}}
                    />
                </div>
                <MyButton
                    className={css.settingsButton}
                    name="Save"
                    onClick={handleSave}
                />
                <MyButton
                    className={css.settingsButton}
                    name="Back"
                    onClick={props.toggleOpenSettings}
                />
            </div>
        </>
    );
}

export default Settings;