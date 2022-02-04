
import { RiArrowDownSLine } from 'react-icons/ri';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import axios from 'axios';
function Header(){
    const [menus, setMenus] = useState([])
    const getMenus = () =>{
        axios.get('http://localhost:5006/menus')
             .then((res) =>{
                 const resData = res.data
                 setMenus(resData)
             })
    }
    useEffect(() => {
        getMenus()
    }, [])
    return(
        <>
           <header>
               <nav>
                   <div className="container">
                       <div className="row">
                           <div className="col-12">
                               {
                                   menus.map(menu =>{
                                       const {id, logo, home, pages, shop, blog, portfolio} = menu
                                       const {hometitle} = home
                                       const {pagetitle} = pages
                                       const {shoptitle} = shop
                                       const {blogtitle} = blog
                                       const {portfoliotitle} = portfolio
                                       return(
                                           <div key={id}>
                                                <span className="logo navbar-brand justify-content-start">
                                                    <Link href="/">
                                                       <a>
                                                           <img src={logo} alt="image not display"/>
                                                       </a>
                                                    </Link>
                                                </span>
                                                <ul className="nav float-end flex-row lists justify-content-end list-unstyled">
                                                    <li className='p-4'>
                                                        <Link href="/">
                                                            <a className="text-decoration-none text-body">{hometitle} <RiArrowDownSLine className='icons'/></a>
                                                        </Link>
                                                    </li>
                                                    <li className='p-4'>
                                                        <Link href="/pages">
                                                            <a className="text-decoration-none text-body">{pagetitle} <RiArrowDownSLine className='icons'/></a>
                                                        </Link>
                                                    </li>
                                                    <li className='p-4'>
                                                        <Link href="/shops">
                                                            <a className="text-decoration-none text-body">{shoptitle} <RiArrowDownSLine className='icons'/></a>
                                                        </Link>
                                                    </li>
                                                    <li className='p-4'>
                                                        <Link href="/blog">
                                                            <a className="text-decoration-none text-body">{blogtitle} <RiArrowDownSLine className='icons'/></a>
                                                        </Link>
                                                    </li>
                                                    <li className='p-4'>
                                                        <Link href="/pages">
                                                            <a className="text-decoration-none text-body">{portfoliotitle} <RiArrowDownSLine className='icons'/></a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                           </div>
                                       )
                                   })
                               }
                           </div>
                       </div>
                   </div>
               </nav>
           </header>        
        </>
    )
}
export default Header