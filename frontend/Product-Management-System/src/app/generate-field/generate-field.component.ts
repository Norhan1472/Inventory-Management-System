import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

class Field {
  value!: string;
  dependentField: Field | null;

  constructor(value: string, dependentField?: Field | null) {
    this.value = value;
    this.dependentField = dependentField || null;
  }
}
class Passenger {
  name!: string;
  address!: string;
  number!: string;
  email!: string;
  
  constructor(name: string, address: string, number: string, email: string) {
    this.name = name;
    this.address = address;
    this.number = number;
    this.email = email;
  }
}

@Component({
  selector: 'app-generate-field',
  templateUrl: './generate-field.component.html',
  styleUrls: ['./generate-field.component.css']
})
export class GenerateFieldComponent {
  name !: string;
  /*fields: { value: string, readonly: boolean }[] = [];

  generateField() {
    this.fields.push({ value: '', readonly: false });
  }*/
  /*fields: Field[] = [];

  generateFields() {
    const field1 = new Field('Field 1');
    const field2 = new Field('Field 2', field1);
    this.fields.push(field1, field2);
  }*/
  form!: FormGroup;
  passengers: Passenger[] = [];

  ngOnInit() {
    this.passengers.push(new Passenger('', '', '', ''));
    this.form = new FormGroup({
      passengers: new FormArray(
        this.passengers.map(p => {
          return new FormGroup({
            name: new FormControl(p.name),
            address: new FormControl(p.address),
            number: new FormControl(p.number),
            email: new FormControl(p.email)
          });
        })
      )
    });
  }

  get passengerArray(): FormArray {
    return this.form.get('passengers') as FormArray;
  }

  addPassenger() {
    this.passengers.push(new Passenger('', '', '', ''));
    this.passengerArray.push(
      new FormGroup({
        name: new FormControl(''),
        address: new FormControl(''),
        number: new FormControl(''),
        email: new FormControl('')
      })
    );
  }

  /*populateFields(name: string) {
    // make a call to the database to retrieve the required information
    // let's say you retrieve the data in a variable called `passengerData`
    console.log("gggg");
    console.log(this.name);
    const passengerData = this.getPassengerDataFromDatabase(name);
  
    // now you can use the data to populate the fields
    this.passengerArray.push(
      new FormGroup({
        name: new FormControl(passengerData.name),
        address: new FormControl(passengerData.address),
        number: new FormControl(passengerData.number),
        email: new FormControl(passengerData.email)
      })
    );
  }
  
  getPassengerDataFromDatabase(ss: string) {
    // replace this with your actual database call
    return {
      name: ss,
      address: '123 Main St',
      number: '555-555-1212',
      email: 'example@email.com'
    };
  }*/
}
