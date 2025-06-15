import { useState } from "react";

// Validate email
export const validateEmail = (email) => {
const user_input = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return user_input.test(email);
}

export const useNewsLetterSubscription = () => {
    //Handle error state
    const[email, setEmail] = useState("")
    const[error, setError] = useState(null)
    const[isValid, setIsValid] = useState(false)

    //Handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        if (!email) {
            setError("valid email required")
            return false
        }
        if (!validateEmail(email)) {
            setError("valid email required")
            return false
        }
        setIsValid(true)
        return true
    }
    return{handleSubmit, error, email, setEmail, isValid}


}