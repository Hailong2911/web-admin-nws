import axios from 'axios';

const Department_Url = 'https://nws-management.herokuapp.com/department';


export const getDepartment = async (id) => {
    id = id || '';
    return await axios.get(`${Department_Url}/${id}`);
}

export const addDepartment = async (department) => {
    return await axios.post(`${Department_Url}`, department);
}

export const deleteDepartment = async (id) => {
    return await axios.delete(`${Department_Url}/${id}`);
}

export const editDepartment = async (id, department) => {
    return await axios.put(`${Department_Url}/${id}`, department)
}