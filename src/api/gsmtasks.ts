import axios from "axios";

export default axios.create({
    baseURL: "https://gsmtasks.com/api/tasks/tasks",
    headers: {
        Authorization: "Token 8aef6ae03d38ae81f4875ff52a78aaa6c57384b9"
    }
})
