import React from 'react'
import FormElements from './FormElements'

const FormContainer = ({Config}) => {
  return (
    <div className='formContainer col-12 col-sm-6'>
        <form>
            <FormElements Config={Config} />
            <button type="submit" className="btn btn-primary">Claim Certificate</button>
        </form>
    </div>
  )
}

export default FormContainer