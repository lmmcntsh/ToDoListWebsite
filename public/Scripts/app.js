// IIFE --> immediately invoked function expression

(function(){
    function Start()
    {
        
        console.log("App Started...");
        // Script to ask user for confirmation before deleting
        let deleteButtons = document.querySelectorAll('.btn-danger');
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=> {
            if(!confirm('Are you sure?'))
            {
                event.preventDefault();
                window.location.assign('/show-list');
            }
        });
    }
    }
    window.addEventListener("load", Start);


    

})();