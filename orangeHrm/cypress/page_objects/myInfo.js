class MyInfo {

    get submit() { return cy.get("input[type='submit']")}
    get users() { return cy.get("#menu_pim_viewMyDetails > span.left-menu-title")}
    get firstName() { return cy.get("input[id='firstName']")}
    get middleName() { return cy.get("input[id='middleName']")}
    get lastName() { return cy.get("input[id='lastName']")}
    get id() { return cy.get("input[id='employeeId']")}
    get birthday() { return cy.get("input[id='emp_birthday']")}
    get maritalStatus() { return cy.get("#emp_marital_status_inputfileddiv > div > input")}
    get gender() { return cy.get("#emp_gender_inputfileddiv > div > input")}
    get nationality() { return cy.get("#nation_code_inputfileddiv > div > input")}
    get expireLicense() { return cy.get("input[id='emp_dri_lice_exp_date']")}

    submitClick(){
        this.submit.click()
    }

    usersClick(){
        this.users.click()
        cy.wait(15000)
    }

    verifyFirstName(firstName){
        this.firstName.should(($el)=>{
            expect($el).to.have.value(firstName)
        })
    }

    verifyMiddleName(middleName){
        this.middleName.should(($el)=>{
            expect($el).to.have.value(middleName)
        })
    }
    verifyLastName(lastName){
        this.lastName.should(($el)=>{
            expect($el).to.have.value(lastName)
        })
    }
    verifyId(id){
        this.id.should(($el)=>{
            expect($el).to.have.value(id)
        })
    }
    verifyBirthday(birth){
        this.birthday.should(($el)=>{
            expect($el).to.have.value(birth)
        })
    }

    verifyMaritalStatus(status){
        this.maritalStatus.should("have.value", status)
    }
    verifyGender(gender){
        this.gender.should("have.value", gender)
    }
    verifyNationality(nationality){
        this.nationality.should("have.value", nationality)
    }
    verifyLicExpire(expire){
        this.expireLicense.should(($el)=>{
            expect($el).to.have.value(expire)
        })
    }

}

export const myInfo = new MyInfo()