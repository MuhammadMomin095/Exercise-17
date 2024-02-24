let guest_list : string[] = ['ayesha','bilal','burhan','mantisha'];

let not_present : string = 'Burhan';
 let new_guest : string = 'Feroz Khaan';
 guest_list[2] = new_guest;

guest_list.unshift('ali','afzal','akram');
console.log('\nunfortunately we can not arrange big table , Only two people allow.')
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam.${remove_guest} you are not invited for dinner.`);
}
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam ' + guest_list[1] + ',\nYes you are still invited on tomorrow dinner\nThank You\n')
}
guest_list.splice(0,2)
console.log(guest_list)
