

export default function Checkbox(props) {
  const { id, className, header, body, footer } = props

  return (
    <div key={id} className={className}>

      {header?.label && <label 
        htmlFor={header.label.htmlFor} 
        className={header.label.className}>
          {header.label.text} 
          {header.label.requiredIndicator && <span className={header.label.requiredIndicator.className}>{header.label.requiredIndicator.icon}</span>}
      </label>}
      
      <div className={body.element.className}>
        {body.element.checkboxes.map(checkbox => (
          <div key={checkbox.id} className={checkbox.className}>
            <input {...checkbox.attr} />
            <label 
              htmlFor={checkbox.label.htmlFor}
              className={checkbox.label.className}
              >
                {checkbox.label.text}
            </label>
          </div>
        ))}
      </div>
    
      {footer?.note && <div className={footer.note.className}>{footer.note.text}</div>}
    </div>
  )
}
