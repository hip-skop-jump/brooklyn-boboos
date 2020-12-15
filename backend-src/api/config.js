import config from "../config";

export default async (req, res) => {
    res.status(200).send(`window.config = ` + JSON.stringify(config.frontend));
};
