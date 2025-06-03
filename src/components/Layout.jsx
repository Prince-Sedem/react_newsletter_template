import { Link } from 'react-router-dom';
import { useUtils } from '../useUtils';
import { Container, Input, Button, FormConatiner, Header,Text, Image, Form, ImageList, TextBox, Row, TextEmail } from '../styled-components/container';

const items = [
  { image: '/images/checked.png', text: 'Product discovery and building what matters.' },
  { image: '/images/checked.png', text: 'Measuring to ensure updates are a success.' },
  { image: '/images/checked.png', text: 'And much more.' },
];


function Layout() {


    const {handleSubmit, error, email, setEmail} = useUtils()
  return (
    <Container>
        <FormConatiner>
            <Header>
                Stay Updated!
            </Header>
            <Text>
                Join 60,000+ product managers receiving monyhly updates on.
            </Text>
                {items.map((item, index) => (
                    <Row key={index}>
                        <ImageList src={item.image} />
                        <TextBox>
                            <p>{item.text}</p>
                        </TextBox>
                    </Row>
                ))}
            <TextEmail>
                Email Address
            </TextEmail>    
            <Form>
                <Input placeholder='enter your email'/>
                <Link to="/success">
                    <Button>
                        Subcribe to monthly newsletter
                    </Button>
                </Link>
            </Form>
        </FormConatiner>
        <div>
            <Image />
        </div>
    </Container>
  )
}

export default Layout