import contactPage from '../page_objects/contactPage'
import homePage from '../page_objects/homePage'
import {base_url, emailUser, idOrder, messageUser, keyword} from '../utils/constants'

fixture`Contact test`
    .page(base_url)


test('Find all products containing the keyword', async t =>{
    await homePage.TypeKeyword(keyword)
})