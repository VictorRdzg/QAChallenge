import { t, Selector } from 'testcafe'

class ContactPage{
    constructor(){
        this.dropdownSubject = Selector('#id_contact')
        this.customerServiceOption = Selector('#id_contact option:nth-child(2)')
        this.emailUser = Selector('#email')
        this.idOrder = Selector('#id_order')
        this.messageUser = Selector('#message')
        this.sendButton = Selector('#submitMessage')
        this.alertDangerMessage = Selector('.alert-danger')
        this.alertSuccessMessage = Selector('.alert-success')
    }

    FillContacFields = async (emailUser = null, idOrder = null, messageUser = null) => {
        await t
            .click(this.dropdownSubject)
            .click(this.customerServiceOption)
            .typeText(this.emailUser, emailUser, {paste : true})
            .typeText(this.idOrder, idOrder, {paste : true})
            .typeText(this.messageUser, messageUser, {paste : true})
            .click(this.sendButton)
    }
    

    ValidateFields = async (emailUser, messageUser) => {
        await t
            .click(this.sendButton)
            .expect(this.alertDangerMessage.exists).ok('There is 1 error')
            .typeText(this.emailUser, emailUser, {paste : true})
            .click(this.sendButton)
            .expect(this.alertDangerMessage.exists).ok('There is 1 error')
            .typeText(this.messageUser, messageUser, {paste : true})
            .expect(this.alertDangerMessage.exists).ok('There is 1 error')
            .click(this.dropdownSubject)
            .click(this.customerServiceOption)
            .click(this.sendButton)
    }
}

export default new ContactPage()