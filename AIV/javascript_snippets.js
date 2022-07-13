// Added to Website > Website > AIV Inc. > Custom Code > Custom end of <body> code //
<html>
    <!-- Disable links to open to new window except links inside a blog -->
    <script type="text/javascript">
      if(window.location.pathname.split('/')[1] != "blog"){
        Array.from(document.querySelectorAll('a[target="_blank"]')).forEach(link => link.removeAttribute('target'));
      }
    </script>
    <!-- End -->

/////////////////////////////////////////////////////////////////////////////////////

// Get Form Data in Sell Us Your Equipment Page

<script type="text/javascript">
    var item = -1;
    var pump = [];

    function appendPump() {

        var model = document.getElementById("os7dd7wewzm").value;
        var serial = document.getElementById("ovchicp8mhus").value;
        var qty = document.getElementById("o4xttmgfhf6x").value;
        var des = document.getElementById("o3k6al5slzg").value;

        if (model && serial && qty && des) {
            item += 1;
            pump[item] = new Array('Model:: ' + model, 'Serial:: ' + serial, 'Qty:: ' + qty, 'Description:: ' + des, ' : ');
            console.log(pump);
            document.getElementById("pump_selector").reset();
            document.getElementsByName('x_sell_pump')[0].value = pump

        }
    }

</script>

// Email Template
<table border="0">
    <tbody>
        <t t-set="items" t-value="object.x_sell_pump.split(',')" data-oe-t-inline="true"></t>
        <t t-foreach="items" t-as="item" data-oe-t-inline="true">
            <tr>
                <t t-set="i" t-value="item.split(': ')" data-oe-t-inline="true"></t>
                <td style="min-width:100px; padding-bottom:5px" t-foreach="i" t-as="val">
                    <t t-out="val" data-oe-t-inline="true" contenteditable="false" oe-keep-contenteditable=""></t>
                </td>
            </tr>
        </t>

    </tbody>
</table>

<!-- Email to User -->

<t name="Sell Equipment Email" t-name="website_aiv.email_layout">
    <xml version="1.0">
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML
            1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html style="margin-top: 0px !important; padding-top: 0px !important">

    <body>
        <t t-foreach="request.env['res.company'].search([('partner_id', '=', 'AIV Inc')])" t-as="company">
            <table width="100%" cellspacing="0" cellpadding="0" align="center" style="max-width: 700px;">
                <tr>
                    <td t-if="not no_runners" style="background-color: #1D53A0;">
                        <table cellspacing="0" cellpadding="0" align="center">
                            <tr>
                                <td style="padding-top: 1.5rem; padding-bottom: 1.5rem;">
                                    <img src="/web/image/9074/aiv-logo.jpg" width="120" />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <!-- @formatter:off -->
                        <table width="100%" cellpadding="0" cellspacing="0" align="center" style="max-width: 700px;">
                            <tbody>
                                <tr>
                                    <td style="background-color: #f9f9f9; padding-top: 2.8rem; padding-bottom: 2.8rem;">
                                        <table width="100%" align="center" style="text-align: center;">
                                            <tr>
                                                <td>
                                                    <h2 style="margin-top:0;"
                                                        t-out="'Thank You for Contacting AIV, Inc!'" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h4 style="margin: 0 80px;">
                                                        AIV is an ISO 13485:2016 certified facility. AIV strives to
                                                        provide you cost effective options to service equipment and
                                                        flexible solutions to best suit your needs.
                                                    </h4>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr></tr>
                            </tbody>
                        </table>
                        <table width="80%" align="center">
                            <tbody>
                                <tr>
                                    <td colspan="2">
                                        <p style="margin-top: 32px;">Hi
                                            <t
                                                t-esc="object.name and object.name.title().split()[0] or There" />,
                                        </p><br/>
                                        <p>We have received your request to sell your IV pump. Our sales representatives
                                            will contact you with a quote once your request has been reviewed.</p><br/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    </tbody>
            </table>
            <!-- @formatter:on -->
            <table width="100%" align="center" 
                style="margin-top: 1.3rem; max-width: 700px; text-align: center; background-color: #f9f9f9;">
                <tr>
                    <td>
                        <br />
                    </td>
                </tr>
                <tr>
                    <td>For more information, please contact us at:</td>
                </tr>
                <tr>
                    <td style="padding-top: 1rem; padding-bottom: 1rem; padding-left: 1rem; padding-right: 1rem;">
                        <img src="/web/image/9075/phone-ripoff.jpg" style="vertical-align: middle;" />
                        <a t-attf-href="tel:{{ company.phone }}" target="_blank"
                            style="color: #1fa2d6; text-decoration: none; margin-right: 1.6rem;"
                            t-esc="company.phone" />
                        <img src="/web/image/9080/mail-ripoff.jpg" style="vertical-align: middle;" />
                        <a t-attf-href="mailto:{{ company.email }}" target="_blank"
                            style="color: #1fa2d6; text-decoration: none; margin-left: 0.5rem"
                            t-esc="company.email " />
                    </td>
                </tr>
                <tr>
                    <td style="font-weight: bold; font-style: italic; color: #1D53A0;">
                        We thank you for your business and look forward to serving your needs in the future.
                    </td>
                </tr>
                <tr>
                    <td>
                        <br />
                    </td>
                </tr>
            </table>
            <table width="100%" align="center" style="background-color: #444444;max-width: 700px;" >
                <tr>
                    <td style="width: 100%; color: #fff; text-align: center;">
                        <p style="margin-top: 1rem; margin-bottom: 1rem;">Copyright © 2022 <t t-out="company.name"></t>. All rights reserved.
                        </p>
                    </td>
                </tr>
            </table>
            </td>
            </tr>
            </table>
        </t>
    </body>
