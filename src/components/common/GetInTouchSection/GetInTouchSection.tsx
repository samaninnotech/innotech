import {
  Agreement,
  Column,
  Container,
  FirstRow,
  Form,
  FormItem,
  FormWrapper,
  Heading,
  Input,
  Loader,
  Row,
  SectionWrapper,
  Select,
  Spacer,
  SubmitButton,
  TextArea,
} from './GetInTouchSection.styled';

const GetInTouchSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <Row>
          <Column>
            <Heading>Get in Touch</Heading>
            <Spacer />
            <Heading small>We’d love to hear your Bit!</Heading>
            <Spacer />
            <FormWrapper>
              <Form>
                <Row>
                  <FirstRow>
                    <FormItem padding='20px'>
                      <Input type="text" placeholder="Nome *" required />
                    </FormItem>
                 
                    <FormItem>
                      <Input type="text" placeholder="Cognome *" required />
                    </FormItem>
                  </FirstRow>
                </Row>
                <FormItem>
                  <Input type="email" placeholder="E-mail *" required />
                </FormItem>
                <FormItem>
                  <Select>
                    <option value="La tua richiesta su">La tua richiesta su</option>
                    <option value="Informazioni Generali">Informazioni Generali</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Software Licencing">Software Licencing</option>
                  </Select>
                </FormItem>
                <FormItem>
                  <TextArea placeholder="Descrivi la tua richiesta. *" required></TextArea>
                </FormItem>
                <Agreement>
                  <label>
                    <input type="checkbox" required />
                    Accetto il trattamento dei dati personali secondo la Privacy Policy
                  </label>
                </Agreement>
                <SubmitButton type="submit" disabled>
                  Invia messaggio
                </SubmitButton>
                <Loader />
              </Form>
            </FormWrapper>
            <Spacer />
          </Column>
          <Column offset>
            <Spacer />
            <Heading>
              Inizia la collaborazione con noi e cerca la migliore soluzione per le esigenze dei tuoi clienti.
            </Heading>
            <Spacer />
          </Column>
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default GetInTouchSection;
