function insertItem(){
   let input_name_element = document.getElementById("item-name-input");
   let input_price_element =  document.getElementById("item-price-input");

   let item_name = input_name_element.value;
   let item_price = input_price_element.value;

//    for converting string into integer
   item_price = parseInt(item_price); 

   if(item_name =='' || isNaN(item_price)){
       return;
   }

   input_name_element.value = '';
   input_price_element.value ='';


    let newRow = document.createElement('tr');
    let srNoCol = document.createElement('td');
    let nameCol = document.createElement('td');
    let priceCol = document.createElement('td');


    let sr_elements = document.querySelectorAll('[data-type=sr_col]');
    let counter = sr_elements.length;

    srNoCol.innerText = counter + 1;
    nameCol.innerText = item_name;
    priceCol.innerText = item_price;

    nameCol.dataset.nsTest = 'item-name';
    priceCol.dataset.nsTest = 'item-price';
    srNoCol.dataset.type = 'sr_col';


    newRow.appendChild(srNoCol);
    newRow.appendChild(nameCol);
    newRow.appendChild(priceCol);
    

    let mainTable = document.querySelector('table');
    mainTable.appendChild(newRow);


    // for GrandTotal of each item
    let grandTotal = 0;
    let price_elements = document.querySelectorAll('[data-ns-test=item-price]');
    price_elements.forEach((single_price_element) => {
        let single_price = single_price_element.innerText;
        single_price = parseInt(single_price);
        grandTotal += single_price;
    });

    document.querySelector('[data-ns-test=grandTotal]').innerText= grandTotal;
    
}