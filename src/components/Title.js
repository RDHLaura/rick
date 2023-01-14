import React, {useEffect, useState} from "react";


export function Title (props) {
  //crea un efecto en el título de la página
  const imageLogo = <img style={{width: "5rem"}} src={require('../assets/images/88214-sanchez-morty-gourd-smith-citrullus-portal-rick.png')} alt=" "/>
  const initialContentTitle = "Rick and Morty";
  const [contentTitle, setContentTitle] = useState(<>Rick and Morty</>);
  const [counter, setCounter] =useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      const content =
        <>
          {initialContentTitle.substring(0,counter)}
          {imageLogo}
          {initialContentTitle.substring(counter+1, initialContentTitle.length)}
        </>;
      setContentTitle(content);
      (counter <= initialContentTitle.length)?
        setCounter(counter + 1) :
        setCounter(0)
    }, 1000);
    return () => clearInterval(interval);

  }, [contentTitle]);

  return(
    <h1 className="title" id="title_dashboard" >{contentTitle}</h1>
  )
}