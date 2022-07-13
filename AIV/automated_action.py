order_lines = []

array = record.x_form_product_ids.split(",")
product_ids = [int(item) for item in array]
product_sn = record.x_form_product_sn.split(",")
# product_qty = record.x_form_product_qty.split(",")
product_des = record.x_form_product_des.split(",")

products = len(product_ids)

for product in range(products):
  order_lines.append((0, 0, {
                  'name': '[SN:'+ product_sn[product] ,
                  'product_id': product_ids[product],
                  'product_uom_qty': 1,
                  'product_uom': 1,
                  'price_unit': 1}))

 
sale_order_vals = {
            'partner_id': record.id,
            'partner_invoice_id': record.id,
            'partner_shipping_id': record.id,
            'user_id': 2,
            'order_line': order_lines,
            'pricelist_id': 1,
        }

env['sale.order'].create(sale_order_vals)
