/**
 * @module Intacct/Core/Company
 * 
 *                         <locationentity>
                              <LOCATIONID>PRE-0594</LOCATIONID>
                              <RECORDNO>174</RECORDNO>
                              <NAME>St. Michael Parish Livonia</NAME>
                              <PARENTID></PARENTID>
                              <SUPERVISORNAME></SUPERVISORNAME>
                              <SUPERVISORID></SUPERVISORID>
                              <CONTACTINFO.CONTACTNAME></CONTACTINFO.CONTACTNAME>
                              <CONTACTINFO.PRINTAS></CONTACTINFO.PRINTAS>
                              <CONTACTINFO.PHONE1></CONTACTINFO.PHONE1>
                              <CONTACTINFO.PHONE2></CONTACTINFO.PHONE2>
                              <CONTACTINFO.EMAIL1></CONTACTINFO.EMAIL1>
                              <CONTACTINFO.EMAIL2></CONTACTINFO.EMAIL2>
                              <CONTACTINFO.FAX></CONTACTINFO.FAX>
                              <CONTACTINFO.MAILADDRESS.ADDRESS1></CONTACTINFO.MAILADDRESS.ADDRESS1>
                              <CONTACTINFO.MAILADDRESS.ADDRESS2></CONTACTINFO.MAILADDRESS.ADDRESS2>
                              <CONTACTINFO.MAILADDRESS.CITY></CONTACTINFO.MAILADDRESS.CITY>
                              <CONTACTINFO.MAILADDRESS.STATE></CONTACTINFO.MAILADDRESS.STATE>
                              <CONTACTINFO.MAILADDRESS.ZIP></CONTACTINFO.MAILADDRESS.ZIP>
                              <CONTACTINFO.MAILADDRESS.COUNTRY></CONTACTINFO.MAILADDRESS.COUNTRY>
                              <CONTACTINFO.MAILADDRESS.COUNTRYCODE></CONTACTINFO.MAILADDRESS.COUNTRYCODE>
                              <STARTDATE></STARTDATE>
                              <ENDDATE></ENDDATE>
                              <SHIPTO.CONTACTNAME></SHIPTO.CONTACTNAME>
                              <SHIPTO.PHONE1></SHIPTO.PHONE1>
                              <SHIPTO.PHONE2></SHIPTO.PHONE2>
                              <SHIPTO.MAILADDRESS.ADDRESS1></SHIPTO.MAILADDRESS.ADDRESS1>
                              <SHIPTO.MAILADDRESS.ADDRESS2></SHIPTO.MAILADDRESS.ADDRESS2>
                              <SHIPTO.MAILADDRESS.CITY></SHIPTO.MAILADDRESS.CITY>
                              <SHIPTO.MAILADDRESS.STATE></SHIPTO.MAILADDRESS.STATE>
                              <SHIPTO.MAILADDRESS.ZIP></SHIPTO.MAILADDRESS.ZIP>
                              <SHIPTO.MAILADDRESS.COUNTRY></SHIPTO.MAILADDRESS.COUNTRY>
                              <SHIPTO.MAILADDRESS.COUNTRYCODE></SHIPTO.MAILADDRESS.COUNTRYCODE>
                              <STATUS>active</STATUS>
                              <WHENCREATED>04/29/2021 20:32:04</WHENCREATED>
                              <WHENMODIFIED>05/20/2021 17:15:03</WHENMODIFIED>
                              <FEDERALID>38-1515431</FEDERALID>
                              <FIRSTMONTH></FIRSTMONTH>
                              <WEEKSTART></WEEKSTART>
                              <IEPAYABLE.ACCOUNT></IEPAYABLE.ACCOUNT>
                              <IEPAYABLE.NUMBER></IEPAYABLE.NUMBER>
                              <IERECEIVABLE.ACCOUNT></IERECEIVABLE.ACCOUNT>
                              <IERECEIVABLE.NUMBER></IERECEIVABLE.NUMBER>
                              <MESSAGE_TEXT></MESSAGE_TEXT>
                              <MARKETING_TEXT></MARKETING_TEXT>
                              <FOOTNOTETEXT></FOOTNOTETEXT>
                              <REPORTPRINTAS>St. Michael Parish Livonia</REPORTPRINTAS>
                              <ISROOT>F</ISROOT>
                              <RESERVEAMT></RESERVEAMT>
                              <VENDORNAME></VENDORNAME>
                              <VENDORID></VENDORID>
                              <CUSTOMERID></CUSTOMERID>
                              <CUSTOMERNAME></CUSTOMERNAME>
                              <CURRENCY></CURRENCY>
                              <ENTITY>PRE-0594--St. Michael Parish Livonia</ENTITY>
                              <ENTITYRECORDNO>174</ENTITYRECORDNO>
                              <HAS_IE_RELATION>false</HAS_IE_RELATION>
                              <CUSTTITLE></CUSTTITLE>
                              <BUSINESSDAYS>MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY</BUSINESSDAYS>
                              <WEEKENDS>SUNDAY,SATURDAY</WEEKENDS>
                              <FIRSTMONTHTAX></FIRSTMONTHTAX>
                              <CONTACTKEY></CONTACTKEY>
                              <SUPERVISORKEY></SUPERVISORKEY>
                              <PARENTKEY></PARENTKEY>
                              <SHIPTOKEY></SHIPTOKEY>
                              <IEPAYABLEACCTKEY></IEPAYABLEACCTKEY>
                              <IERECEIVABLEACCTKEY></IERECEIVABLEACCTKEY>
                              <VENDENTITY></VENDENTITY>
                              <CUSTENTITY></CUSTENTITY>
                              <TAXID></TAXID>
                              <CREATEDBY>5</CREATEDBY>
                              <MODIFIEDBY>5</MODIFIEDBY>
                              <ADDRESSCOUNTRYDEFAULT>United States</ADDRESSCOUNTRYDEFAULT>
                              <STARTOPEN>01/01/2009</STARTOPEN>
                              <LOCATIONENTITY.LOCATIONTYPE>E</LOCATIONENTITY.LOCATIONTYPE>
                              <ENABLELEGALCONTACT>true</ENABLELEGALCONTACT>
                              <LEGALNAME>St. Michael Parish</LEGALNAME>
                              <LEGALADDRESS1>11441 Hubbard Street</LEGALADDRESS1>
                              <LEGALADDRESS2></LEGALADDRESS2>
                              <LEGALCITY>Livonia</LEGALCITY>
                              <LEGALSTATE>MI</LEGALSTATE>
                              <LEGALZIPCODE>48150-2786</LEGALZIPCODE>
                              <LEGALCOUNTRY>USA</LEGALCOUNTRY>
                              <OPCOUNTRY></OPCOUNTRY>
                              <TAXSOLUTIONID></TAXSOLUTIONID>
                              <TAXSOLUTIONTAXMETHOD></TAXSOLUTIONTAXMETHOD>
                              <PARTIALEXEMPT>false</PARTIALEXEMPT>
                              <DEFAULTPARTIALEXEMPT>false</DEFAULTPARTIALEXEMPT>
                              <UNRECOVERABLETAXACCTNO></UNRECOVERABLETAXACCTNO>
                              <RCLASS></RCLASS>
                              <R10054></R10054>
                        </locationentity>

 */

/**
 * @enum
 */
export enum ENTITY_FIELDS {
    LOCATIONID = "LOCATIONID",
    NAME = "NAME",
    STARTDATE = "STARTDATE",
    STATUS = "STATUS",
}

/**
 * @interface
 */
export interface IEntity {
    locationid: string;
    name: string;
    startdate: Date;
    status: string;
}

export class Entity implements IEntity {
    private _locationid: string;
    public get locationid(): string {
        return this._locationid;
    }
    public set locationid(value: string) {
        this._locationid = value;
    }
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _startdate: Date;
    public get startdate(): Date {
        return this._startdate;
    }
    public set startdate(value: Date) {
        this._startdate = value;
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
     * @param ent
     */
    constructor(ent: IEntity) {
        this.locationid = ent.locationid;
        this.name = ent.name;
        this.startdate = ent.startdate;
        this.status = ent.status;
    }
}
