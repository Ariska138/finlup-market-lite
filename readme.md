# Finlup Market Lite

Helping your offline based selling business online. of records and product catalogs.

## Setup

Create file in folder public with name `init-page.js`, with example like this:

```
var configPage = {
    "title": "Finlup Demo",
    "desc": "Demo Landing page sales..",
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
```

if you want to upgrade, dot forget to backup your icon and image banner.

- /assets/img.logos/iconweb.jpg
- /build/img/header-bg.jpg

## Technology

- Firebase Auth
- Firebase Storage
- Firebase Hosting
- Firestore
- Database Realtime
- JQuery
- HTML5
- Javascript

## Features

- Whatsapp
- Responsive on Mobile/Desktop
- List Product
- Record transaction
- Stok

## Example Demo

![Demo Finlup Lite](https://github.com/Ariska138/finlup-lite-market/blob/master/demo-lite.png?raw=true)
![Demo Product](https://github.com/Ariska138/finlup-lite-market/blob/master/products.png?raw=true)
You can try demo at [demo-lite.finlup.id](https://demo-lite.finlup.id)

For Administration can visit [demo-lite.finlup.id/fn-admin](https://demo-lite.finlup.id/fn-admin/)

For user and password, you can contact me at ariska138@gmail.com

## UMKM that have implemented

- [etikabunga.com](https://etikabunga.com)
- [solokurma.com](https://solokurma.com)
- [toko.sarikurma.id](https://toko.sarikurma.id)

## Source Code

- https://github.com/Ariska138/finlup-lite-market
