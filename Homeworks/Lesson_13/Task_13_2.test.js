// const axios = require("/Users/annadenisenko/AQA_JavaScript/jest.setup"); // Import the configured Axios instance

require('module-alias/register');
const axios = require('@setup');

describe('JSONPlaceholder API Tests', () => {

  test('GET: Get a user with ID = 1', async () => {
    const getUserResponse = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    expect(getUserResponse.status).toBe(200);
    expect(getUserResponse.data.id).toBe(1);
  });

  test('POST: Create a new user', async () => {
    const newUser = {
      name: 'Anna Denysenko',
      username: 'anna',
      email: 'email@example.com'
    };
    const createUserResponse = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
    expect(createUserResponse.status).toBe(201);
    expect(createUserResponse.data.name).toBe(newUser.name);
  });

  test('GET: Get all posts', async () => {
    const getPostsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
    expect(getPostsResponse.status).toBe(200);
    expect(Array.isArray(getPostsResponse.data)).toBe(true);
  });

  test('POST: Create a new post', async () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    const createPostResponse = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
    expect(createPostResponse.status).toBe(201);
    expect(createPostResponse.data.title).toBe(newPost.title);
  });

  test('GET: Get a post with ID = 1', async () => {
    const getPostResponse = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(getPostResponse.status).toBe(200);
    expect(getPostResponse.data.id).toBe(1);
  });
});
