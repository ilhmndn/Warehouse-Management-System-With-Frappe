// Copyright (c) 2019, Kelompok 4 and contributors
// For license information, please see license.txt

frappe.ui.form.on('Master Barang', 'jenis_barang', function(frm){
	if (frm.doc.jenis_barang == 'Pasir') {
		frm.set_value('satuan','Ton');
	}
	else if(frm.doc.jenis_barang == 'Batu Bata'){
		frm.set_value('satuan','Buah');
	}
	else if(frm.doc.jenis_barang == 'Pipa PVC' || frm.doc.jenis_barang == 'Kayu'){
		frm.set_value('satuan','Batang');
	}
	else{
		frm.set_value('satuan','M3');
	}
});

// frappe.ui.form.on('Master Barang', 'jumlah', function(frm){
// 	{
// 		frm.set_value('harga','Rp. ');
// 	}
	
// });