/** @odoo-module **/

import {Component,useState,useRef,useEffect, onWillStart, onMounted ,onWillUnmount } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { ProductCard } from "../ProductCard/product_card";
import { CatalogHeader } from "../CatlogHeader/catalog_header";
import { useService } from "@web/core/utils/hooks";

import { _t } from "@web/core/l10n/translation";


import { ConfirmationDialog } from "@web/core/confirmation_dialog/confirmation_dialog";


export class ProductCatalog extends Component {
    static template = "owl_course.ProductCatalog";
    static components = { ProductCard , CatalogHeader};

    setup() {
        this.searchInputRef = useRef("searchInput");
        this.orm = useService("orm");
        this.action = useService("action");
        this.dialog = useService("dialog");

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
                        console.log("this << useEffect >> method" , this.state.search);
                        if(this.state.search && ! this.state.products){

                        }
        },() =>[this.state.search]

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



    onMoreInfo(product) {

//     this.dialog.add(ConfirmationDialog, {
//            title: _t("Product call On more Info    !"),
//            body: _t(
//               product.name
//            ),
//            cancel() {},
//            confirm: async () => {
//        this.notification.add(
//         ("this product called."),
//                { type: "info" }
//        )
//
//            },
//            confirmLabel: _t("Yes, I know what I'm doing"),
//            cancelLabel: _t("Missclicked, sorry"),
//        });

//        this.notification.add(
//         ("this product called."),
//                { type: "info" }
//        )
//        this.state.cartCount++;
        console.log("zzzz" , product)
        this.action.doAction({
            type: "ir.actions.act_window",
            res_model: "product.template",
            views: [[false, "form"]],
            target: "current",
            res_id :product.id
        });


//        this.action.doActionButton({
//            name: "default_intrastat_units",
//            type: "object",
//            resModel: "product.template",
//        });

      this.orm.call('product.template', 'default_intrastat_units',[[]])

    }
}

registry.category("actions").add("owl_course.action", ProductCatalog);