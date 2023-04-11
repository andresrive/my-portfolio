import { AiFillLinkedin as LinkedinIcon } from 'react-icons/ai'
import { AiOutlineWhatsApp as WhatsappIcon } from 'react-icons/ai'
import { AiOutlineMail as MailIcon } from 'react-icons/ai'
import { AiFillGithub as GithubIcon } from 'react-icons/ai'

const data = [
    { id: 1, link: 'https://www.linkedin.com/in/andreseriverar/', icon: <LinkedinIcon /> },
    { id: 2, link: 'https://github.com/andresrive', icon: <GithubIcon /> },
    { id: 3, link: 'https://api.whatsapp.com/send?phone=34663975736', icon: <WhatsappIcon /> },
    { id: 4, link: 'mailto:andreseriverar@gmail.com', icon: <MailIcon /> }
]

export default data