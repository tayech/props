import React from 'react';
import propTypes from 'prop-types'
function fullName(props){ 
  const styleObject={color:"blue",textAlign:"center",fontStyle:"italic",fontFamily:"serif"}
    return(<div style={styleObject}>
      <div>Name: {props.name}</div>
      <div>Bio: {props.bio}</div>
      <div>Profession:{props.profession}</div>
      <div >{props.image}</div>
    </div> )
  }
  fullName.defaultProps = {
    name: "haythem tayech",
    bio:"etudiant en gomycode",
    profession: "develloper web",
    image:<img src="/Images/dev.jpg" alt="logo"/>
  };
  fullName.propTypes={
    name:propTypes.string,
    bio:propTypes.string,
    profession:propTypes.string,
    image:propTypes.any
  }
export default fullName;

