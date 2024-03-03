
import { useState } from 'react';

const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url =
      'https://gmail.us21.list-manage.com/subscribe/post?u=2f93f71036b1905acf02e250a&amp;id=bf9eebe87b&amp;f_id=0046b2e1f0';

    // Validate email
    if (!email) {
      setError('Email required');
      return;
    }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      setError('Invalid email address');
      return;
    }

    // Send the post request
    try {
      setIsLoading(true)
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          EMAIL: email,
        }).toString(),
      });
      // Handle the response
        setSuccess('Successfully sent');
        setError('');
        setEmail('');
        setIsLoading(false)

    } catch (error) {
      console.log(error)
      setError('Something went wrong');
      setIsLoading(false)
    }
  };
  return (
    <form
      className='flex flex-col items-center justify-center bg-slate-50 py-4 md:py-8 px-1'
      onSubmit={handleSubmit}
      id='mc-embedded-subscribe-form'
      name='mc-embedded-subscribe-form'
      noValidate
    >
      <h2 className='font-bold text-2xl md:text-3xl mb-6'>Let&#39;s Keep in Touch</h2>
      <div className=''>
        <input
          type='email'
          className='outline-none p-2 md:p-4 mb-4 border border-r-0 border-[#222] w-[14.1rem] md:w-[30rem] text-xl'
          placeholder='Enter your email address'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name='EMAIL'
          required
        />
        <input
        type='submit'
        value={isLoading ? 'loading...' : 'send'}
        name='send'
        id='mc-embedded-subscribe'
        className='text-xl p-2 md:p-4 bg-[#4c9e9e] border border-l-0 border-[#222] text-white cursor-pointer hover:bg-[#214e4e] transition-all duration-100'
      />
        <div className='text-[1rem] font-bold text-center text-[#b13131]'>{error}</div>
        <div className='text-[1rem] font-bold text-center text-[#12a512]'>{success}</div>
      </div>
    </form>
  );
};

export default EmailSubscription;
