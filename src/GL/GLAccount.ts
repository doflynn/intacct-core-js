/**
 * @module Intacct/Core/GL
 * 
 * '''  <glaccount>
                              <RECORDNO>1164</RECORDNO>
                              <ACCOUNTNO>50295</ACCOUNTNO>
                              <TITLE>Priest Food/Housing/Auto Insurance Reimbursement  - PTB</TITLE>
                              <ACCOUNTTYPE>incomestatement</ACCOUNTTYPE>
                              <NORMALBALANCE>debit</NORMALBALANCE>
                              <CLOSINGTYPE>closing account</CLOSINGTYPE>
                              <CLOSINGACCOUNTNO>30010</CLOSINGACCOUNTNO>
                              <CLOSINGACCOUNTTITLE>Net Assets Without Donor Restrictions - NA</CLOSINGACCOUNTTITLE>
                              <STATUS>active</STATUS>
                              <REQUIREDEPT>true</REQUIREDEPT>
                              <REQUIRELOC>true</REQUIRELOC>
                              <TAXABLE>false</TAXABLE>
                              <CATEGORYKEY>949</CATEGORYKEY>
                              <CATEGORY>Payroll Taxes</CATEGORY>
                              <TAXCODE></TAXCODE>
                              <MRCCODE></MRCCODE>
                              <CLOSETOACCTKEY>193</CLOSETOACCTKEY>
                              <ALTERNATIVEACCOUNT>None</ALTERNATIVEACCOUNT>
                              <WHENCREATED>05/12/2021 22:03:51</WHENCREATED>
                              <WHENMODIFIED>05/12/2021 22:04:49</WHENMODIFIED>
                              <CREATEDBY>6</CREATEDBY>
                              <MODIFIEDBY>6</MODIFIEDBY>
                              <SUBLEDGERCONTROLON>false</SUBLEDGERCONTROLON>
                              <MEGAENTITYKEY></MEGAENTITYKEY>
                              <MEGAENTITYID></MEGAENTITYID>
                              <MEGAENTITYNAME></MEGAENTITYNAME>
                              <REQUIREPROJECT>false</REQUIREPROJECT>
                              <REQUIRECUSTOMER>false</REQUIRECUSTOMER>
                              <REQUIREVENDOR>false</REQUIREVENDOR>
                              <REQUIREEMPLOYEE>false</REQUIREEMPLOYEE>
                              <REQUIREITEM>false</REQUIREITEM>
                              <REQUIRECLASS>true</REQUIRECLASS>
                              <REQUIREGLDIMOPERATING_UNIT>true</REQUIREGLDIMOPERATING_UNIT>
                        </glaccount>'''
 */

export enum GLACCOUNT_FIELDS {
    RECORDNO = "RECORDNO",
    ACCOUNTNO = "ACCOUNTNO",
    TITLE = "TITLE",
    ACCOUNTTYPE = "ACCOUNTTYPE",
    NORMALBALANCE = "NORMALBALANCE",
    CLOSINGTYPE = "CLOSINGTYPE",
    CLOSINGACCOUNTNO = "CLOSINGACCOUNTNO",
    CLOSINGACCOUNTTITLE = "CLOSINGACCOUNTTITLE",
    STATUS = "STATUS",
    REQUIREDEPT = "REQUIREDEPT",
    REQUIRELOC = "REQUIRELOC",
    TAXABLE = "TAXABLE",
    CATEGORYKEY = "CATEGORYKEY",
    CATEGORY = "CATEGORY",
    TAXCODE = "TAXCODE",
    MRCCODE = "MRCCODE",
    CLOSETOACCTKEY = "CLOSETOACCTKEY",
    ALTERNATIVEACCOUNT = "ALTERNATIVEACCOUNT",
    WHENCREATED = "WHENCREATED",
    WHENMODIFIED = "WHENMODIFIED",
    CREATEDBY = "CREATEDBY",
    MODIFIEDBY = "MODIFIEDBY",
    SUBLEDGERCONTROLON = "SUBLEDGERCONTROLON",
    MEGAENTITYKEY = "MEGAENTITYKEY",
    MEGAENTITYID = "MEGAENTITYID",
    MEGAENTITYNAME = "MEGAENTITYNAME",
    REQUIREPROJECT = "REQUIREPROJECT",
    REQUIRECUSTOMER = "REQUIRECUSTOMER",
    REQUIREVENDOR = "REQUIREVENDOR",
    REQUIREEMPLOYEE = "REQUIREEMPLOYEE",
    REQUIREITEM = "REQUIREITEM",
    REQUIRECLASS = "REQUIRECLASS",
    REQUIREGLDIMOPERATING_UNIT = "REQUIREGLDIMOPERATING_UNIT",
}

/**
 * @interface
 */
export interface IGLAccount {
    accountno: string;
    title: string;
    accounttype: string;
    normalbalance: string;
    closingtype: string;
    closingaccountno: string;
    requiredept: boolean;
    requireloc: boolean;
    requireproject: boolean;
    requiregldimoperating_unit: boolean;
    requireitem: boolean;
    status: string;
}

/**
 * @class
 */
export class GLAccount implements IGLAccount {
    private _accountno: string;
    public get accountno(): string {
        return this._accountno;
    }
    public set accountno(value: string) {
        this._accountno = value;
    }
    private _title: string;
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    private _accounttype: string;
    public get accounttype(): string {
        return this._accounttype;
    }
    public set accounttype(value: string) {
        this._accounttype = value;
    }
    private _normalbalance: string;
    public get normalbalance(): string {
        return this._normalbalance;
    }
    public set normalbalance(value: string) {
        this._normalbalance = value;
    }
    private _closingtype: string;
    public get closingtype(): string {
        return this._closingtype;
    }
    public set closingtype(value: string) {
        this._closingtype = value;
    }
    private _closingaccountno: string;
    public get closingaccountno(): string {
        return this._closingaccountno;
    }
    public set closingaccountno(value: string) {
        this._closingaccountno = value;
    }
    private _requiredept: boolean;
    public get requiredept(): boolean {
        return this._requiredept;
    }
    public set requiredept(value: boolean) {
        this._requiredept = value;
    }
    private _requireloc: boolean;
    public get requireloc(): boolean {
        return this._requireloc;
    }
    public set requireloc(value: boolean) {
        this._requireloc = value;
    }
    private _requireproject: boolean;
    public get requireproject(): boolean {
        return this._requireproject;
    }
    public set requireproject(value: boolean) {
        this._requireproject = value;
    }
    private _requiregldimoperating_unit: boolean;
    public get requiregldimoperating_unit(): boolean {
        return this._requiregldimoperating_unit;
    }
    public set requiregldimoperating_unit(value: boolean) {
        this._requiregldimoperating_unit = value;
    }
    private _requireitem: boolean;
    public get requireitem(): boolean {
        return this._requireitem;
    }
    public set requireitem(value: boolean) {
        this._requireitem = value;
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
     * @param acct
     */
    constructor(acct: IGLAccount) {
        this.accountno = acct.accountno;
        this.title = acct.title;
        this.accounttype = acct.accounttype;
        this.normalbalance = acct.normalbalance;
        this.closingtype = acct.closingtype;
        this.closingaccountno = acct.closingaccountno;
        this.requiredept = acct.requiredept;
        this.requireloc = acct.requireloc;
        this.requireproject = acct.requireproject;
        this.requiregldimoperating_unit = acct.requiregldimoperating_unit;
        this.requireitem = acct.requireitem;
        this.status = acct.status;
    }
}
