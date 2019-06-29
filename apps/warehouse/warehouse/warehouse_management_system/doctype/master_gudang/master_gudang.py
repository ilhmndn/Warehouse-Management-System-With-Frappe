# -*- coding: utf-8 -*-
# Copyright (c) 2019, Kelompok 4 and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class MasterGudang(Document):
	pass

# def on_submit(self):
# 	gudang = frappe.new_doc("Master Gudang")
# 	gudang.kapasitas_penyimpanan = self.kapasitas_penyimpanan
# 	gudang.sisa_penyimpanan = self.sisa_penyimpanan
# 	for i in self.request_line_barang:
# 		gudang.append('data_gudang',{
# 			'nama_barang': i.nama_barang,
# 			'jenis': i.jenis,
# 			'jumlah': i.jumlah
# 		})
# 	gudang.save()
# 	self.change_sisa_penyimpanan_gudang()

# def change_sisa_penyimpanan_gudang(self):
# 	buku = frappe.get_doc("Master Gudang", i.request_line_barang)
# 	buku = kapasitas_penyimpanan - i.jumlah
# 	buku = sisa_penyimpanan
# 	buku.save()


