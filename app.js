
const resumen = document.getElementById("resumen_b")
const borrar = document.getElementById("borrar_")


resumen.onclick = function(){
   
   if(validaciones()){ 
      
      let selectValue = document.getElementById("select_").value
      let total = 0.0
      try{
         let cantidad = document.getElementById("cantidad_").value
         
         switch(selectValue){
            
            case '1': total= cantidad * 200 * 0.2; break;
            case '2': total= cantidad * 200 * 0.5; break; 
            case '3': total= cantidad * 200 * 0.85; break; 
         }     

         document.getElementById("total_").innerHTML = "Total a pagar " + total + "$"
         
      }
      catch(error){
         alert(error.message)
      }
   }else{
      
   }

}

borrar.onclick = function(){
   document.getElementById("form_tickets_").reset()
   document.getElementById("err_email").className = "d-none"
   document.getElementById("err_nombre").className = "d-none"
   document.getElementById("err_apellido").className = "d-none"
   document.getElementById("err_cantidad").className = "d-none"
   document.getElementById("total_").innerHTML = "Total a pagar ...  "
}

function validaciones(){

   var emailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   var nameRegExp = /^[a-zA-Z\-]+$/
   var cantidadRegExp = /^\d+$/

   var isValid = true
   
   if (document.getElementById("correo_").value.match(emailRegExp))
      {
      document.getElementById("err_email").className = "d-none"
      }  
   else{
      isValid= false;
      document.getElementById("err_email").className = "d-block"     
      }

   if (document.getElementById("nombre_").value.match(nameRegExp))
   {document.getElementById("err_nombre").className = "d-none"}
   else{
      isValid= false
      document.getElementById("err_nombre").className = "d-block"}

   if (document.getElementById("apellido_").value.match(nameRegExp))
   {document.getElementById("err_apellido").className = "d-none"}   
   else{
      isValid= false
      document.getElementById("err_apellido").className = "d-block"}

   if (document.getElementById("cantidad_").value.match(cantidadRegExp))
   {document.getElementById("err_cantidad").className = "d-none" }
   else{
      isValid= false
      document.getElementById("err_cantidad").className = "d-block"}
  
      return isValid
}