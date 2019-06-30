// Copyright (c) 2019, Kelompok 4 and contributors
// For license information, please see license.txt

frappe.ui.form.on('Request Pesanan Barang', 'tanggal_request', function(frm) {
	if(frm.doc.tanggal_request < get_today()) {
		frm.set_value('tanggal_request','')
			frappe.throw('Mohon Maaf Harus Memilih Tanggal Hari Ini!!!!')
	}
});

// cur_frm.set_query('kode_barang','request_line_pesanan', function(doc, cdt, cdn) {
// 	var d = locals[cdt][cdn];
// 	if(cur_frm.doc.jenis_barang == "Pasir"){
// 	return {
// 		filters: [
// 			['Request Line Barang','jenis_barang','=','Pasir']
// 		]
// 	}}
// 	else {
// 		return {
// 			filters: [
// 				['Request Line Barang','jenis_barang','=','Batu Bata']
// 			]
// 	}}
// });
