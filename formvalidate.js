/* Put the following Code in HTML Code Editor Of your Webflow Page 
After Sucessful submission, Page will redirect to specified Link

*/

<script src="//pages.fountain.com/js/forms2/js/forms2.min.js"></script>
/* Replace ID from marketo form Id*/
<form id="mktoForm_xxxx"></form>
/* Replace Load form from your marketo form load*/
<script>MktoForms2.loadForm("//pages.fountain.com", "abc-EFG-def", 1234, function(form) { 
    MktoForms2.whenReady(function(form) {  
       function match_alphabets(textbox){
            var letters = /^[A-Za-z]+$/;
            if(textbox.match(letters)) 
            {
            return true;
            }
            else { 
            return false;
            }
        }

		form.onValidate(function() {
            var vals = form.vals();
      /* Form Fields where you want to validate */ 
            var obj = {
                        FirstName: vals.FirstName,
                        LastName: vals.LastName,
                        Company: vals.Company,
                        Title: vals.Title
                    };
            var flagcheck = 0;
            Object.keys(obj).forEach(function(key) {      
          //  console.log(obj[key]);
    
            if( (match_alphabets(obj[key])) )
            {
                   // form.submittable(true);   
            }
            else
            {
                      //  form.submittable(false);
                        // Show error message, pointed at VehicleSize element
                        let elementName = "#"+key;
                        let firstNameElem = form.getFormElem().find(elementName);     
                        form.showErrorMessage("Please input alphabet characters only", firstNameElem);
                        
                        flagcheck++;                 
             }  
            });  
            
            if(flagcheck>0){
       
            form.submittable(false);
            return false;
            }
            else{
            form.submittable(true); 
            }
        });
    
      if (form.submittable()) {
       /* Page will redirect to specified Link */
         form.onSubmit(function(values, followUpUrl) {         
          window.open(
          'LINK URL',
          '_blank' // <- This is what makes it open in a new window.
          );
        });
      }
      else{
      form.submittable(false);
      }
     
   });
    
});

</script>
