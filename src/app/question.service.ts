import { Injectable }       from '@angular/core';

import { QuestionBase }     from './question-base';
import { DropdownQuestion } from './question-dropdown';
import { TextboxQuestion }  from './question-textbox';
import { CheckboxQuestion } from './question-checkbox';

/** 
 * question service holds mock data now
 * @TODO: make asynchronous; get data from remote server
 * 
 * The content of the dynamic form is entirely dependant on what this service returns 
*/

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new DropdownQuestion({
        key: 'country',
        label: 'Country of birth',
        options: [
            {key: 'ger', value: 'Germany'},
            {key: 'us', value: 'United States of America'},
            {key: 'hn', value: 'Honduras'},
        ],
        order: 4
      }),

      new CheckboxQuestion({
        key: 'life-married',
        label: 'Married Label',
        type: 'checkbox',
        order: 5
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}