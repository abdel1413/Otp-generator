export async function SubmitForm(_, formData){
    const name = formData.get('name')
    console.log('name is: ', name)

    const hour = new Date().getHours();
    let greeting ;
    if(hour > 12){
        greeting="Good morning"
    }else if(hour <18){
        greeting = "Good afternoon" 
    }else{
        greeting = "Goog evening"
    }
    return( name?  {message: `${greeting}, ${name}`}: {message: alert("your have to enter a name")})
}