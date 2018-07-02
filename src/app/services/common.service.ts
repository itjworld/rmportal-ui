import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IDomain } from '../beans/domain';
import { IFilterInformation } from '../beans/filterInformation';
import { IEnquiry } from '../beans/enquiry';
import { IInfomation } from '../beans/infomation';
import 'rxjs/add/operator/map';
import { IUserDetail } from '../beans/userdetail';

@Injectable()
export class CommonService {
  // _URL:string="http://itj-env.9j3sp5mx8e.ap-south-1.elasticbeanstalk.com";
    _URL: string = "http://localhost:8080/rmportal";

    location: IDomain[];
    gender: IDomain[];
    airCondition: IDomain[];
    rooms: IDomain[];
    city: IDomain[];
    address: any;
    price: number = 0;
    dispalyPrice: String;
    
    constructor(private _http: Http) {
        this.getLocation().subscribe((locationData) => this.location = locationData);
        this.getGender().subscribe((genderData) => this.gender = genderData);
        this.getAirCondition().subscribe((acData) => this.airCondition = acData);
        this.getRoom().subscribe((roomData) => this.rooms = roomData);
        this.getCity().subscribe((cityData) => this.city = cityData);
    }

    getLocation(): Observable<IDomain[]> {
        return this._http.get(this._URL + "/api/v1/details/location")
            .map((response: Response) => <IDomain[]>response.json());
    }
    getGender(): Observable<IDomain[]> {
        return this._http.get(this._URL + "/api/v1/details/gender")
            .map((response: Response) => <IDomain[]>response.json());
    }
    getAirCondition(): Observable<IDomain[]> {
        return this._http.get(this._URL + "/api/v1/details/ac")
            .map((response: Response) => <IDomain[]>response.json());
    }

    getRoom(): Observable<IDomain[]> {
        return this._http.get(this._URL + "/api/v1/details/room")
            .map((response: Response) => <IDomain[]>response.json());
    }

    getCity(): Observable<IDomain[]> {
        return this._http.get(this._URL + "/api/v1/details/location")
            .map((response: Response) => <IDomain[]>response.json());
    }

    getAddress(cityId: number): any {
        return this._http.get(this._URL + "/api/v1/address/" + cityId).map((response: Response) => <any>response.json()).subscribe((addressData) => this.address = addressData);
    }

    getDetails(localities: any, price: any, acId: any, gender: any, rooms: any): Observable<IFilterInformation[]> {
        let params = { localities: localities, price: price, acId: acId, gender: gender, rooms: rooms };
        return this._http.get(this._URL + "/api/v1/details", { params: params })
            .map((response: Response) => <IFilterInformation[]>response.json());
    }

    saveViewContactDetail(enquiry: any): Observable<IEnquiry> {
        return this._http.post(this._URL + "/api/v1/enquiry/save", enquiry)
            .map((response: Response) => <IEnquiry>response.json());
    }

    getContactInfomation(_id: number): Observable<IInfomation> {
        let params = { id: _id };
        return this._http.get(this._URL + "/api/v1/contact-information", { params: params })
            .map((response: Response) => <IInfomation>response.json());
    }

    saveMappingDetails(mapping: any): Observable<any> {
        return this._http.post(this._URL + "/api/v1/mapping/save", mapping)
            .catch(err => {
                console.log("****** exception generated" + err)
                return Observable.throw(err); // observable needs to be returned or exception raised
            }).map((response: Response) => <any>response.json);

    }

    saveAddressDetails(address: any): Observable<any> {
        return this._http.post(this._URL + "/api/v1/address/save", address)
            .map((response: Response) => <any>response.json);
    }

    validate(user: any): Observable<IUserDetail> {
        return this._http.post(this._URL + "/api/v1/validate", user)
            .map((response: Response) => <IUserDetail>response.json());
    }

    execute(query: String): Observable<boolean> {
        return this._http.post(this._URL + "/api/v1/execute", query)
            .map((response: Response) => <boolean>response.json());
    }

    updateRoomBooked(mapping: String): Observable<any> {
        return this._http.post(this._URL + "/api/v1/room/update", mapping)
            .map((response: Response) => <boolean>response.json());
    }
    registration(registration: String): Observable<any> {
        return this._http.post(this._URL + "/api/v1/registration", registration)
            .map((response: Response) => <boolean>response.json());
    }
    getRecords(): string {
        return this._URL + "/api/v1/records";
    }

    sendMail(mail: any): Observable<any> {
        return this._http.post(this._URL + "/api/v1/sendMailAsPdf", mail)
            .catch(err => {
                console.log("****** exception generated" + err)
                return Observable.throw(err); // observable needs to be returned or exception raised
            }).map((response: Response) => <any>response.json);

    }
    login(user: any): Observable<any> {
        let credentials = "username=" + user.username + "&password=" + user.password;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'x-www-form-rm-call': true });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._URL + "/login", credentials, options)
            .map((response: Response) => <any>response.json());
    }

    updateRecords(record: any): Observable<any> {
        // console.log("****** record : " + JSON.stringify(record))
        return this._http.post(this._URL + "/api/v1/guest/update", record)
            .catch(err => {
                console.log("****** exception generated" + err)
                return Observable.throw(err); // observable needs to be returned or exception raised
            }).map((response: Response) => <any>response.json());
    }

    deleteRecords(record: any): Observable<any> {
        //console.log("****** record : " + JSON.stringify(record))
        return this._http.post(this._URL + "/api/v1/guest/delete", record)
            .catch(err => {
                console.log("****** exception generated" + err)
                return Observable.throw(err); // observable needs to be returned or exception raised
            }).map((response: Response) => <any>response.json());
    }

    getMyRecords(username:any): Observable<any> {
        return this._http.post(this._URL + "/api/v1/myrecords", username)
        .catch(err => {
            console.log("****** exception generated" + err)
            return Observable.throw(err); // observable needs to be returned or exception raised
        }).map((response: Response) => <any>response.json());
    }

    getRentDetailById(_id:number): Observable<any> {
        return this._http.get(this._URL + "/api/v1/rent-detail", { params: {id:_id}})
        .catch(err => {
            return Observable.throw(err); 
        }).map((response: Response) => <any>response.json());
    }

    updateRentDetail(detail: any): Observable<any> {
        // console.log("****** record : " + JSON.stringify(record))
        return this._http.post(this._URL + "/api/v1/rent-detail/update", detail)
            .catch(err => {
                console.log("****** exception generated" + err)
                return Observable.throw(err); // observable needs to be returned or exception raised
            }).map((response: Response) => <any>response.json());
    }

    getRoomDetailById(_id:number): Observable<any> {
        return this._http.get(this._URL + "/api/v1/room-details", { params: {id:_id}})
        .catch(err => {
            return Observable.throw(err); 
        }).map((response: Response) => <any>response.json());
    }

    getAddressDetail(): Observable<any> {
        return this._http.get(this._URL + "/api/v1/address/detail")
        .catch(err => {
            return Observable.throw(err); 
        }).map((response: Response) => <any>response.json());
    }

}