import { useEffect, useRef, useState } from "react"
import TextInput from "./TextInput"
import Button from "./Button"
import Select from "./Select"
import Range from "./Range"
import Checkbox from "./Checkbox"
import { useLocation, useNavigate, useNavigation, useParams, useSearchParams } from "react-router-dom"


export default function Form(props) {
  const { 
    id,
    onSubmit,
    resetForm,
    onChange, 
    children,
    formValue,
    schema,
    loadSchema,
    useUrlSearchParamsOnChange, 
    useUrlSearchParamsOnSubmit, 
  } = props

  const location = useLocation()
  const navigate = useNavigate()
  
  const formRef = useRef(null)
  const [formSchema, setFormSchema] = useState(schema || null)

  // LOAD SCHEMA JSON
  useEffect(() => {
    if(!loadSchema) return;

    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => { 
      try {
        const response = await fetch(loadSchema, {signal});
        
        if (!response.ok) throw new Error('Request failed');
        
        const result = await response.json();
        
        if (!signal.aborted) {
          setFormSchema(result);
        }
      } catch (error) {
        if (!signal.aborted) {
          console.error('Fetch error:', error);
        }
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      abortController.abort();
    };
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = extractFormData()

    if(onSubmit) onSubmit(formData.urlSearchParams)

    if(useUrlSearchParamsOnSubmit) addSearchParamsToURL(formData.urlSearchParams)
    //console.log('handleSubmit', formData)
  }

  const handleChange = () => {
    const formData = extractFormData()

    if(onChange) onChange(formData)

    if(useUrlSearchParamsOnChange) addSearchParamsToURL(formData.urlSearchParams)  
    //console.log('handleChange', formData)
  }

  const extractFormData = () => {
    const objectData = Object.fromEntries(new FormData(formRef.current))
    const urlSearchParams = new URLSearchParams(objectData).toString();

    return {objectData, urlSearchParams}
  }

  const addSearchParamsToURL = (urlParams) => {
    window.history.pushState(null, '', `?${urlParams}`)
  }

  const addDataToForm = (paramsObject) => {
    if(!formSchema) return;

    const form = document.getElementById(formSchema.id)
    const formElements = form.querySelectorAll('[name]')

    formElements.forEach(elem => {

      if(paramsObject[elem.name] === 'on') elem.checked = true
      if(paramsObject[elem.name] === 'off') elem.checked = false
      if(paramsObject[elem.name] ) elem.value = paramsObject[elem.name]
    })
  }

  const renderComponents = (field) => {
    if(field.component === 'TextInput') return <TextInput key={field.id} {...field}/>
    if(field.component === 'Select') return <Select key={field.id} {...field}/>
    if(field.component === 'Range') return <Range key={field.id} {...field} resetForm={resetForm}/>
    if(field.component === 'Checkbox') return <Checkbox key={field.id} {...field}/>
    if(field.component === 'Button') return <Button key={field.id} {...field}/>
  }

  // RESET FORM
  useEffect(() => {
    if(resetForm) {
      // see why it doesnt work sometimes, if you dont reload a page after save///
      /////////////////////////// ////// /////////////
      // solution: add prop formHeader is add button as jsx to it -> resent from inside
      // reset form by removing search params
      if(useUrlSearchParamsOnChange || useUrlSearchParamsOnSubmit) {
        // remove search params from the url
        navigate(location.pathname)
      }

      document.getElementById('resetBtn').click()
    }
  }, [resetForm])


  useEffect(() => {
    if(useUrlSearchParamsOnChange || useUrlSearchParamsOnSubmit) {
      const params = new URLSearchParams(window.location.search)
      const paramsObject = Object.fromEntries(params.entries())
      
      addDataToForm(paramsObject)
    }

    if(formValue) addDataToForm(formValue)
  }, [formSchema])

  if(loadSchema && !formSchema) return 'Loading ...'
  if(!schema && !formSchema) return 'Please provide a form schema!';
  return (
    <form   
      id={formSchema.id}
      ref={formRef} 
      onChange={handleChange}
      onSubmit={handleSubmit}>

        {formSchema.fields.map(field => {

          if(field.grid) {
            return (
              <div key={field.id} className={field.className}>
                {field.grid.map(gridField => {
                  return renderComponents(gridField)
                })}
              </div>
            )
          }

          return renderComponents(field)
        })}
      
      {children}

      <button id="resetBtn" type="reset" className="hidden"></button>
    </form>
  )
}
