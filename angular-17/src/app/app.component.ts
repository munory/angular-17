import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {InnerComponent} from "./components/inner/inner.component";
import {Dto} from "./common/dto";

export const dtoSignal = signal<Dto>({id: '1', name: '111'});

export const dtoSignals = signal<Dto[]>([{id: '1', name: '111'}]);

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, InnerComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less'
})
export class AppComponent {
    title = 'angular-17';

    click() {
        // const dto = dtoSignal();
        // dto.name = '222';
        //dtoSignal.set({...dtoSignal(), name: '222'});

        const dtos = dtoSignals();
        dtos.push({'id': '3', name: '333'});
        dtoSignals.set(dtos);
    }
}
