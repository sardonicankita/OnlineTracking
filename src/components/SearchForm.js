import React from 'react';

export default function SearchForm() {
  const searchValue = React.useRef('')
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your order Number</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={""}
          />
        </div>
      </form>
    </section>
  )
}
