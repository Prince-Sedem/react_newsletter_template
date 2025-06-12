import { useLocation, Link} from "react-router-dom";

import {SuccessContainer, SuccessImage, SuccessHeader, SuccessText, Span, SuccessButton, StyledLink } from '../styled-components/container';

function Success() {
  const location = useLocation()
  const email = location.state?.email

  return (
    <SuccessContainer>
        <SuccessImage />
        <SuccessHeader>
            Thanks for subcribing!
        </SuccessHeader>
        <SuccessText>
            A confirmation email has been sent to 
            <Span>{email}</Span>.
            Please open it and click the button inside to confirm your subscription.
        </SuccessText>
        <SuccessButton>
            <StyledLink to="/">Dismiss message</StyledLink>
        </SuccessButton>

    </SuccessContainer>
  )
}

export default Success