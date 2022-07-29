# Available variables:
#  - env: Odoo Environment on which the action is triggered
#  - model: Odoo Model of the record on which the action is triggered; is a void recordset
#  - record: record on which the action is triggered; may be void
#  - records: recordset of all records on which the action is triggered in multi-mode; may be void
#  - time, datetime, dateutil, timezone: useful Python libraries
#  - float_compare: Odoo function to compare floats based on specific precisions
#  - log: log(message, level='info'): logging function to record debug information in ir.logging table
#  - UserError: Warning Exception to use with raise
#  - Command: x2Many commands namespace
# To return an action, assign: action = {...}

invoice = json.loads(record.x_form_product_sn)
partner_invoice_address_id = env['res.partner'].create({
    'name': invoice['name'],
    'email': invoice['email'],
    'x_po_number': invoice['po'],
    'x_form_company': invoice['company'],
    'phone': invoice['phone'],
    'type': 'invoice',
    'street': invoice['street'],
    'city': invoice['city'],
    'state_id': int(invoice['state']),
    'zip': invoice['zip'],
    'country_id': 233,
    'company_id': record.company_id.id,
    'parent_id': record.id,
}).id

products = json.loads(record.x_form_product_ids)
order_lines = [
    (0, 0, {
        'name': '[Repair Service] ' + product['name'] + ' (' + product['serial'] + ') - ' + product['des'],
        'product_id': int(product['model']),
        'product_uom_qty': product['qty'],
        'product_uom': 1,
        'price_unit': 0})
    for product in products
]

sale_order_vals = {
    'partner_id': record.id,
    'partner_invoice_id': partner_invoice_address_id,
    'partner_shipping_id': record.id,
    'user_id': 2,
    'company_id': record.company_id.id,
    'order_line': order_lines,
    'pricelist_id': 1,
    'require_signature': False
}
# env['sale.order'].create(sale_order_vals)
# Send Emails 

def send_emails_inc():
    # To client (AIV)
    template_id = env.ref('__export__.mail_template_47_ed2a11b6').id
    template = env['mail.template'].sudo().browse(template_id)
    template.send_mail(order.id, force_send=False)

    # To user (AIV)
    template_id = env.ref('__export__.mail_template_50_a47ea27d').id
    template = env['mail.template'].sudo().browse(template_id)
    template.send_mail(order.id, force_send=False)

def send_emails_vet():
    # To client (AIV VET)
    template_id = env.ref('__export__.mail_template_48_8725e356').id
    template = env['mail.template'].sudo().browse(template_id)
    template.send_mail(order.id, force_send=False)

    # To user (AIV VET)
    template_id = env.ref('__export__.mail_template_49_35be0e5c').id
    template = env['mail.template'].sudo().browse(template_id)
    template.send_mail(order.id, force_send=False)

# order = env['sale.order'].sudo().search([('partner_id.id', '=',record.id)])
# if order.company_id.id == 1:
#   send_emails_inc()
# elif order.company_id.id == 2:
#   send_emails_vet()

if record.company_id.id == 1:
    order = env['sale.order'].create(sale_order_vals)
    send_emails_inc()

elif record.company_id.id == 2:
    order = env['sale.order'].create(sale_order_vals)
    send_emails_vet()
    
    
# # Bon's Code
# invoice = json.loads(record.x_form_product_sn)
# yeah = env['res.partner'].search([("name", "=", invoice['name']), ("email", "=", invoice['email'])])
# if not yeah:
#     yeah = env['res.partner'].create({
#         'name': invoice['name'],
#         'email': invoice['email'],
#         'x_po_number': invoice['po'],
#         'x_form_company': invoice['company'],
#         'phone': invoice['phone'],
#         'type': 'invoice',
#         'street': invoice['street'],
#         'city': invoice['city'],
#         'state_id': int(invoice['state']),
#         'zip': invoice['zip'],
#         'country_id': 233,
#         'company_id': record.company_id.id,
#         'parent_id': record.id,
#     })
# partner_invoice_address_id = yeah.id

# products = json.loads(record.x_form_product_ids)
# order_lines = [
#     (0, 0, {
#         'name': '[Repair Service] ' + product['name'] + ' (' + product['serial'] + ') - ' + product['des'],
#         'product_id': int(product['model']),
#         'product_uom_qty': product['qty'],
#         'product_uom': 1,
#         'price_unit': 0})
#     for product in products
# ]

# sale_order_vals = {
#     'partner_id': record.id,
#     'partner_invoice_id': partner_invoice_address_id,
#     'partner_shipping_id': record.id,
#     'user_id': 2,
#     'company_id': record.company_id.id,
#     'order_line': order_lines,
#     'pricelist_id': 1,
#     'require_signature': False
# }


# # Send Emails
# def send_emails(company_id):
#     template_refs = {
#         1: ('__export__.mail_template_47_ed2a11b6', '__export__.mail_template_50_a47ea27d'),  # AIV
#         2: ('__export__.mail_template_48_8725e356', '__export__.mail_template_49_35be0e5c')  # AIV VET
#     }
#     client_template_ref, user_template_ref = template_refs[company_id]
#     # To client
#     client_template_id = env.ref(client_template_ref).id
#     template = env['mail.template'].sudo().browse(client_template_id)
#     template.send_mail(order.id, force_send=False)
#     # To user
#     user_template_id = env.ref(user_template_ref).id
#     template = env['mail.template'].sudo().browse(user_template_id)
#     template.send_mail(order.id, force_send=False)

# order = env['sale.order'].create(sale_order_vals)
# send_emails(record.company_id.id)
