import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogUpdateService } from './log-update.service';
import { CheckForUpdateService } from './check-for-updates';
import { PromptUpdateService } from './prompt-update.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  logUpdateService = inject(LogUpdateService);
  checkForUpdateService = inject(CheckForUpdateService);
  promptUpdateService = inject(PromptUpdateService);

  title = 'pwa 1';
}
