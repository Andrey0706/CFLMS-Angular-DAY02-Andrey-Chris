import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
	constructor() {}

	car_array = [
		{
			brand: 'Audi',
			model: 'S8',
			fuel: 'diesel',
			hp: '231',
			price: '232231',
			image: 'car1.webp',
		},
		{
			brand: 'VW',
			model: 'Golf',
			fuel: 'gas',
			hp: '431',
			price: '23223',
			image: 'car2.webp',
		},
		{
			brand: 'Zastawa',
			model: 'Yugo',
			fuel: 'diesel',
			hp: '731',
			price: '522231',
			image: 'car3.jpg',
		},
		{
			brand: 'BMW',
			model: 'M1',
			fuel: 'electric',
			hp: '531',
			price: '432231',
			image: 'car4.jpg',
		},
		{
			brand: 'VW',
			model: 'Passat',
			fuel: 'diesel',
			hp: '111',
			price: '54231',
			image: 'car5.jpg',
		},
		{
			brand: 'Tesla',
			model: 'Model 3',
			fuel: 'electric',
			hp: '331',
			price: '213452',
			image: 'car6.jpg',
		},
		{
			brand: 'Audi',
			model: 'S5',
			fuel: 'diesel',
			hp: '235',
			price: '23231',
			image: 'car7.jpg',
		},
		{
			brand: 'VW',
			model: 'Golf 3',
			fuel: 'gas',
			hp: '231',
			price: '123223',
			image: 'car8.jpg',
		},
		{
			brand: 'Zastawa',
			model: '101',
			fuel: 'diesel',
			hp: '1050',
			price: '22231',
			image: 'car9.jpg',
		},
		{
			brand: 'BMW',
			model: 'X6',
			fuel: 'electric',
			hp: '431',
			price: '732231',
			image: 'car10.webp',
		},
		{
			brand: 'VW',
			model: 'Scirocco',
			fuel: 'diesel',
			hp: '211',
			price: '254231',
			image: 'car11.webp',
		},
		{
			brand: 'Tesla',
			model: 'Model 5',
			fuel: 'electric',
			hp: '333',
			price: '213453',
			image: 'car12.jpg',
		},
	];
	info = new FormGroup({
		brand: new FormControl('', [Validators.required, Validators.minLength(2)]),
		model: new FormControl('', [Validators.required, Validators.minLength(3)]),
		fuel: new FormControl('', [Validators.required, Validators.minLength(5)]),
		hp: new FormControl('', [Validators.required, Validators.minLength(4)]),
		price: new FormControl('', [Validators.required, Validators.minLength(4)]),
		image: new FormControl('', [Validators.required, Validators.minLength(5)]),
	});
	onSubmit() {
		if (this.info.valid) {
			var input_data = this.info.value;
			this.car_array.push(input_data);
		}
	}
	ngOnInit(): void {}
}
