import emailjs from '@emailjs/browser';

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
      <form  onSubmit={sendEmail} style={{display:'flex', flexDirection: 'column'}}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
  );
};