import React from 'react'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full bg-transparent z-50'>
      <nav className='flex items-center justify-between p-4 bg-opacity-75 backdrop-filter backdrop-blur-lg'>
        <div className='flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 24 24'
            fill='none'
            stroke='white'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
            style={{
              marginRight: '4px',
              verticalAlign: 'middle',
              position: 'relative',
              top: '3px',
            }} // Apply position relative and top
          >
            <polyline points='8 15 12 11 16 15'></polyline>
            <polyline points='8 9 12 5 16 9'></polyline>
          </svg>
          <h1
            className='text-white text-2xl font-extrabold tracking-wide'
            style={{ lineHeight: '1.2' }}
          >
            Next Steps Assessment
          </h1>
        </div>
      </nav>
    </header>
  )
}

export default Header
