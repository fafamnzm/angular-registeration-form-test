import { Injectable } from '@angular/core';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  info: Register = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    postalCode: '',
    city: '',
    countryState: '',
    country: '',
  };
  constructor() {}

  setRegisterInfo(info: Register) {
    this.info = info;
  }

  getRegisterInfo() {
    return this.info;
  }
}
