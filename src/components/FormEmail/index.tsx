import emailjs from '@emailjs/browser';
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as S from './styles'

export const FormEmail = () => {

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('mailjet', 'template_pqswadr', e.currentTarget, 'user_ZgxCl0YeWXrpgbaVfdJlf')
      .then(() => {
        toast.success('Enviado com sucesso! 😄', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }, (error: any) => {
        toast.error('Desculpa, ouv alguma coisa errada! 😔', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      });
  };

  return (
     <S.ContentForm>
       <ToastContainer />
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