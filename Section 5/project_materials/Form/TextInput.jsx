

import React from 'react'

export default function TextInput(props) {
  const { id, className, header, body, footer } = props

  return (
    <div key={id} className={className}>

      {header?.label && <label 
        htmlFor={header.label.htmlFor} 
        className={header.label.className}>
          {header.label.text} 
          {header.label.requiredIndicator && <span className={header.label.requiredIndicator.className}>{header.label.requiredIndicator.icon}</span>}
      </label>}
      
      <div className='relative'>

        {body.element.icon && <img {...body.element.icon}/>}
        
        <input 
          {...body.element.attr}
          onInvalid={(e) => {
            if(body.element.customValidity) e.target.setCustomValidity(body.element.customValidity.msg)
          }}
          onInput={(e) => {
            e.target.setCustomValidity("")
          }}
          />
      </div>
    
      {footer?.note && <div className={footer.note.className}>{footer.note.text}</div>}
    </div>
  )
}
