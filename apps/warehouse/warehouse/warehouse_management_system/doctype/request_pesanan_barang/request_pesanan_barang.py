# -*- coding: utf-8 -*-
# Copyright (c) 2019, Kelompok 4 and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class RequestPesananBarang(Document):
	pass

	def on_submit(self):
		self.on_approve()

	def on_approve(self):
		if(self.docstatus == 1):
			pesanan = frappe.new_doc("Pesanan")
			pesanan.id_supplier = self.id_supplier
			pesanan.nama_supplier = self.nama_supplier
			pesanan.tanggal_request = self.tanggal_request
			pesanan.total_harga = self.total_harga
			for i in self.request_line_pesanan:
				pesanan.append('pesanan_line',{
					'kode_barang': i.kode_barang,
					'nama_barang': i.nama_barang,
					'jenis_barang': i.jenis_barang,
					'qty': i.qty,
					'satuan': i.satuan
				})
			pesanan.status = "Success"
			pesanan.save()
			new_pesanan = frappe.get_doc("Pesanan", pesanan.name)
			frappe.msgprint("success to create Pesanan with Doc No. {}".format(new_pesanan.name))
			self.change_qty_barang()

	def change_qty_barang(self):
		if(self.request_line_pesanan):
			for i in self.request_line_pesanan:
				barang = frappe.get_doc("Request Line Barang", i.kode_barang)
				barang.qty = int(barang.qty) - int(i.qty)
				barang.save()