//service page

import UserQueries from "./query"

const UserServices = {
    allUsers: (req, callback) => {
        UserQueries.getAllUsers(req, response => {
            return callback({ success: true, message: response });
        }, error => {
            return callback({ success: false, message: error });
        });
    }
}

export default UserServices;