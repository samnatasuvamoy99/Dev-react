 //injeact
 
   function customRender(reactElement , container){
    /*
      const domElement = document.createElement( reactElement.type)
      domElement.innerHTML=reactelement.children
      domElement.setAttribute('href' ,reactElement.props.herf)
      document.setAttribute('target' , reactElement.props.target)
       
      container.appenChild(domElement)
   
      */
  // loop base code 
    const domElement =document.createElement(reactElement.type) 
     domElement.innerHTML=reactElement.children
      for( const prop in reactElement.props){
           if(prop === 'children') continue;

           domElement.setAttribute(prop,reactElement.props[prop])
      } 
      container.appendChild(domElement)
   }

 const reactelement ={
   type:'a',
     props:{
           href:'https://google.com',
           target:'_blank'
           
     }
      ,children:'click me to vist google'
 }

const maincontainer = document.querySelector('#root')
 
customRender( reactelement , maincontainer) // it will put up all object  reactelemnt in the root dev


