odoo.define('website.user_custom_code', function (require) {
    'use strict';
    let why_is_jquery_version_not_working = function () {
        let custom_text = document.createElement("p")
        custom_text.appendChild(document.createTextNode("AMEX Credit cards are currently not being accepted"))
        custom_text.classList.add("font-italic", "mb-0", "text-danger")
        custom_text.style.paddingLeft = "228px"
        custom_text.style.paddingTop = "5px"

        let custom_container = document.createElement("div")
        custom_container.id = "custom_container"
        custom_container.classList.add("row", "s_col_no_resize", "s_col_no_bgcolor")
        custom_container.style.display = "none"

        custom_container.appendChild(custom_text)
        
        return custom_container
    }
    // ccf -> Credit Card Form
    let ccf = $("div.oe_cart form[data-model_name='sale.order']")
    if (ccf.length) {
        // cci -> Credit Card Input
        let cci = ccf.find("input[name='x_credit_card_number']")

        // gonna use native JS because jquery is fucking up idk why
        // cci -> Credit Card Input Container
        let ccic = document.getElementById("ov6589rr36dq").closest(".form-group")
        let _cc = why_is_jquery_version_not_working()
        ccic.appendChild(_cc)

        if (cci.length) {
            let cc = $("#custom_container")
            let btn = $(".s_website_form_submit a.s_website_form_send ")
            cci.on("input", function (){
                // fccn -> First Credit Card Number
                let fccn = parseInt(cci.val().charAt(0))
                if (fccn == 3) {
                    cci.addClass("is-invalid")
                    btn.addClass("disabled")
                    cc.slideDown("slow")
                }
                else {
                    cci.removeClass("is-invalid")
                    btn.removeClass("disabled")
                    cc.slideUp("slow")
                }
            })
        }
    }
});


odoo.define('website.custom_checkbox_checker', function (require) {
    'use strict';
    let checkbox_warning = function () {
        let custom_text = document.createElement("p");
        custom_text.appendChild(document.createTextNode("Please check this box if you want to proceed."));
        custom_text.classList.add("font-italic", "mb-0", "text-danger");
        // custom_text.style.paddingLeft = "228px"
        custom_text.style.paddingTop = "5px";

        let warning_container = document.createElement("div");
        warning_container.id = "custom_container";
        warning_container.classList.add("row", "s_col_no_resize", "s_col_no_bgcolor","col-12");
        warning_container.style.display = "none";

        warning_container.appendChild(custom_text);
        
        return warning_container
    };
    // Lead Form
    let lead_form = $("form[data-model_name='res.partner']");
    if (lead_form) {
        // checkbox -> opt-in
        let checkboxes = Array.from(lead_form.find("input[name='x_opt_in']"));

        let checkbox_containers = Array.from(document.getElementsByName("x_opt_in"));
        let _checkbox_function = checkbox_warning();
        for (container of checkbox_containers){
            container.appendChild(_checkbox_function)
        };

        for (checkbox in checkboxes){
            let warning = $("#custom_container")
            let btn = $("a.s_website_form_send ")
            btn.on("click", function (){

                if (checkbox.value !== 'Yes') {
                    warning.slideDown("slow")
                }
                else {
                    warning.slideUp("slow")
                }
            })
        };

        }


    }
);

document.querySelector(".appendPump").addEventListener('click', 'appendPump()');

document.querySelector(".appendPump").setAttribute('onclick', 'appendPump()');

odoo.define('website.sell_repair_multiple_products', function (require) {

    'use strict';

    let item = -1;
    let pump = [];
    let product_ids=[];
    let invoice_address = [];


    try{
        // $("#pump_selector").find(".appendPump").on( "click", appendPump);
        // $(".s_website_form_send").on( "click", invoice);
        document.querySelector("#pump_selector.appendPump").setAttribute('onclick', 'appendPump()');
        document.querySelector("#pump_selector.s_website_form_send").setAttribute('onclick', 'invoice()');

    } catch {};

    const deleteItem = (e)=>{
        item -= 1;
        pump.forEach(p => { 
            if(p[0].includes(e)){
                var d = pump.indexOf(p);
                pump.splice(d,1);
                try{
                product_ids.splice(d,1);
                }
                catch(err){}
            }});
        pump.filter(Boolean);
        $("[name='x_pump']").value = pump;
        try{
            $("[name='x_form_product_ids']").value = JSON.stringify(product_ids);
        }
        catch(err){}

        }

    const appendList = (model,serial,qty,des)=>{
        $("#appended_list").append(
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
                '</div>');
        }

    const appendPump = () => {
        let model = $(".pump_model");
        let serial = $(".pump_serial");
        let qty = $(".pump_qty");
        let des = $(".pump_des");

        if (model.val() !== '' && serial.val()!== '' && qty.val()!== '' && des.val()!== '') {   
            item += 1;
            pump[item] = new Array('Model:: ' + model.val(), 'Serial:: ' + serial.val(), 'Qty:: ' + qty.val(), 'Description:: ' + des.val().replace(/,/g, ''), ' : ');

            product_ids[item] = {
                model: $(".pump_model option:selected").attr('data-value'),
                name: model.val(),
                serial: serial.val(),
                qty: qty.val(),
                des: des.val()
            }

            try{
                $("[name='x_pump']").val() = pump;
                $("[name='x_form_product_ids']").val() = JSON.stringify(product_ids);
            }
            catch(err){}

            appendList(model.val(),serial.val(),qty.val(),des.val());
            $("#pump_selector").trigger("reset");
            Array.from(document.querySelectorAll(".is-invalid")).forEach((item)=>{item.classList.remove("is-invalid")});           
        } else {
            const items = [model,serial,qty,des];
            items.map((item)=>{
                if (item.val() !== ''){
                    item.removeClass("is-invalid")
                } else {
                    item.addClass("is-invalid")
                }
                })
            };
        
    }

    const invoice = () =>{
        try{
            invoice_address = {
                name: $("#invoice_name").val(),
                company: $("#invoice_company").val(),
                email: $("#invoice_email").val(),
                phone: $("#invoice_phone").val(),
                street: $("#invoice_street").val(),
                city:$("#invoice_city").val(),
                state:$("#invoice_state").val(),
                zip:$("#invoice_zip").val(),
                po:$("#invoice_po").val()
            };
            $("[name='x_form_product_sn']").val(JSON.stringify(invoice_address))  
        } catch(err) {}
    }

    }
);

