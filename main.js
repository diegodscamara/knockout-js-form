function AppViewModel() {
    this.firstName = ko.observable("Enter your first name");
    this.secondName = ko.observable("Enter your second name");

    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.secondName();
    }, this);

}

ko.applyBindings(new AppViewModel());