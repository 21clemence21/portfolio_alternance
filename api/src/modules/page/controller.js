import PageServices from "./service"

const PageController = {
    getAll : (req, res) => {
        PageServices.getAll(req, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
            //will be executed once the service is finished

            //res.status(200).send(result);
        })
    },

    getById : (req, res) => {
        PageServices.getById(req.params.id, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
            //will be executed once the service is finished
            //res.status(200).send(result);
        })
    },

}

export default PageController