javascript:(function(e,s){e.src=s;e.onload=function(){jQuery.noConflict();console.log('jQuery injected')};document.head.appendChild(e);})(document.createElement('script'),'//code.jquery.com/jquery-latest.min.js')
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>










//old code backup

var item = -1;
var pump = [];
var product_ids=[];
var invoice_address = [];
try{
document.querySelector(".appendPump").setAttribute('onclick', 'appendPump()');
document.querySelector(".s_website_form_send").setAttribute('onclick', 'invoice()');
}
catch(err){};

function appendPump() {

    var model = document.querySelector(".pump_model");
    var serial = document.querySelector(".pump_serial");
    var qty = document.querySelector(".pump_qty");
    var des = document.querySelector(".pump_des");
    
    if (model.value &amp;&amp; serial.value &amp;&amp; qty.value &amp;&amp; des.value) {
        item += 1;
        pump[item] = new Array('Model:: ' + model.value, 'Serial:: ' + serial.value, 'Qty:: ' + qty.value, 'Description:: ' + des.value.replaceAll('&#44;',''), ' : ');


        product_ids[item] = new Object();
        product_ids[item].model = model.selectedOptions[0].getAttribute('data-value');
        product_ids[item].name = model.value;
        product_ids[item].serial = serial.value;
        product_ids[item].qty = qty.value;
        product_ids[item].des = des.value;
        
        try{
        document.getElementsByName('x_pump')[0].value = pump;
        document.getElementsByName('x_form_product_ids')[0].value = JSON.stringify(product_ids);
        }
        catch(err){}

        appendList(model.value,serial.value,qty.value,des.value);
        document.getElementById("pump_selector").reset();
        Array.from(document.querySelectorAll('.is-invalid')).forEach( invalid => invalid.classList.remove('is-invalid'))
    }
    else{
    (!model.value)? model.classList.add("is-invalid"): model.classList.remove('is-invalid');
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
            try{
            product_ids.splice(d,1);
            }
            catch(err){}
        }});
    pump.filter(Boolean);
    document.getElementsByName('x_pump')[0].value = pump;
    try{
    document.getElementsByName('x_form_product_ids')[0].value = JSON.stringify(product_ids);
    }
    catch(err){}

    }
    function invoice(){
        try{
        invoice_address = new Object();
        invoice_address.name = document.getElementById('invoice_name').value;
        invoice_address.company = document.getElementById('invoice_company').value;
        invoice_address.email = document.getElementById('invoice_email').value;
        invoice_address.phone = document.getElementById('invoice_phone').value;
        invoice_address.street = document.getElementById('invoice_street').value;
        invoice_address.city = document.getElementById('invoice_city').value;
        invoice_address.state = document.getElementById('invoice_state').value;
        invoice_address.zip = document.getElementById('invoice_zip').value;
        invoice_address.po = document.getElementById('invoice_po').value;
        document.getElementsByName('x_form_product_sn')[0].value = JSON.stringify(invoice_address);
        }
        catch(err){}

        }
        try{
        document.getElementById("oahczit5vwpg").addEventListener("click", function(){
       if(this.checked)
       {
           document.querySelector("[id='invoice_name']").value = document.querySelector("#olhhmjggr7ds").value;
           document.querySelector("[id='invoice_email']").value = document.querySelector("#omn71rjd5b8h").value;
           document.querySelector("[id='invoice_phone']").value = document.querySelector("#ob3obgczg7u").value;
           document.querySelector("[id='invoice_street']").value = document.querySelector("#oz4139zkyay").value;
           document.querySelector("[id='invoice_city']").value = document.querySelector("#ou746qtumqfi").value;
           document.querySelector("[id='invoice_state']").value = document.querySelector("#o9wf9bp7z7p4").value;
           document.querySelector("[id='invoice_zip']").value = document.querySelector("#o8rh8cvh1hjl").value;
       }
       else {
           document.querySelector("[id='invoice_name']").value = '';
           document.querySelector("[id='invoice_email']").value = '';
           document.querySelector("[id='invoice_phone']").value = '';
           document.querySelector("[id='invoice_street']").value = '';
           document.querySelector("[id='invoice_city']").value = '';
           document.querySelector("[id='invoice_zip']").value = '';
       }
       });}
       catch(err){}