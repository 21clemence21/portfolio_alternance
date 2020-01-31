//service page

import PageQueries from "./query"

const PageServices = {
    allPages: (req, callback) => {
        UserQueries.getAllPages(req, response => {
            return callback({ success: true, message: response });
        }, error => {
            return callback({ success: false, message: error });
        });
    }
}

export default UserServices;