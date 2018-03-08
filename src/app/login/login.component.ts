import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'my-app',
    templateUrl: 'login.component.html',
})
export class AppComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            name: this.fb.group({
                first: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
                last: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
            }),
            email: ['', Validators.pattern('^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$')]
        });
    }
}