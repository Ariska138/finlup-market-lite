var configPage = {

    "env": "prod",
    "title": "Finlup Demo",
    "desc": "Demo Landing page sales..",
    "features": {
        "reseller": false,
        "blog": "#"
    },
    "categories": [
        {
            "ns": "uncategory",
            "name": "Tidak Tercategori",
            "summery": "-",
            "description": "tidak ada"
        },
        {
            "ns": "products",
            "name": "products",
            "summery": "Pilih product yang sesuai dengan Anda.",
            "description": "Anda dapat pilih product yang sesuai buat Anda"
        }
    ],
    "uid": "uwRIOBes1MO0uDlJKiSRESL5uoo2",
    "wa": "6285155223600",
    "wa_setup": {
        popupMessage: 'Hallo, Ada yang bisa saya bantu?',
        message: "Saya ingin tanya",
    },
    "profile": {
        "name_company": "Finlup Demo",
        "address_1": "Ngrowo, Pilangsari",
        "address_2": "Sragen"
    },
    "layouts": [
        {
            "id": "icon",
            "style": "menu",
            "icon": "assets/img/iconweb.png",
            "icon_href": "#page_top",
            "menus": [
                {
                    "menu": "Products",
                    "menu_href": "#product"
                }
            ]
        },
        {
            "id": "banner",
            "style": "banner",
            "background_image": "",
            "title_first": "Selamat Datang!",
            "title_second": "Finlup Demo",
            "button_action": "Kami Menyediakan",
            "button_action_href": "#product"
        },
        {
            "id": "product",
            "style": "product",
            "content": "categories",
            "content_id": 1
        },
        {
            "id": "footer",
            "style": "footer",
            "sosmed": {
                "fb": "https://www.facebook.com/finlup/",
                "ig": "https://www.instagram.com/finlup_id/",
                "map": "https://g.page/finlup_id"
            }
        }
    ]
}