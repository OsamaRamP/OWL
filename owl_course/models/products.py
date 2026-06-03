

# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import api, fields, models
from odoo.addons.account_intrastat.models.account_intrastat_code import SUPPLEMENTARY_UNITS


class ProductTemplate(models.Model):
    _inherit = 'product.template'


    def default_intrastat_units(self):
        print("dddddddddd**********")
        return True