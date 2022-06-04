import emailjs from '@emailjs/browser';

import * as S from './styles'

export const FormEmail = () => {

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('mailjet', 'template_pqswadr', e.currentTarget, 'user_ZgxCl0YeWXrpgbaVfdJlf')
      .then((result: any) => {
          console.log(result.text);
      }, (error: any) => {
          console.log(error.text);
      });
  };

  return (
     <S.ContentForm>
      <S.Form>
        <form  onSubmit={sendEmail} style={{display:'flex', flexDirection: 'column'}}>
          <S.Input type="text" name="user_name" placeholder='Nome'/>
          <S.Input type="email" name="user_email" placeholder='Email'/>
          <S.TextArea name="message" placeholder='Mensagem'/>
          <S.Button type="submit">Enviar</S.Button>
        </form>
      </S.Form>
     </S.ContentForm>
  );
};