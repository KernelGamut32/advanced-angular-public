import { AbstractControl, ValidationErrors } from '@angular/forms';

export class DescriptionValidator {
  static badWords = ['stupid', 'bad', 'dumb'];

  static cannotContainMeanWords(control: AbstractControl): ValidationErrors | null {
    for (const badWord of DescriptionValidator.badWords) {
      if ((control.value as string).toLowerCase().includes(badWord)) {
        return { cannotContainMeanWords: true };
      }
    }
    return null;
  }
}
