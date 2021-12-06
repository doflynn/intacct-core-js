/**
 * @module Intacct/Core/Project
 * 
 *                         <project>
                              <RECORDNO>411</RECORDNO>
                              <PROJECTID>371 Jumping Jacks</PROJECTID>
                              <NAME>Athletics</NAME>
                              <DESCRIPTION></DESCRIPTION>
                              <CURRENCY>USD</CURRENCY>
                              <PROJECTCATEGORY>Internal Non-billable</PROJECTCATEGORY>
                              <PROJECTSTATUSKEY></PROJECTSTATUSKEY>
                              <PROJECTSTATUS></PROJECTSTATUS>
                              <PREVENTTIMESHEET></PREVENTTIMESHEET>
                              <PREVENTEXPENSE></PREVENTEXPENSE>
                              <PREVENTAPPO></PREVENTAPPO>
                              <PREVENTGENINVOICE></PREVENTGENINVOICE>
                              <STATUS>active</STATUS>
                              <BEGINDATE></BEGINDATE>
                              <ENDDATE></ENDDATE>
                              <BUDGETAMOUNT></BUDGETAMOUNT>
                              <CONTRACTAMOUNT></CONTRACTAMOUNT>
                              <ACTUALAMOUNT></ACTUALAMOUNT>
                              <BUDGETQTY></BUDGETQTY>
                              <ESTQTY></ESTQTY>
                              <ACTUALQTY></ACTUALQTY>
                              <APPROVEDQTY></APPROVEDQTY>
                              <REMAININGQTY></REMAININGQTY>
                              <PERCENTCOMPLETE></PERCENTCOMPLETE>
                              <OBSPERCENTCOMPLETE>0</OBSPERCENTCOMPLETE>
                              <BILLINGTYPE></BILLINGTYPE>
                              <SONUMBER></SONUMBER>
                              <PONUMBER></PONUMBER>
                              <POAMOUNT></POAMOUNT>
                              <PQNUMBER></PQNUMBER>
                              <SFDCKEY></SFDCKEY>
                              <QARROWKEY></QARROWKEY>
                              <OAKEY></OAKEY>
                              <PARENTKEY></PARENTKEY>
                              <PARENTID></PARENTID>
                              <PARENTNAME></PARENTNAME>
                              <INVOICEWITHPARENT>false</INVOICEWITHPARENT>
                              <CUSTOMERKEY></CUSTOMERKEY>
                              <CUSTOMERID></CUSTOMERID>
                              <CUSTOMERNAME></CUSTOMERNAME>
                              <SALESCONTACTKEY></SALESCONTACTKEY>
                              <SALESCONTACTID></SALESCONTACTID>
                              <SALESCONTACTNAME></SALESCONTACTNAME>
                              <PROJECTTYPEKEY>1</PROJECTTYPEKEY>
                              <PROJECTTYPE>Parent</PROJECTTYPE>
                              <MANAGERKEY></MANAGERKEY>
                              <MANAGERID></MANAGERID>
                              <MANAGERCONTACTNAME></MANAGERCONTACTNAME>
                              <PROJECTDEPTKEY></PROJECTDEPTKEY>
                              <DEPARTMENTID></DEPARTMENTID>
                              <DEPARTMENTNAME></DEPARTMENTNAME>
                              <PROJECTLOCATIONKEY></PROJECTLOCATIONKEY>
                              <LOCATIONID></LOCATIONID>
                              <LOCATIONNAME></LOCATIONNAME>
                              <CONTACTINFO.CONTACTNAME></CONTACTINFO.CONTACTNAME>
                              <SHIPTO.CONTACTNAME></SHIPTO.CONTACTNAME>
                              <BILLTO.CONTACTNAME></BILLTO.CONTACTNAME>
                              <TERMSKEY></TERMSKEY>
                              <TERMNAME></TERMNAME>
                              <DOCNUMBER></DOCNUMBER>
                              <CUSTUSERKEY></CUSTUSERKEY>
                              <CUSTUSERID></CUSTUSERID>
                              <WHENCREATED>07/12/2021 18:50:35</WHENCREATED>
                              <WHENMODIFIED>07/12/2021 18:50:35</WHENMODIFIED>
                              <CREATEDBY>19</CREATEDBY>
                              <MODIFIEDBY>19</MODIFIEDBY>
                              <BUDGETEDCOST></BUDGETEDCOST>
                              <CLASSID></CLASSID>
                              <CLASSNAME></CLASSNAME>
                              <CLASSKEY></CLASSKEY>
                              <USERRESTRICTIONS>System Default</USERRESTRICTIONS>
                              <BILLABLEEXPDEFAULT>false</BILLABLEEXPDEFAULT>
                              <BILLABLEAPPODEFAULT>false</BILLABLEAPPODEFAULT>
                              <BUDGETID></BUDGETID>
                              <BUDGETKEY></BUDGETKEY>
                              <BILLINGRATE></BILLINGRATE>
                              <BILLINGPRICING>Billing rate</BILLINGPRICING>
                              <EXPENSERATE>0</EXPENSERATE>
                              <EXPENSEPRICING>Cost plus fee</EXPENSEPRICING>
                              <POAPRATE>0</POAPRATE>
                              <POAPPRICING>Cost plus fee</POAPPRICING>
                              <CONTACTKEY></CONTACTKEY>
                              <SHIPTOKEY></SHIPTOKEY>
                              <BILLTOKEY></BILLTOKEY>
                              <INVOICEMESSAGE></INVOICEMESSAGE>
                              <INVOICECURRENCY></INVOICECURRENCY>
                              <BILLINGOVERMAX>Do nothing</BILLINGOVERMAX>
                              <EXCLUDEEXPENSES>false</EXCLUDEEXPENSES>
                              <CONTRACTKEY></CONTRACTKEY>
                              <CONTRACTID></CONTRACTID>
                              <ROOTPARENTKEY>411</ROOTPARENTKEY>
                              <ROOTPARENTID>371 Jumping Jacks</ROOTPARENTID>
                              <ROOTPARENTNAME>Athletics</ROOTPARENTNAME>
                              <MEGAENTITYKEY></MEGAENTITYKEY>
                              <MEGAENTITYID></MEGAENTITYID>
                              <MEGAENTITYNAME></MEGAENTITYNAME>
                        </project>

 */

