import { useState } from "react"

//Libs
import { Button, Container, InputField } from "@hybris-software/ui-kit"
import useForm from "@hybris-software/use-ful-form"

//Assets
import { AiOutlineArrowRight } from 'react-icons/ai'

//Style
import Style from './GetInTouchForm.module.css'

const GetInTouchForm = () => {
    const form = useForm({
        inputs: {
            firstname: {
                required: true
            },
            lastname: {
                required: true
            },
            email: {
                nature: 'email',
                required: true
            },
            phone: {
                required: true
            },
            message: {
                required: false
            }
        }
    })

    const [tosAccepted, setTosAccepted] = useState(false)

    const onSubmit = () => {
        console.log(form.getApiBody())
    }

    return (
        <Container className={Style.componentWrapper}>
            <div className={Style.formWrapper}>
                {/* FORM */}
                <div className={Style.formSection}>
                    <h6>YOUR DETAILS</h6>
                    <div className={Style.inputContainerHalf}>
                        <InputField
                            {...form.getInputProps('firstname')}
                            placeholder='First name*'
                            className={Style.firstname}
                            baseClassName={Style.firstname}
                            errorClassName={Style.inputError}
                            successClassName={Style.inputSuccess}
                        />
                        <InputField
                            {...form.getInputProps('lastname')}
                            placeholder='Last name*'
                            className={Style.lastname}
                            baseClassName={Style.lastname}
                            errorClassName={Style.inputError}
                            successClassName={Style.inputSuccess}
                        />
                    </div>
                    <div className={Style.inputContainerFull}>
                        <InputField
                            {...form.getInputProps('email')}
                            placeholder='Email address*'
                            className={Style.email}
                            baseClassName={Style.email}
                            errorClassName={Style.inputError}
                            successClassName={Style.inputSuccess}
                        />
                    </div>
                    <div className={Style.inputContainerFull}>
                        <InputField
                            {...form.getInputProps('phone')}
                            placeholder='Phone number'
                            className={Style.phonenumber}
                            baseClassName={Style.phonenumber}
                            errorClassName={Style.inputError}
                            successClassName={Style.inputSuccess}
                        />
                    </div>
                    <div className={Style.inputContainerFull}>
                        <InputField
                            {...form.getInputProps('message')}
                            placeholder='Message'
                            className={Style.message}
                            baseClassName={Style.message}
                            errorClassName={Style.inputError}
                            successClassName={Style.inputSuccess}
                        />
                    </div>
                    <div className={Style.tos}>
                        <input type={'checkbox'} name='tos' id="tos" checked={tosAccepted} onChange={(e) => { setTosAccepted(e.target.checked) }} />
                        <label htmlFor="tos">
                            By ticking this box, i agree that i have read the <a href="/privacy" target={'_blank'} rel='noreferref'>privacy policy</a> and consent to the given information being used by Copper to contact me.
                        </label>
                    </div>
                    <Button buttonClassName={Style.button} disabledClassName={Style.disabled} disabled={!(tosAccepted && form.isValid())} onClick={onSubmit}>Send <AiOutlineArrowRight size={20} /></Button>
                </div>
                {/* SIDE */}
                <div className={Style.sideSection}>
                    <div className={Style.sideItem}>
                        <h4>Vision & Mission</h4>
                        <p>Award winning crypto custody<br />Bespoke trading infrastructure<br />Dedicated account managers<br />Protected and insured</p>
                    </div>
                    <div className={Style.sideItem}>
                        <h4>Our Truth</h4>
                        <p>Innovation fosters growth.<br />There is always more information.<br />Accountability is the key to trust.</p>
                    </div>
                </div>
                {/* BUTTON */}
                <Button buttonClassName={Style.button} disabledClassName={Style.disabled} disabled={!(tosAccepted && form.isValid())} onClick={onSubmit}>Send <AiOutlineArrowRight size={20} /></Button>
            </div>
        </Container>
    )
}

export default GetInTouchForm