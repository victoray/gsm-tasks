import axios from "axios";

export default axios.create({
    baseURL: "https://gsmtasks.com/api/tasks/tasks",
    headers: {
        Authorization: "Token a2ce31ff66daf0195cdae32968937930f002d4de"
    }
})
