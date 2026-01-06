


export default function Button(props) {
  const { body } = props

  return (
    <button {...body.element.attr}>{body.element.text}</button>
  )
}
