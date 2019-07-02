// Copyright (c) 2019, Kelompok 4 and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Master Gudang', {
// 	refresh: function(frm) {

// 	}
// });

  frappe.ui.form.on("Request Line Barang", "qty", function(frm, cdt, cdn) {
	
	var barang = frm.doc.request_line_barang;
	var total_jumlah_barang = 0
	var kapasitas_penyimpanan = cur_frm.doc.kapasitas_penyimpanan

	for(var i in barang) {
	total_jumlah_barang = (total_jumlah_barang + parseInt(barang[i].qty))
	 }
	 frm.set_value("total_jumlah_barang",total_jumlah_barang) 
  }
  
  );

  frappe.ui.form.on('Master Gudang', 'total_jumlah_barang', function(frm) {
    {
	
		frm.set_value('sisa_penyimpanan',frm.doc.kapasitas_penyimpanan - frm.doc.total_jumlah_barang)

		if(cur_frm.doc.sisa_penyimpanan < 0) {
			frm.set_value('sisa_penyimpanan', '')
			frm.set_value('status','Penuh')
				frappe.throw('kapasitas gudang sudah penuh')
		}
		else{
			frm.set_value('status','Tersedia')
		}
	}
	
});

// frappe.ui.form.on("Master Gudang","request_line_barang",function(frm){
// 	if(cur_frm.doc.request_line_barang){
// 		return frappe.call({
// 			method: "get_child_table",
// 			args:{
// 			"doc":cur_frm.doc.request_line_barang
// 			},
// 			callback: function(r) {
// 				frm.set_value('sisa_penyimpanan',kapasitas_penyimpanan - qty)
// 			// if(cur_frm.doc.child_table_field_name_in_doctype B){
// 			// 	cur_frm.doc.child_table_field_name_in_doctype B = ""
// 			// 	refresh_field("child_table_field_name_in_doctype B")
// 			}
// 		});
// 	}
// });