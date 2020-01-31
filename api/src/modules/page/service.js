//service page

import PageQueries from "./query"

const PageServices = {
    getAll: (req, callback) => {
        PageQueries.getAllPages(req, response => {
            return callback({ success: true, message: response });
        }, error => {
            return callback({ success: false, message: error });
        });
    },

    getById: (id, callback) => {
        PageQueries.getById(id, 
            response => {
                return callback({ success: true, message: response });
            }, 
            error => {
            return callback({ success: false, message: error });
        });
    }
}

export default PageServices;