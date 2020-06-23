import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
	donation = 0;
	text = '';
	constructor() {}
	donate() {

		this.donation += 10;
		if (this.donation > 199) {
			this.text = `You are VIP ${this.donation} €`
		} else {
			this.text = `You donated ${this.donation} €`
		}
		// this.text = (this.donation > 199) ? `You are VIP ${this.donation} €` : `You donated ${this.donation} €`;
	}

	ngOnInit(): void {}
}
