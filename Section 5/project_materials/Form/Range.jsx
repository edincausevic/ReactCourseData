import { useEffect, useState } from "react"



export default function Range(props) {
  const { id, className, header, body, footer, resetForm } = props
  const [value, setValue] = useState(body.element.attr.defaultValue)

  const handleRangeChange = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    const rangeValue = document.getElementById(body.element.attr.id).value
    if(Number(rangeValue) !== Number(value) )setValue(rangeValue)
  }, [value])

  useEffect(() => {
    if(resetForm) setValue(body.element.attr.defaultValue || 250)
  }, [resetForm])

  return (
    <div key={id} className={className}>

      {header?.label && <label 
        htmlFor={header.label.htmlFor} 
        className={header.label.className}>
          {header.label.text} 
          {header.label.requiredIndicator && <span className={header.label.requiredIndicator.className}>{header.label.requiredIndicator.icon}</span>}
      </label>}
      
      <input {...body.element.attr} onChange={handleRangeChange}/>

      <div className="flex justify-between text-sm text-gray-600">
          <span>$<b>{body.element.attr.min}</b></span>
          <span>$<b>{value}</b></span>
      </div>
    
      {footer?.note && <div className={footer.note.className}>{footer.note.text}</div>}
    </div>
  )
}
