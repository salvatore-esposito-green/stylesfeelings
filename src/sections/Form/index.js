import React, { useState } from 'react';
import css from './form.module.sass'
import validator from 'validator'

export default function Form() {

    const [State, SetState] = useState({
        name: '',
        email: '',
        phone: '+39',
        message: '',
        control: 'jA35t8cG'
    })

    const [Success, SetSuccess] = useState(false)

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        SetState({
            ...State,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if (
            validator.isEmail(State.email) &&
            !validator.isEmpty(State.name) &&
            !validator.isEmpty(State.message) &&
            validator.isMobilePhone(State.phone)
        ) {

            async function postData(url = '', data = {}) {
                // Default options are marked with *
                const response = await fetch(url, {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, *cors, same-origin
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: 'same-origin', // include, *same-origin, omit
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    redirect: 'follow', // manual, *follow, error
                    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                    body: JSON.stringify(data) // body data type must match "Content-Type" header
                });

                return response.json();
            };

            fetch(`${process.env.REACT_APP_API_BASE_URL}/contact.php`, {
                method: 'POST',
                body: JSON.stringify(State)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                SetSuccess(data);
            });
        }
    }

    return (
        <form className={css.form} action="." method="post" onSubmit={(e) => handleSubmit(e)}>
            <label>
                Name:
                <input type="text" name="name" value={State.name} onChange={handleInputChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={State.email} onChange={handleInputChange} />
            </label>
            <label>
                Phone:
                <input type="cell" name="phone" value={State.phone} onChange={handleInputChange} />
            </label>
            <label className={css.text_area}>
                Message:
                <textarea name="message" value={State.message} onChange={handleInputChange} />
            </label>
            <input type="submit" value="Submit" />
            {Success && (
                <div className={css.success}>
                    Thank you!<br />Your message has been successfully sent. We will contact you very soon!
                </div>
            )}
        </form>
    )
}
