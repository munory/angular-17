import {afterNextRender, ChangeDetectionStrategy, Component, effect, input, Input, signal} from '@angular/core';
import {dtoSignal, dtoSignals} from "../../app.component";
import {LoadComponent} from "../load/load.component";

@Component({
    selector: 'app-inner',
    standalone: true,
    imports: [LoadComponent],
    templateUrl: './inner.component.html',
    styleUrl: './inner.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerComponent {
    value = input(0);

    count = signal(0);

    count1 = signal(10);

    blocks: string[];

    constructor() {
        effect(() => {
            console.log('111', this.value());
            console.log('222', dtoSignal());
            console.log('333', dtoSignals());
        });

        afterNextRender(() => {
            console.log(' Одноразовая инициализация');
        });

        this.blocks = Array(100).fill('111');
    }

    setCount() {
        this.count.set(this.count() + 1);
    }

    setCount1() {
        this.count1.set(this.count1() + 10);
    }
}
