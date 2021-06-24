# Finlup Market Lite

Helping your offline based selling business online. of records and product catalogs.
![Demo Finlup Lite](https://github.com/Ariska138/finlup-lite-market/blob/master/demo-lite.png?raw=true)
![Demo Product](https://github.com/Ariska138/finlup-lite-market/blob/master/products.png?raw=true)

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

![Demo Admin](https://github.com/Ariska138/finlup-lite-market/blob/master/admin.png?raw=true)
You can try demo administration with visit [demo-lite.finlup.id/fn-admin](https://demo-lite.finlup.id/fn-admin/)

For user and password, you can contact me at ariska138@gmail.com

## Requiredment

- Nodejs
- Browser Chrome lastest

## Setup

- Make a project Firebase
- Set Enable feature Database Realtime, Firestorage, and Storage
- Insert new user with email and copy uid
- Download this project and Extract
- Create file in folder public with name `init-page.js`, with example like this:

```
/**
 *
 */

var configPage = {
    "seo": {
        "title": "Finlup Demo",
        "description": "Demo Landing page sales..",
    },
    "multiple_title": [
        "Finlup Demo",
        "Silakan Coba",
        "Ini hanya contoh"
    ],
    "categories": [
        {
            "ns": "products",
            "name": "Produk",
            "summery": "Pilih produk yang sesuai dengan Anda.",
            "description": "Anda dapat pilih produk yang sesuai buat Anda"
        },
        {
            "ns": "other",
            "name": "Lain-lain",
            "summery": "Pilih produk yang sesuai dengan Anda.",
            "description": "Kami juga menyediakan lain-lainnya"
        }
    ],
    "uid": "<uid>",
    "wa_setup": {
        "wa": "6285155223600",
        "popupMessage": 'Hallo, Ada yang bisa saya bantu?',
        "message": "Saya ingin tanya",
    },
    "profile": {
        "logo": "assets/img/logos/iconweb.png",
        "name_company": "Finlup Demo",
        "address_1": "Ngrowo, Pilangsari",
        "address_2": "Sragen"
    },
    "layouts": [
        {
            "id": "icon",
            "style": "menu",
            "icon_href": "#page_top",
            "menus": [
                {
                    "menu": "Lihat Produk",
                    "menu_href": "#product"
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
        }
        , {
            "id": "services",
            "style": "services",
            "contents": [
                {
                    "image_href": "./assets/img/Services/grass.jpg",
                    "target_to": "#ternak",
                    "idx_categories": 0
                }, {
                    "image_href": "./assets/img/Services/other.jpg",
                    "target_to": "#other",
                    "idx_categories": 1
                }

            ]
        },
        {
            "id": "product",
            "style": "product",
            "content": "categories",
            "content_id": 0,
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

- Move files in folder "format rules" on Root
- Paste code UID on file `init-page.js`, `firestore.rules`, `storage.rules`, and `database.rules.json`.
- Setup project become firebase project
  - 'npm install -g firebase-tools'
  - 'firebase login'
  - 'firebase init'
- Test 'firebase serve'
- Deploy on firebase
  - 'firebase deploy'

## Modify

if you want to upgrade, dot forget to backup your icon and image banner.

- /assets/
- /favicon.ico [tools generator](https://favicon.io/favicon-converter/)
- init-page.js

## UMKM that have implemented

- [etikabunga.com](https://etikabunga.com)
- [solokurma.com](https://solokurma.com)
- [toko.sarikurma.id](https://toko.sarikurma.id)
- [khair-nursery.web.app](https://khair-nursery.web.app)
- Dll

## Source Code

- https://github.com/Ariska138/finlup-market-lite

## Donation

- [:coffee: Coffee](https://finlup.id/payment/coffee)
- [:pizza: Pizza](https://finlup.id/payment/pizza)
