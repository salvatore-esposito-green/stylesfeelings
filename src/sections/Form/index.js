import React, { useState } from 'react';
import css from './form.module.sass'
import validator from 'validator'

export default function Form() {

    const [State, SetState] = useState({
        name: '',
        email: '',
        phone: '+39',
        message: ''
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

            let formData = new FormData();
            formData.append('name', State.name);
            formData.append('email', State.email);
            formData.append('message', State.message);
            formData.append('phone', State.phone);

            fetch(`${process.env.REACT_APP_API_BASE_URL}/contact.php`, {
                method: 'POST',
                body: formData
            })
            .then(res =>  console.log(res))
            .then(() => {
                SetSuccess(true);
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
