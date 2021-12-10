const findProductByLink = require('./utils/findProductByLink')

module.exports = {
    async index(req, res) {

        const { link } = req.headers
        const resultado = await findProductByLink.index(link)

        return res.json(resultado)
    }
}