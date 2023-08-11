import React , {useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'
import { styles } from '../styles'
import {logo , menu , close} from "../assets"


const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle , setToggle] = useState(false);

  return (
    <nav className={`${
      styles.paddingX
    } w-full flex items-center py-5 fixed top-0 z-20
      bg-primary
    }`}>
       <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            // window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Rashi Sharma
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((ele)=>(
              <li key={ele.id}
                className={`${active === ele.title ? "text-white" : "text-secondary" }  hover:text-white cursor-pointer text-[18px] font-medium ` }>
                <Link to={`/${ele.id}`}
                  onClick={()=>setActive(ele.title)}
                >{ele.title}</Link>
              </li>
          ))}
        </ul>

          {/* //mobile view */}
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle(!toggle)}
            />


            <div
              className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className='list-none flex flex-col justify-end items-start flex-1 gap-4'>
              {navLinks.map((ele)=>(
                <li key={ele.id}
                  className={`${active === ele.title ? "text-white" : "text-secondary" }  font-poppins cursor-pointer text-[16px] font-medium ` }>
                  <Link to={`/${ele.id}`}
                    onClick={()=>{
                      setActive(ele.title);
                      setToggle(!toggle);
                    }}
                  >{ele.title}</Link>
                </li>
              ))}
              </ul>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar