var guest_list = ['ayesha', 'bilal', 'burhan', 'mantisha'];
var not_present = 'Burhan';
var new_guest = 'Feroz Khaan';
guest_list[2] = new_guest;
guest_list.unshift('ali', 'afzal', 'akram');
console.log('\nunfortunately we can not arrange big table , Only two people allow.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/Madam.".concat(remove_guest, " you are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[1] + ',\nYes you are still invited on tomorrow dinner\nThank You\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
