import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Logo from '../../assets/logo.svg'
import {Link} from '@reach/router'

const Nav = styled.div`
  .header {
    position: fixed;
    width: 100%;
    padding: 50px 0;
    z-index: 100;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .headerScrolled {
    background: rgba(0, 0, 0, 0.8);
    padding: 20px 0;
    backdrop-filter: blur(20px);
  }

  .navGroup {
    max-width: 860px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-items: center;
    justify-items: flex-end;
  }

  .navGroup img {
    margin-right: 5vw;
  }

  .header a:last-child {
    padding-right: 20px;
  }

  .header a {
    color: white;
  }

  @media (max-width: 640px) {
    .header {
      padding: 12px 0;
    }

    .navGroup {
      grid-template-columns: repeat(4, auto);
    }

    .header a {
      display: none;
    }

    .header a:first-child {
      display: inline;
      padding: 2vh 0;
      margin-left: -2vw;
    }
  }
`

function NavBar() {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      scrollTop > 50 ? scroll : false
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      setScroll
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <Nav>
      <div className={scroll ? 'header headerScrolled' : 'header'}>
        <div className="navGroup">
          <Link href="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
      </div>
    </Nav>
  )
}

export default NavBar
