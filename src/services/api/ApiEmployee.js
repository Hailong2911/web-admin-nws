import axios from 'axios';

const Employee_Url = 'https://nws-management.herokuapp.com/employee';


export const getEmployee = async (id) => {
    id = id || '';
    return await axios.get(`${Employee_Url}/${id}`);
}

export const addEmpployee = async (employee) => {
    return await axios.post(`${Employee_Url}`, employee);
}

export const deleteEmployee = async (id) => {
    return await axios.delete(`${Employee_Url}/${id}`);
}

export const editEmployee = async (id, employee) => {
    return await axios.put(`${Employee_Url}/${id}`, employee)
}