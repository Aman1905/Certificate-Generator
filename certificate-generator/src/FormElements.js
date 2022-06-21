import React from 'react'

const FormElements = ({Config}) => {
  return (
    <>
        {[
            {Label: "Email ID", ID: "Email", Type: "email", Placeholder: "name@example.com"},
            {Label: "Whatsapp Number", ID: "WhatsApp", Type: "number", Placeholder: "your 10 digits numbers"}
        ].map((fc) => (
            <div class="mb-3" key={fc.ID}>
                <label for={fc.ID} className="form-label">{fc.Label}</label>
                <input type={fc.Type} className="form-control" id={fc.ID} placeholder={fc.Placeholder} />
            </div>
        ))}

        <div className='mb-3'>
            <label for="Type" className='form-label'>Types of Certificate</label>
            <select class="form-select" aria-label="Please select the certificate type">
                <option selected disbaled>Please select the Certificate type</option>
                {Object.keys(Config.CertificateTypes).map(key => (
                    <option key={key} value={key}>{Config.CertificateTypes[key]}</option> 
                ))}
            </select>
        </div>
    </>
  )
}

export default FormElements