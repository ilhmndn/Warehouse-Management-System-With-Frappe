// Copyright (c) 2019, Kelompok 4 and contributors
// For license information, please see license.txt

frappe.ui.form.on('Request Pesanan Barang', 'tanggal_request', function(frm) {
	if(frm.doc.tanggal_request < get_today()) {
		frm.set_value('tanggal_request','')
			frappe.throw('Harus memilih tanggal sekarang coyy!!!!!!!!!!!!!!!!1')
	}
});

// frappe.ui.form.on('Request Line Pesanan', 'jumlah', function(frm) {
//     if(frm.doc.jumlah != 0){
// 		frm.set_value('total_harga', 'harga' * 'jumlah');
// 	}
// });
