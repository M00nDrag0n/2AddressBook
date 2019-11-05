//  Business Logic for AddressBook ----------
function AddressBook() {
  this.contacts = [],
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

//  Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber, email, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.email = email;
  this.address = address;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// var addressBook = new AddressBook(); --> don't put this at the top of the UIL section (or the screen in general, still trying to identify UIL vs BL sections), it will become a scary global variable which can mess up your code! (or something)
function displayContactDetails(addressBookToDisplay) {
  var contactList = $("ul#contacts");
  var ForContactInfo = "";
  addressBookDisplay.contact.forEach(function(contact){
    forContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactList.html(forContactInfo);
});

var contact = new Contact("Judah", "Barton", "111-111-1111", "1111@example.com", "111 SE 1st Street");
var contact2 = new Contact("Nuclear", "Flygon", "000-000-0000", "000@example.com", "000 SW Flying Fox Ave");
var contact3 = new Contact("Hristo", "Smith", "4329900989", "898@example.com", "555 NE 33rd Ct");
addressBook.addContact(contact);
addressBook.addContact(contact2);
addressBook.addContact(contact3);


$(document).ready(function(){
  $("#input").submit(function(event) {
    event.preventDefault();

var q1 = $("#q1").val();
var q2 = $("#q2").val();
var q3 = $("#q3").val();
var q4 = $("#q4").val();
var q5 = $("#q5").val();
// var q6 = $("#q6").val();



    $("#output").text(q1 + " " + q2 + " " + q3 + " " + q4 + " " + q5);
  });
});
