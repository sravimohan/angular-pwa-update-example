import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CheckForUpdateService {
    constructor(appRef: ApplicationRef, updates: SwUpdate) {
         // Allow the app to stabilize first, before starting
        // polling for updates with `interval()`.
        const appIsStable$ = appRef.isStable.pipe(first((isStable) => isStable === true));
        const everySixSeconds$ = interval(6 * 1000);
        const everySixSecondsOnceAppIsStable$ = concat(appIsStable$, everySixSeconds$);
        everySixSecondsOnceAppIsStable$.subscribe(async () => {
            try {
                const updateFound = await updates.checkForUpdate();
                console.log(updateFound ? 'A new version is available.' : 'Already on the latest version.');
            } catch (err) {
                console.error('Failed to check for updates:', err);
            }
        });
    }
}