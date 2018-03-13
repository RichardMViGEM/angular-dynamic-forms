import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

/** question control service
 * transforms questions to a FormGroup.
 * The FormGroup consumes metadata from the question model and allows for specifying default values and validation rules
 */

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      if (question.required) {
        group[question.key] = new FormControl(question.value || '', Validators.required);
      } else {
        group[question.key] = new FormControl(question.value || '');
      }
    });
    // ## alternative version:
    // questions.forEach(question => {
    //   group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
    //                                           : new FormControl(question.value || '');
    // });

    return new FormGroup(group);
  }
}