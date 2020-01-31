import db from "../../setup/database";

// Notre query s'occupe d'effectuer la requête sur la base de donneés et de renvoyer au service les datas
const Query = {
    getAllPages: (param, successCallback, failureCallback) => {

        let sqlQuery = "SELECT * FROM `user`";

        db.query(sqlQuery, (err, rows, fields, res) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return failureCallback("No user.");
            }
        })
    }
}

export default Query