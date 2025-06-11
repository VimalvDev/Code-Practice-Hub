let username = "Vimal"

try { // error code
    console.log(username)
}
catch(error) // runs if there is error
{
    console.log("Error occured")
    console.log(error.name)
    console.log(error.message)
    // console.log(error.stack)
}
finally // Run weather there is an error or not. Not used much, Optional
{
    console.log("Finally, Code executed")
}