import * as ko from 'knockout';
class Person {
    constructor(firstName, lastName) {
        this.fullName = ko.pureComputed(() => this.firstName() + ' ' + this.lastName());
        this.firstName = ko.observable(firstName);
        this.lastName = ko.observable(lastName);
    }
}
export default Person;
//# sourceMappingURL=person.js.map