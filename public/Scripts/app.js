//IIFE - immediately invoke function
(function()
{
    function Start()
    {
        console.log("App started....")

    }

    window.addEventListener("load", Start);
})();