// tsc shop --target es6 && node shop

type Article = {
    name: string,
    quantity: number
}

function quantitySumByArticleName_1(articles: Article[], articleName: string): number {
    let quantitySum = 0
    for (let eachArticle of articles) {
        if (eachArticle.name == articleName) {
            quantitySum += eachArticle.quantity
        }
    }
    return quantitySum
}

function quantitySumByArticleName_2(articles: Article[], articleName: string): number {
    return articles
        .filter(article => article.name == articleName)
        .reduce((sum, article) => sum + article.quantity, 0)
}

let articles = [
    { name: "product 1", quantity: 2 },
    { name: "product 2", quantity: 10 },
    { name: "product 1", quantity: 3 },
]

console.log(quantitySumByArticleName_1(articles, "product 1"))
console.log(quantitySumByArticleName_2(articles, "product 1"))
