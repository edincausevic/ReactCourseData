



export default function Select(props) {
  const { id, className, header, body, footer } = props

  return (
    <div key={id} className={className}>

      {header?.label && <label 
        htmlFor={header.label.htmlFor} 
        className={header.label.className}>
          {header.label.text} 
          <span className={header.label.requiredIndicator.className}>{header.label.requiredIndicator.icon}</span>
      </label>}
      
      <select {...body.element.attr}>
        {body.element.options.map(option => (
          <option key={option.id} value={option.value}>{option.text}</option>
        ))}
      </select>
    
      {footer?.note && <div className={footer.note.className}>{footer.note.text}</div>}
    </div>
  )
}
