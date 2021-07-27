import React from 'react'

function Header() {
  return (
    <header className={'container-fluid mx-0 py-4 '}       >
      <div role={'document'} aria-label={'Application header'} className={'col-12 d-flex flex-row justify-content-center align-items-canter'} >
        <h2 className={'mb-0'}>{'Todo Manager'}</h2>
      </div >
    </header>
  )
}

export default Header