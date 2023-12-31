    import React from 'react'

    const Alert = (props) => {
      const capitalize = (word)=>{
      // const lower = word.toLowerCase();
      // return lower.charAt(0).toLowerCase() + lower.slice(1);
      }
      return (
      
        <div className={`alert alert- ${props.alert.type}alert-dismissible fade show`} role="alert">
        props.alert <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
       <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       </div>
    
      )
    }
    
    export default Alert;