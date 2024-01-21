import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SoucastKroje } from './domain/soucastKroje';
import { KrojService } from './services/kroj.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ConfirmationService,MessageService,KrojService]
})
export class AppComponent implements OnInit {

    productDialog: boolean;

    soucastiKroje: SoucastKroje[];

    soucastKroje: SoucastKroje;

    selectedProducts: SoucastKroje[];

    submitted: boolean;

    typy: any[];


    getSoucastiKroje(typ: string) {
        return this.soucastiKroje.filter(x => x.typ === typ);
    }

    constructor(private krojService: KrojService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

    ngOnInit() {
        this.krojService.getSoucastiKroje().then(data => this.soucastiKroje = data);

        this.typy = [
            {label: 'INSTOCK', value: 'instock'},
            {label: 'LOWSTOCK', value: 'lowstock'},
            {label: 'OUTOFSTOCK', value: 'outofstock'}
        ];
    }

    vyhodnot() {
        this.soucastKroje = {nazev:'', typ: 'FJERTUCH', barva: '', file: ''};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.soucastiKroje = this.soucastiKroje.filter(val => !this.selectedProducts.includes(val));
                this.selectedProducts = null;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Products Deleted',
                    life: 3000
                });
            }
        });
    }
}
