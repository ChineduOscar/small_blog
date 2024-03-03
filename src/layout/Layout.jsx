import Navbar from '../components/common/navbar/Navbar'
import Footer from '../components/common/Footer'
import EmailSubscription from '../components/common/EmailSubscription'

const Layout = ({children}) => {
  return (
   <>
    <Navbar />
        {children}
    <EmailSubscription         
        formAction='https://gmail.us21.list-manage.com/subscribe/post?u=2f93f71036b1905acf02e250a&amp;id=bf9eebe87b&amp;f_id=0046b2e1f0'
        formId='mc-embedded-subscribe-form'
        emailFieldName='EMAIL'
        firstNameFieldName='FNAME'
        lastNameFieldName='LNAME'
        successMessage='Thank you for subscribing!'/>
    <Footer />
   </>
  )
}

export default Layout