</t>

.

<!-- Email to Client -->

<t name="Sell Equipment Notification" t-name="website_aiv.sell_equipment_notification">
    <xml version="1.0">
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML
            1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html style="margin-top: 0px !important; padding-top: 0px !important">

    <body>
        <t t-foreach="request.env['res.company'].search([('partner_id', '=', 'AIV Inc')])" t-as="company">
            <table width="100%" cellspacing="0" cellpadding="0" align="center" style="max-width: 700px;">
                <tr>
                    <td t-if="not no_runners" style="background-color: #1D53A0;">
                        <table cellspacing="0" cellpadding="0" align="center">
                            <tr>
                                <td style="padding-top: 1.5rem; padding-bottom: 1.5rem;">
                                    <img src="/web/image/9074/aiv-logo.jpg" width="120" />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <!-- @formatter:off -->
                        <table width="100%" cellpadding="0" cellspacing="0" align="center" style="max-width: 700px;">
                            <tbody>
                                <tr>
                                    <td style="background-color: #f9f9f9; padding-top: 2.8rem; padding-bottom: 2.8rem;">
                                        <table width="100%" align="center" style="text-align: center;">
                                            <tr>
                                                <td>
                                                    <h2 style="margin-top:0;"><t t-out="object.name"/> wants to sell their Old IV Pump/s</h2>
                                                </td>
                                            </tr>

                                        </table>
                                    </td>
                                </tr>
                                <tr><td style="background-color: #f9f9f9;padding-bottom: 1rem;"><h3 style="margin: auto; width:80%">Customer Details: </h3></td></tr>
                                <tr>
                                    <td style="background-color: #f9f9f9; padding-bottom: 2.8rem;">
                                        <table width="70%" align="center" style="text-align: left;">
                                                <t t-set="contact_details" t-value="[
                                                {'l': 'Name:', 'r': object.name},
                                                {'l': 'Phone:', 'r': object.phone},
                                                {'l': 'Email:', 'r': object.email},
                                                {'l': 'Address:', 'r': object.street},
                                                {'l': 'City:', 'r': object.city},
                                                {'l': 'State:', 'r': object.state_id.name},
                                                {'l': 'ZIP', 'r': object.zip},
                                                {'l': 'Country', 'r': object.country_id.name},
                                                ]"/>
                                                <tr t-foreach="contact_details" t-as="contact">
                                                    <td width="35%" t-esc="contact.get('l')"/>
                                                    <td width="65%" t-esc="contact.get('r')"/>
                                                </tr>                                           
                                        </table>
                                    </td>
                                </tr>
                                <tr><td style="background-color: #f9f9f9;padding-bottom: 1rem;"><h3 style="margin: auto; width:80%">Pumps for Selling: </h3></td></tr>
                                <tr>
                                    <td style="background-color: #f9f9f9; padding-bottom: 2.8rem;">
                                        <table width="70%" align="center" style="text-align: left;">
                                            <tbody>
                                                <t t-set="items" t-value="object.x_sell_pump.split(',')" data-oe-t-inline="true"></t>
                                                <t t-foreach="items" t-as="item" data-oe-t-inline="true">
                                                    <tr style="height: 20px;">
                                                        <t t-set="i" t-value="item.split(': ')" data-oe-t-inline="true"></t>
                                                        <td t-foreach="i" t-as="val">
                                                            <t t-out="val" data-oe-t-inline="true" contenteditable="false" oe-keep-contenteditable=""></t>
                                                        </td>
                                                    </tr>
                                                </t>
                                        
                                            </tbody>
                                        </table> 
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </td>
                    </tbody>
            </table>
            <!-- @formatter:on -->

            <table width="100%" align="center" style="background-color: #444444;max-width: 700px;" >
                <tr>
                    <td style="width: 100%; color: #fff; text-align: center;">
                        <p style="margin-top: 1rem; margin-bottom: 1rem;">Copyright © 2022 <t t-out="company.name"></t>. All rights reserved.
                        </p>
                    </td>
                </tr>
            </table>
            </td>
            </tr>
            </table>
        </t>
    </body>
</t>

/////////////////////////////////////////////////////////////////////////////////////





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


<script type="text/javascript">

  var item = -1;
  var pump = [];

  function appendPump() {

      var model = document.querySelector(".pump_model");
      var serial = document.querySelector(".pump_serial");
      var qty = document.querySelector(".pump_qty");
      var des = document.querySelector(".pump_des");
      
      if (model.value &amp;&amp; serial.value &amp;&amp; qty.value &amp;&amp; des.value) {
          item += 1;
          pump[item] = new Array('Model:: ' + model.value, 'Serial:: ' + serial.value, 'Qty:: ' + qty.value, 'Description:: ' + des.value, ' : ');
          document.getElementsByName('x_pump')[0].value = pump;
          appendList(model.value,serial.value,qty.value,des.value);
          document.getElementById("pump_selector").reset();
          Array.from(document.querySelectorAll('.is-invalid')).forEach( invalid => invalid.classList.remove('is-invalid'))
      }
      else{
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

      <!--pump.forEach(p => { if(p[0].includes(e)){pump.splice(pump[p],1);}});-->
      }
  document.querySelector(".appendPump").setAttribute('onclick', 'appendPump()')

</script>











