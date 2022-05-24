import {useState} from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styles from '../styles/Home.module.css';
const Login = () => {
    const [data, setData] = useState({email: '', password: ''});
    return (
        <Container className={styles.container}>
            <Row>
                <Col sm='12' md={{size: 5, offset: 3}}>
                    <Form>
                        <FormGroup>
                            <Label>Email:</Label>
                            <Input 
                                onChange={e => setData({...data, email: e.target.value})}
                                value={data.email}
                                type='email'
                                name='email'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password:</Label>
                            <Input 
                                onChange={e => setData({...data, password: e.target.value})}
                                value={data.password}
                                type='password'
                                name='password'    
                            />
                        </FormGroup>
                        <FormGroup>
                            <span>
                                <a href=''>
                                    <small>Forgot Password?</small>
                                </a>
                            </span>
                            <Button
                                style={{float: "right", width: 120}} 
                                color='primary'>
                                Submit
                            </Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
export default Login;