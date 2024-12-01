

async function Apilink(){
    const data=await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'GET',
    });
    return await data.json();
}
export default Apilink;