import UserServices from "./service"

const UserController = {
    allPages : (req, res) => {
        UserServices.allPages(req, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
            //will be executed once the service is finished

            //res.status(200).send(result);
        })
    }
}

export default UserController