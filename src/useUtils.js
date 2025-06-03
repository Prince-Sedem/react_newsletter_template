import { useState } from "react";

// Validate email
export const validateEmail = (email) => {
const user_input = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return user_input.test(email);
}

export const useUtils = () => {
    //Handle error state
    const[email, setEmail] = useState("")
    const[error, setError] = useState(null)

    //Handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        if (!email) {
            setError("Input cannot be empty")
        }
        if (!validateEmail(email)) {
            setError("Enter a valid email addresss")
        }
    }
    return{handleSubmit, error, email, setEmail}


}