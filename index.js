const puppeteer = require('puppeteer');

const lerPedidoGrowth = async () => {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']})
    const page = await browser.newPage()

    await page.goto(process.argv[2])

    const result = await page.evaluate(() => {
        const result = {}
        result.nome = WapStore.produto.nome
        result.preco = WapStore.produto.precoPor.toFixed(2)
        result.boleto = (WapStore.produto.precoPor * 0.9).toFixed(2)

        return result
    })

    browser.close()
    return result
}

lerPedidoGrowth().then((value) => {
    console.log(value)
})