/**
 * @enum
 */
export enum PROJECT_FIELDS {
    PROJECTID = "PROJECTID",
    NAME = "NAME",
    DESCRIPTION = "DESCRIPTION",
    PROJECTTYPE = "PROJECTTYPE",
    PARENTID = "PARENTID",
    MEGAENTITYID = "MEGAENTITYID",
    BEGINDATE = "BEGINDATE",
    STATUS = "STATUS",
}

/**
 * @interface
 */
export interface IProject {
    projectid: string;
    name: string;
    description: string;
    projecttype: string;
    parentid: string;
    megaentityid: string;
    begindate: Date;
    status: string;
}

/**
 * @class
 */
export class Project implements IProject {
    private _projectid: string;
    public get projectid(): string {
        return this._projectid;
    }
    public set projectid(value: string) {
        this._projectid = value;
    }
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _description: string;
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    private _projecttype: string;
    public get projecttype(): string {
        return this._projecttype;
    }
    public set projecttype(value: string) {
        this._projecttype = value;
    }
    private _parentid: string;
    public get parentid(): string {
        return this._parentid;
    }
    public set parentid(value: string) {
        this._parentid = value;
    }
    private _megaentityid: string;
    public get megaentityid(): string {
        return this._megaentityid;
    }
    public set megaentityid(value: string) {
        this._megaentityid = value;
    }
    private _begindate: Date;
    public get begindate(): Date {
        return this._begindate;
    }
    public set begindate(value: Date) {
        this._begindate = value;
    }
    private _status: string;
    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }

    /**
     * @constructor
     * @param proj
     */
    constructor(proj: IProject) {
        this.projectid = proj.projectid;
        this.name = proj.name;
        this.description = proj.description;
        this.projecttype = proj.projecttype;
        this.parentid = proj.parentid;
        this.megaentityid = proj.megaentityid;
        this.begindate = proj.begindate;
        this.status = proj.status;
    }
}
