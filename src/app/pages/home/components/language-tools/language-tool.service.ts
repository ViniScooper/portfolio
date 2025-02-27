import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { tap } from 'rxjs';
import { LanguageTool } from '@pages/home/components/language-tools/language-tool.interface';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';

export interface LanguageToolState {
  data: LanguageTool[];
}

@Injectable({
  providedIn: 'root',
})
export class LanguageToolService {
  private http = inject(HttpClient);
  private jsonUrl = `${environment.url}/assets/json/language-tools.json`;

  public state = signal<LanguageToolState>({ data: [] });
  public languageTools: Signal<LanguageTool[]> = computed(
    () => this.state().data
  );

  constructor() {
    this.getAll();
  }

  getAll(): void {
    this.http
      .get<LanguageTool[]>(this.jsonUrl)
      .pipe(
        tap((data: LanguageTool[]) => {
          this.state.update((state: LanguageToolState) => ({ ...state, data }));
        })
      )
      .subscribe();
  }
}
