const products = require(`../products.json`)

const getProduct = (req,res) => {
    const product = products.find(val => val.id === +req.params.id)
    if(!product){
        return res.status(500).send(`product not listed`)
    }
    res.status(200).send(product)

}
module.exports = getProduct