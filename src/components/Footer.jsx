import React from 'react'
import instagram from "../assets/socials/instagram.png"
import whatsapp from "../assets/socials/whatsapp.png"
import linkedin from "../assets/socials/linkedin.png"
import mail from "../assets/mail.png"


const socials = [
  {
    link: " https://www.instagram.com/invites/contact/?i=f26ktlmv971&utm_content=q3x41pu",
    img: instagram,
    name: "instagram"
  },
  {
    link: "https://api.whatsapp.com/send?phone=+917827141330",
    img: whatsapp,
    name: "whatsapp"
  },
  {
    link: "https://www.linkedin.com/in/mozammilkarim/",
    img: linkedin,
    name: "linkedin"
  }
]

const Footer = () => {
  return (
    <footer className='   p-10 bottom-0  left-0 flex flex-col  '>
      <span className='font-semibold text-xl'>
        &copy;2022 Made with Love by Karimji.tech
      </span>
      <div className='flex justify-center items-center p-3'>
        {socials.map((social, index) => {
          return (

            <a className='p-3' key={`social` + index} href={social.link}>
              <img src={social.img} alt={social.name} />
            </a>
          )
        })}
        <a href="mailto:help@karimji.tech" className='p-3' >
          <img src={mail} alt="mail" className='w-[1.75rem] h-[1.75rem]'/>
        </a>

      </div>
    </footer>

  )
}

export default Footer