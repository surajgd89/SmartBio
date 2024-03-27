import axios from 'axios';
const API_URL = `${process.env.REACT_APP_API_URL}`;

//FETCH SINGLE USERS
const FetchUser = async (id, setUser, setLoading) => {
    try {
        await new Promise((resolve) =>
            setTimeout(resolve, Math.random() * 2000)
        );
        const response = await axios.get(`${API_URL}/users/${id}`);
        setUser(response.data);
    } catch (error) {
        setUser('');
    } finally {
        setLoading(false);
    }
};

//CREATE USER
const CreateUser = async (data, setUser, setLoading) => {
    try {
        await new Promise((resolve) =>
            setTimeout(resolve, Math.random() * 2000)
        );
        const response = await axios.post(`${API_URL}/users`, data);
        setUser(response.data);
    } catch (error) {
        console.error('Error posting user data:', error.message);
        throw error;
    } finally {
        setLoading(false);
    }
};

//UPDATE USER
const UpdateUser = async (id, data, setUser, setLoading) => {
    try {
        await new Promise((resolve) =>
            setTimeout(resolve, Math.random() * 2000)
        );
        const response = await axios.put(`${API_URL}/users/${id}`, data);
        setUser(response.data);
    } catch (error) {
        console.error('Error posting user data:', error.message);
        throw error;
    } finally {
        setLoading(false);
    }
};

//DELETE USER
const DeleteUser = async (id, setUser, setLoading) => {
    try {
        await new Promise((resolve) =>
            setTimeout(resolve, Math.random() * 2000)
        );
        const response = await axios.delete(`${API_URL}/users/${id}`);
        setUser(response.data);
    } catch (error) {
        console.error('Error deleting user:', error.message);
        throw error;
    } finally {
        setLoading(false);
    }
};

//FETCH ALL USERS
const FetchUsers = async (setUsers, setLoading) => {
    try {
        await new Promise((resolve) =>
            setTimeout(resolve, Math.random() * 2000)
        );
        const response = await axios.get(`${API_URL}/users`);
        setUsers(response.data);
    } catch (error) {
        console.error('Error fetching all users:', error.message);
    } finally {
        setLoading(false);
    }
};

export { FetchUser, CreateUser, UpdateUser, DeleteUser, FetchUsers };
