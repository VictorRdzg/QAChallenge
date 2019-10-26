import contactPage from '../page_objects/contactPage'
import homePage from '../page_objects/homePage'
import {base_url, emailUser, idOrder, messageUser, keyword} from '../utils/constants'

fixture`Contact test`
    .page(base_url)

test('Fill fields from Contact Form - Happy Path', async t =>{
    await homePage.ClickContactUsBtn()
    await contactPage.FillContacFields(emailUser,idOrder,messageUser)
    await t.expect(contactPage.alertSuccessMessage).ok('Your message has been successfully sent to our team.')
})

test('Validate Fields', async t =>{
    await homePage.ClickContactUsBtn()
    await contactPage.ValidateFields(emailUser, messageUser)
    await t.expect(contactPage.alertSuccessMessage).ok('Your message has been successfully sent to our team.')
})