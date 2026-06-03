{
    'name': "Real Easte Managemnt",

    'summary': "Short (1 phrase/line) summary of the module's purpose",

    'description': """
Long description of module's purpose
    """,

    'author': "Osama Ramadan",
    'website': "https://www.oramtec.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '19.0.1',
    'depends': ['product'],

    # any module necessary for this one to work correctly
    "assets": {
        "web.assets_backend": [
            "owl_course/static/src/overrides/commponet/CatlogHeader/catalog_header.js",
            "owl_course/static/src/overrides/commponet/CatlogHeader/catalog_header.xml",

            "owl_course/static/src/overrides/commponet/ProductCard/product_card.js",
            "owl_course/static/src/overrides/commponet/ProductCard/product_card.xml",


            "owl_course/static/src/overrides/commponet/ProductCatlog/product_catalog.js",
            "owl_course/static/src/overrides/commponet/ProductCatlog/product_catalog.xml",
            "owl_course/static/src/overrides/commponet/ProductCatlog/product_catlog.css",

        ],
    },
    # always loaded
    'data': [
        'views/templates.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}
