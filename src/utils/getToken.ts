export const getTokenStorage = () => {
	const token = localStorage.getItem('token');
	return token ? token : null
}