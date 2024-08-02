import axios from 'axios';

const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
console.log(result.data);

