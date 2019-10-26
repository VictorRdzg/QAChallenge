import { t, Selector } from 'testcafe'

class homePage{
    constructor(){
        this.contactUsBtn = Selector('#contact-link')
        this.searchBox = Selector('#search_query_top')
        this.resultKeyword = Selector('.ac_results  li:nth-child(1)')

    }

    ClickContactUsBtn = async () =>{
        await t
            .click(this.contactUsBtn)
    }

    TypeKeyword = async keyword =>{
        await t
            .typeText(this.searchBox, keyword, {paste: true})
            .click(this.resultKeyword)
    }
}

export default new homePage()