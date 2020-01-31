import ProjectServices from "./service"

const ProjectController = {
    allProjects : (req, res) => {
        ProjectServices.allProjects(req, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
            //will be executed once the service is finished

            //res.status(200).send(result);
        })
    }
}

export default ProjectController