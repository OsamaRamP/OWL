/** @odoo-module **/

import { Component } from "@odoo/owl";

export class ProductCard extends Component {
    static template = "owl_course.ProductCard";
        setup() {

    }

    static props = {
        product: Object,
        onMoreInfo: Function,
    };
}