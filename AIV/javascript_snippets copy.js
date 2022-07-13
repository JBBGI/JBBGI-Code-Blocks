
Backup

// <script type="text/javascript">

// <!-- Sell Us Your Equipment - Multiple Products -->
//         <script type="text/javascript">

//           var item = -1;
//           var pump = [];
      
//           function appendPump() {
      
//               var model = document.querySelector(".pump_model");
//               var serial = document.querySelector(".pump_serial");
//               var qty = document.querySelector(".pump_qty");
//               var des = document.querySelector(".pump_des");
              
//               if (model.value &amp;&amp; serial.value &amp;&amp; qty.value &amp;&amp; des.value) {
//                   item += 1;
//                   pump[item] = new Array('Model:: ' + model.value, 'Serial:: ' + serial.value, 'Qty:: ' + qty.value, 'Description:: ' + des.value, ' : ');
//                   document.getElementsByName('x_pump')[0].value = pump;
//                   appendList(model.value,serial.value,qty.value,des.value);
//                   document.getElementById("pump_selector").reset();
//                   Array.from(document.querySelectorAll('.is-invalid')).forEach( invalid => invalid.classList.remove('is-invalid'))
//               }
//               else{
//               (!serial.value)? serial.classList.add("is-invalid"): serial.classList.remove('is-invalid');
//               (!qty.value)? qty.classList.add("is-invalid"):qty.classList.remove('is-invalid') ;
//               (!des.value)? des.classList.add("is-invalid"): des.classList.remove('is-invalid') ;
//               }
      
      
//               function appendList(model,serial,qty,des) {
//                   document.getElementById("appended_list").innerHTML +=
//                       '<div class="added_product alert alert-dark alert-dismissible fade show">' +
//                       `<button type="button" class="close" data-dismiss="alert" onclick="deleteItem('${model}')">×</button>` +
//                       '<div>' +
//                       '<div class="row">' +
//                       '<p class="col-2">Model:</p>' +
//                       '<p class="col-10 model">' + model + '</p>' +
//                       '</div>' +
//                       '<div class="row">'+
//                       '<p class="col-2">Serial Number:</p>' +
//                       '<p class="col-10 serial">' + serial + '</p>' +
//                       '</div>' +
//                       '<div class="row">' +
//                       '<p class="col-2">Quantity:</p>' +
//                       '<p class="col-10 qty">' + qty + "</p>" +
//                       '</div>' +
//                       '<div class="row">' +
//                       '<p class="col-2">Description:</p>' +
//                       '<p class="col-10 des">' + des + '</p>' +
//                       '</div>' +
//                       '</div>' +
//                       '</div>';
//               }
//           }
//           function deleteItem(e) {
//               item -= 1;
//               pump.forEach(p => { 
//                   if(p[0].includes(e)){
//                       var d = pump.indexOf(p);
//                       pump.splice(d,1);
//                   }});
//               pump.filter(Boolean);
//               document.getElementsByName('x_pump')[0].value = pump;
      
//               <!--pump.forEach(p => { if(p[0].includes(e)){pump.splice(pump[p],1);}});-->
//               }
//           document.querySelector(".appendPump").setAttribute('onclick', 'appendPump()')
      
//         </script>





// </script>
[(0, 0,{'product_id': 265, 'product_uom_qty': 1}),(0, 0,{'name': 'Please see email for details.', 'display_type': 'line_note'})]


  var item = -1;
  var pump = [];

  function appendPump() {

      var model = document.querySelector(".pump_model");
      var serial = document.querySelector(".pump_serial");
      var qty = document.querySelector(".pump_qty");
      var des = document.querySelector(".pump_des");
      
      if (model.value && serial.value && qty.value && des.value) {
          item += 1;
          pump[item] = new Array('Model:: ' + model.value, 'Serial:: ' + serial.value, 'Qty:: ' + qty.value, 'Description:: ' + des.value, ' : ');

          product_ids[item] = new Object();
          product_ids[item].model = model.selectedOptions[0].getAttribute('data-value');
          product_ids[item].serial = serial.value;
          product_ids[item].qty = qty.value;
          product_ids[item].des = des.value;
          
          document.getElementsByName('x_pump')[0].value = pump;
          appendList(model.value,serial.value,qty.value,des.value);
          document.getElementById("pump_selector").reset();
          Array.from(document.querySelectorAll('.is-invalid')).forEach( invalid => invalid.classList.remove('is-invalid'))
      }
      else {
      (!serial.value)? serial.classList.add("is-invalid"): serial.classList.remove('is-invalid');
      (!qty.value)? qty.classList.add("is-invalid"):qty.classList.remove('is-invalid') ;
      (!des.value)? des.classList.add("is-invalid"): des.classList.remove('is-invalid') ;
      }


      function appendList(model,serial,qty,des) {
          document.getElementById("appended_list").innerHTML +=
              '<div class="added_product alert alert-dark alert-dismissible fade show">' +
              `<button type="button" class="close" data-dismiss="alert" onclick="deleteItem('${model}')">×</button>` +
              '<div>' +
              '<div class="row">' +
              '<p class="col-2">Model:</p>' +
              '<p class="col-10 model">' + model + '</p>' +
              '</div>' +
              '<div class="row">'+
              '<p class="col-2">Serial Number:</p>' +
              '<p class="col-10 serial">' + serial + '</p>' +
              '</div>' +
              '<div class="row">' +
              '<p class="col-2">Quantity:</p>' +
              '<p class="col-10 qty">' + qty + "</p>" +
              '</div>' +
              '<div class="row">' +
              '<p class="col-2">Description:</p>' +
              '<p class="col-10 des">' + des + '</p>' +
              '</div>' +
              '</div>' +
              '</div>';
      }
  }
  function deleteItem(e) {
      item -= 1;
      pump.forEach(p => { 
          if(p[0].includes(e)){
              var d = pump.indexOf(p);
              pump.splice(d,1);
          }});
      pump.filter(Boolean);
      document.getElementsByName('x_pump')[0].value = pump;

      }
  document.querySelector(".appendPump").setAttribute('onclick', 'appendPump()')












