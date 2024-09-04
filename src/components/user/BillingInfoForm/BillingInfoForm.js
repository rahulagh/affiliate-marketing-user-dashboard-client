import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {GlobalStyle, FormContainer, Title, Form, InputGroup, Label, Input, Button, ErrorMessage, SuccessMessage} from './BillingInfoForm.styles';

const BillingInfoForm = () => {
    const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm();
    const [submitStatus, setSubmitStatus] = useState(null);

    const onSubmit = async (data) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const existingInfos = JSON.parse(localStorage.getItem('billingInfos') || '[]');
            const newInfo = { id: Date.now(), ...data, status: 'pending' };
            localStorage.setItem('billingInfos', JSON.stringify([...existingInfos, newInfo]));
            console.log("Submitted Successfully!!", newInfo);
            setSubmitStatus('success');
            reset();
        } catch (error) {
            console.error("Submission failed:", error);
            setSubmitStatus('error');
        }
    };

    const validatePAN = value => /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value) || 'Invalid PAN card format';
    const validateBankAccount = value => (value.length >= 9 && value.length <= 34) || 'Bank account number must be between 9 and 34 digits';

    const handleInputChange = (e, field) => setValue(field, e.target.value.toUpperCase(), { shouldValidate: true });

    const inputFields = [
        { name: "accountHolderName", label: "Account Holder Name", placeholder: "e.g., JOHN DOE", validation: { required: 'Account Holder Name is required' } },
        { name: "bankName", label: "Bank Name", placeholder: "e.g., STATE BANK OF INDIA", validation: { required: 'Bank Name is required' } },
        { name: "branch", label: "Branch", placeholder: "e.g., BRANCH NAME", validation: { required: 'Branch is required' } },
        { name: "bankAccount", label: "Bank Account Number", placeholder: "e.g., 1234567890", type: "number", validation: { required: 'Bank Account is required', validate: validateBankAccount } },
        { name: "ifscCode", label: "IFSC Code", placeholder: "e.g., ABCD0123456", validation: { required: 'IFSC Code is required', pattern: { value: /^[A-Z]{4}0[A-Z0-9]{6}$/, message: 'Invalid IFSC Code format' } } },
        { name: "upiId", label: "UPI ID", placeholder: "e.g., johndoe@upi", validation: { required: 'UPI ID is required', pattern: { value: /^[\w.\-_]{3,}@[a-zA-Z]{3,}$/, message: 'Invalid UPI ID format' } } },
        { name: "panCard", label: "PAN Card Number", placeholder: "e.g., ABCDE1234F", validation: { required: 'PAN Card is required', validate: validatePAN } }
    ];

    return (
        <>
            <GlobalStyle />
            <FormContainer>
                <Title>Billing Information</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {inputFields.map(({ name, label, placeholder, type, validation }) => (
                        <InputGroup key={name}>
                            <Label htmlFor={name}>{label}</Label>
                            <Input
                                id={name}
                                type={type || "text"}
                                {...register(name, validation)}
                                onChange={(e) => handleInputChange(e, name)}
                                value={watch(name) || ""}
                                placeholder={placeholder}
                            />
                            {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
                        </InputGroup>
                    ))}
                    <Button type="submit">Submit</Button>
                </Form>
                {submitStatus === 'success' && <SuccessMessage>Billing information submitted successfully. It will be verified shortly.</SuccessMessage>}
                {submitStatus === 'error' && <ErrorMessage>An error occurred. Please try again.</ErrorMessage>}
            </FormContainer>
        </>
    );
};

export default BillingInfoForm;

