// Copyright (c) 2019, Kelompok 4 and contributors
// For license information, please see license.txt


frappe.ui.form.on('Request Pesanan Barang', 'tanggal_request', function(frm) {
	if(frm.doc.tanggal_request < get_today()) {
		frm.set_value('tanggal_request','')
			frappe.throw('Mohon Maaf Harus Memilih Tanggal Hari Ini!!!!')
	}
});

frappe.ui.form.on("Request Line Pesanan", "qty", function(frm, cdt, cdn) {

	var harga = frm.doc.request_line_pesanan;
	var total_harga = 0

	for(var i in harga) {
	total_harga = (total_harga + (parseInt(harga[i].qty) * parseInt(harga[i].harga)))
	 }
	 frappe.call({
		method :"frappe.client.get",
		args:{
			doctype : "Master Supplier",
			name : frm.doc.id_supplier
		},
		
		callback:function (r){
			if (r.message.jenis_supplier == 'Perorangan'){
				total_harga = total_harga - total_harga * 10/100;
				frm.set_value('total_harga',total_harga);
			}
			else{
				total_harga = total_harga - total_harga * 20/100;
				frm.set_value('total_harga',total_harga);
			}
		}
	});
  });

// cur_frm.set_query('kode_barang','request_line_pesanan', function(doc, cdt, cdn) {
// 	var d = locals[cdt][cdn];
// 	if(frm.doc.nama_barang % "Pasir"){
// 	return {
// 		filters: [
// 			['Request Line Barang','jenis_barang','=','Pasir']
// 		]
// 	}}
// 	else {
// 		return {
// 			filters: [
// 				['Request Line Barang','jenis_barang','=','Batu Ringan']
// 			]
// 	}}
// });
