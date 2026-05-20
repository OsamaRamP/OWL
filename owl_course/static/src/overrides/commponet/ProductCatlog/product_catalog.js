/** @odoo-module **/

import {Component,useState,useRef,useEffect, onWillStart, onMounted} from "@odoo/owl";
import { registry } from "@web/core/registry";
import { ProductCard } from "../ProductCard/product_card";
import { CatalogHeader } from "../CatlogHeader/catalog_header";


export class ProductCatalog extends Component {
    static template = "owl_course.ProductCatalog";
    static components = { ProductCard , CatalogHeader};

    setup() {
        this.searchInputRef = useRef("searchInput");
        this.state = useState({
            search: "",
            cartCount: 0,
            products:  [
                { id: 1,image:"/owl_course/static/img/laptop.jpeg", name: "Laptop", price: 1500 },
                { id: 2,image:"/owl_course/static/img/mouse.webp", name: "Mouse", price: 50 },
                { id: 3,image:"/owl_course/static/img/keyboard.jpeg", name: "Keyboard", price: 100 },
                { id: 4, image:"/owl_course/static/img/laptop.jpeg", name: "Monitor", price: 700 },
            ]
        });


    }



    onSearchInput(ev) {
        this.state.search = ev.target.value;
    }



    addToCart() {
        this.state.cartCount++;
    }
}

registry.category("actions").add("owl_course.action", ProductCatalog);