function AppViewModel() {
    this.firstName = ko.observable("First name");
    this.secondName = ko.observable("Second name");

    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.secondName();
    }, this);
}

ko.applyBindings(new AppViewModel());