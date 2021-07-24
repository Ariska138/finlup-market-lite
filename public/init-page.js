/**
 * 
 */

var configPage = {
    "uid": "<UID>",
    "seo": {
        "title": "Finlup Demo",
        "description": "Demo Landing page sales..",
    },
    "multiple_title": [
        "Finlup Demo",
        "Silakan Coba",
        "Ini hanya contoh"
    ],
    "profile": {
        "logo": "assets/img/logos/iconweb.png",
        "name_company": "Finlup Demo",
        "address_1": "Ngrowo, Pilangsari",
        "address_2": "Sragen"
    },
    "categories": [
        {
            "ns": "products",
            "name": "Produk",
            "description": "Anda dapat pilih produk yang sesuai buat Anda"
        }
    ],
    "layouts": [
        {
            "id": "icon",
            "style": "menu",
            "icon_href": "#page_top",
            "menus": [
                {
                    "menu": "Lihat Produk",
                    "menu_href": "#product"
                }, {
                    "id": "instal",
                    "menu": "Instal",
                    "menu_href": "#"
                }
            ]
        },
        {
            "id": "banner",
            "style": "banner",
            "title_first": "Selamat Datang!",
            "title_second": "Finlup Demo",
            "button_action": "Lihat Produk",
            "button_action_href": "#product"
        },
        {
            "id": "product",
            "style": "product",
            "summary": "Pilih produk yang sesuai dengan Anda.",
            "content": "categories",
            "content_id": 0,
        },
        {
            "id": "footer",
            "style": "footer",
            "sosmed": {
                "shopee": "#",
                "tokopedia": "#",
                "youtube": "https://www.youtube.com/channel/UCAeMygdKG097cRSFFAxx2jw",
                "fb": "https://www.facebook.com/finlup/",
                "ig": "https://www.instagram.com/finlup_id/",
                "map": "https://g.page/finlup_id"
            }
        }
    ],
    "wa_setup": {
        "wa": "<no_Wa>",
        "popupMessage": 'Hallo, Ada yang bisa saya bantu?',
        "message": "Saya ingin tanya",
    }
}