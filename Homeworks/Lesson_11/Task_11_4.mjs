// Task 11_4

class UserFetcher {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}

	// Асинхронний метод для виконання запиту до сервера
	async fetchUserData(userId) {
		try {
			const response = await fetch(`${this.baseUrl}/users/${userId}`);
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			const user = await response.json();
			return user;
		} catch (error) {
			console.error('Error fetching user data:', error);
			throw error; // Повторна помилка, щоб її можна було обробити ззовні
		}
	}
}

class UserOperations {
	constructor(userFetcher) {
		this.userFetcher = userFetcher;
	}

	// Метод для отримання всіх користувачів за допомогою Promise.all
	async getAllUsers() {
		try {
			const [user1, user2] = await Promise.all([
				this.userFetcher.fetchUserData(1),
				this.userFetcher.fetchUserData(2),
			]);
			console.log('Promise.all result:', { user1, user2 });
			return { user1, user2 };
		} catch (error) {
			console.error('Promise.all error:', error);
		}
	}

	// Метод для отримання першого користувача за допомогою Promise.race
	async getFirstUser() {
		try {
			const user = await Promise.race([
				this.userFetcher.fetchUserData(1),
				this.userFetcher.fetchUserData(2),
			]);
			console.log('Promise.race result:', user);
			return user;
		} catch (error) {
			console.error('Promise.race error:', error);
		}
	}
}

const userFetcher = new UserFetcher('https://jsonplaceholder.typicode.com');
const userOperations = new UserOperations(userFetcher);

userOperations.getAllUsers();
userOperations.getFirstUser();
