async function fetchTODOS(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?completed=true');
    const data = await response.json();

    console.log(data);

}

fetchTODOS();

