// Task 11_2

//2-1

function getRequest() {
	fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => {
			if (!response.ok) {
				throw new Error(
					'Network response code is not successfull ' + response.statusText,
				);
			}
			return response.json();
		})
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.error('There was a problem with the fetch operation:', error);
		});
}

getRequest();

// 2-2

function fetchUserData() {
	return fetch('https://jsonplaceholder.typicode.com/users/1').then(
		(response) => response.json(),
	);
}

const allPromises = Promise.all([fetchUserData(), fetchUserData()])
	.then((results) => {
		const [user1, user2] = results;
		console.log('Promise.all result:', { user1, user2 });
		return { user1, user2 };
	})
	.catch((error) => {
		console.error('Promise.all error:', error);
	});

const racePromises = Promise.race([fetchUserData(), fetchUserData()])
	.then((result) => {
		console.log('Promise.race result:', result);
		return result;
	})
	.catch((error) => {
		console.error('Promise.race error:', error);
	});
