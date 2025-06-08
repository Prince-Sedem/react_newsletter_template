import {SuccessContainer, SuccessImage, SuccessHeader, SuccessText, Span, SuccessButton } from '../styled-components/container';

function Success() {
  return (
    <SuccessContainer>
        <SuccessImage />
        <SuccessHeader>
            Thanks for subcribing!
        </SuccessHeader>
        <SuccessText>
            A confirmation email has been sent to 
            <Span> news@example.com</Span>.
            Please open it and click the button inside to confirm your subscription.
        </SuccessText>
        <SuccessButton>
            Dismiss message
        </SuccessButton>

    </SuccessContainer>
  )
}

export default Success