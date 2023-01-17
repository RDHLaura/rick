import React, {useEffect, useState} from "react";

/**
 * @memberOf module:Components
 * @name Title
 * @component
 * @description Título de la web, el cual contiene una imágen que se mueve en un intervalo de un segundo por el contenido del título.
 * @param props recibe el texto del título de la pág
 * @returns {JSX.Element} Título
 */
export function Title (props) {
  const imageTitle = <img style={{width: "5rem"}} src={require('../assets/images/88214-sanchez-morty-gourd-smith-citrullus-portal-rick.png')} alt=" "/>
  const initialContentTitle = props.contentTitle;
  const [contentTitle, setContentTitle] = useState(<>{props.contentTitle}</>);
  const [counter, setCounter] =useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      const content = <>
                        {initialContentTitle.substring(0,counter)}
                        {imageTitle}
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