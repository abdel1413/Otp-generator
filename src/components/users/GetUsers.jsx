export async function GetUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users?_start=0&_limit=5/")
    return await response.json()
}