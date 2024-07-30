// Task 11_3

async function fetchUserData() {
	try {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/users/1',
		);
		const user = await response.json();
		return user;
	} catch (error) {
		console.error('Error fetching user data:', error);
		throw error;
	}
}

async function getAllUsers() {
	try {
		const [user1, user2] = await Promise.all([
			fetchUserData(),
			fetchUserData(),
		]);
		console.log('Promise.all result:', { user1, user2 });
		return { user1, user2 };
	} catch (error) {
		console.error('Promise.all error:', error);
	}
}

async function getFirstUser() {
	try {
		const user = await Promise.race([fetchUserData(), fetchUserData()]);
		console.log('Promise.race result:', user);
		return user;
	} catch (error) {
		console.error('Promise.race error:', error);
	}
}

getAllUsers();
getFirstUser();
