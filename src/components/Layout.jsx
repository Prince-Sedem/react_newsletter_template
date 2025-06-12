import { useNavigate} from 'react-router-dom';
import { useUtils } from '../useUtils';
import { Container, Input, Button, FormConatiner, Header,Text, Image, Form, ImageList, TextBox, Row, TextEmail, ErorMessage, EmailSpan } from '../styled-components/container';

const items = [
  { image: '/images/checked.png', text: 'Product discovery and building what matters.' },
  { image: '/images/checked.png', text: 'Measuring to ensure updates are a success.' },
  { image: '/images/checked.png', text: 'And much more.' },
];


function Layout() {

    const navigate = useNavigate()


    const {handleSubmit, error, email, setEmail, isValid} = useUtils()
    const handleFormSubmit = e => {
        e.preventDefault()
        const submission = handleSubmit(e) 
        if (!isValid && submission) {
            navigate("/success", {state:{email}})

        }
    }
  return (
    <Container>
        <FormConatiner>
            <Header>
                Stay Updated!
            </Header>
            <Text>
                Join 60,000+ product managers receiving monthly 
                updates on.
            </Text>
                {items.map((item, index) => (
                    <Row key={index}>
                        <ImageList src={item.image} />
                        <TextBox>
                            <p>{item.text}</p>
                        </TextBox>
                    </Row>
                ))}
            <Form
            onSubmit={handleFormSubmit}
            >
                <TextEmail>Email Address <EmailSpan>{error && <ErorMessage>{error}</ErorMessage>}</EmailSpan></TextEmail>    
                <Input placeholder='enter your email'
                error={!!error}
                value={email}
                onChange={({target})=> setEmail(target.value)}
                />
                    <Button 
                    name='Submit'
                    type='Submit'
                    >
                        Subcribe to monthly newsletter
                    </Button>
            </Form>
        </FormConatiner>
        <div>
            <Image />
        </div>
    </Container>
  )
}

export default Layout