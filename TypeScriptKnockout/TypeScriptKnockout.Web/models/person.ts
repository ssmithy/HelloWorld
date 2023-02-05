import * as ko from 'knockout';
import {
    Observable, ObservableArray, PureComputed
} from 'knockout';

class Person {
    firstName: Observable<string>;
    lastName: Observable<string>;
    favouriteFilms: ObservableArray<string>;

    fullName: PureComputed<string> = ko.pureComputed(
        () => this.firstName() + ' ' + this.lastName());

    constructor(firstName: string, lastName: string) {
        this.firstName = ko.observable(firstName);
        this.lastName = ko.observable(lastName);
    }
}

export default Person;