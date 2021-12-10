const puppeteer = require('puppeteer');

module.exports = {
    async index(link) {
        const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']})
        const page = await browser.newPage()

        await page.goto(link)

        const result = await page.evaluate(() => {
            const resultado = {}
            resultado.nome = WapStore.produto.nome
            resultado.preco = WapStore.produto.precoPor.toFixed(2)
            resultado.boleto = (WapStore.produto.precoPor * 0.9).toFixed(2)

            return resultado
        })

        browser.close()
        return result
    }
}