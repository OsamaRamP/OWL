/** @odoo-module **/

import {Component,useState,useRef,useEffect, onWillStart, onMounted ,onWillUnmount } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { ProductCard } from "../ProductCard/product_card";
import { CatalogHeader } from "../CatlogHeader/catalog_header";
import { useService } from "@web/core/utils/hooks";

export class ProductCatalog extends Component {
    static template = "owl_course.ProductCatalog";
    static components = { ProductCard , CatalogHeader};

    setup() {
        this.searchInputRef = useRef("searchInput");
        this.orm = useService("orm");
        this.notification = useService("notification");
        this.clearSearchB = useRef("clearSearchB");
        this.state = useState({
            search: "",
            cartCount: 0,
            products:  []
        });

        onWillStart(async ()=>{
                        console.log("this << onWillStart >> method");
                   this.state.products = await  this.orm.searchRead('product.template' ,[] ,['id', 'name' , 'list_price'  ,'image_1920'] )
//                   this.state.products =  this.orm.call('product.template', 'create',[])
//                this.state.products =[
//                        { id: 1,image:"/owl_course/static/img/laptop.jpeg", name: "Laptop", price: 1500 },
//                        { id: 2,image:"/owl_course/static/img/mouse.webp", name: "Mouse", price: 50 },
//                        { id: 3,image:"/owl_course/static/img/keyboard.jpeg", name: "Keyboard", price: 100 },
//                        { id: 4, image:"/owl_course/static/img/laptop.jpeg", name: "Monitor", price: 700 },
//                    ]

        });

        onMounted(() =>{
                console.log("this << onMounted >> method");
                this.searchInputRef.el.focus();

        }

        );

        useEffect( ()=>{
                        console.log("this << useEffect >> method");
        },() =>[this.state.cartCount]

        );
        onWillUnmount(()=>{

                                console.log("this << onWillUnmount >> method");

        });



    }

    get allFilterProduct(){
               console.log("this << allFilterProduct >> method");
            const search = this.state.search
            if(!search){
                        return this.state.products;
            }
            return this.state.products.filter( (product)=>
                product.name.includes(search)
            );

    }

    clearSearch(){
      this.state.search = '';
      this.searchInputRef.el.focus();
//      this.clearSearchB.el.style.width = 100 +'px';
//      this.clearSearchB.el.style= {high = 100 +'px';
    }


    onSearchInput(ev) {
        this.state.search = ev.target.value;
    }



    onMoreInfo() {
        this.notification.add(
         ("this product called."),
                { type: "info" }
        )
        this.state.cartCount++;
    }
}

registry.category("actions").add("owl_course.action", ProductCatalog);