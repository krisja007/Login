<template>
  <v-container>
    <h1>Shop Page</h1>
    <v-spacer></v-spacer>

    <v-container class="d-flex flex-wrap">
      <v-card
        class="mx-auto mb-5"
        max-width="344"
        v-for="(product, index) in productList"
        :key="index"
      >
        <v-img :src="product.image" height="200px"></v-img>

        <v-card-title> {{ product.id }}.{{ product.title }} </v-card-title>

        <v-card-subtitle
          >{{ product.price }} $ <v-spacer></v-spacer>
          <v-rating
            :value="product.rating.rate"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
          <div class="grey--text ms-4">{{ product.rating.count }}</div>
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="green accent-2"
            text
            :to="{
              name: 'detail',
              params: { id: product.id, description: product.description },
            }"
          >
            รายละเอียด
          </v-btn>
          <div>
            <button class="btn btn-success" @click="addCart(product, item)">
              ตะกร้า
            </button>
          </div>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text> category : {{ product.category }} </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      <v-container>
        <v-card>
          <div class="container col-md-12" v-if="carts != 0">
            <h4>สินค้า</h4>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ไอดี</th>
                  <th scope="col">ภาพสินค้า</th>
                  <th scope="col">ชื่อ</th>
                  <th scope="col">ราคา</th>
                  <th scope="col">จำนวน</th>
                  <th scope="col">ยอดรวม</th>
                  <th scope="col">ลบ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in carts" :key="index">
                  <td>{{ item.id }}</td>
                  <td><img :src="item.image" height="50px" width="50px" /></td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.price }}</td>
                  <td>
                    <i class="fa fa-plus qty-plus" @click="plusqty(item)"></i>
                    {{ item.qty }}
                    <i
                      class="fa fa-minus qty-minus"
                      @click="minusqty(item)"
                    ></i>
                  </td>
                  <td>{{ item.total }}</td>
                  <td>
                    <button @click="removeproduct(item)" class="btn-Success">
                      <i class="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <v-card-footer>
              <center>
                <h3>PAY : {{ total() }} $</h3>
              </center>
            </v-card-footer>
          </div>
        </v-card>
      </v-container>
      <v-container grid-list-xs class="green accent-2">
        <router-view :key="$route.path"></router-view>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import { db } from "../plugins/firebase";
export default {
  data() {
    return {
      carts: [],
      aa1: 0,
      bb2: 0,
      cc3: 0,
      dd4: 0,
      ee5: 0,
      ff6: 0,
      gg7: 0,
      hh8: 0,
      ii9: 0,
      jj10: 0,
      kk11: 0,
      ll12: 0,
      mm13: 0,
      nn14: 0,
      oo15: 0,
      pp16: 0,
      qq17: 0,
      rr18: 0,
      ss19: 0,
      tt20: 0,
      uu21: 0,
      show: false,
      productList: [
        {
          id: 1,
          title: "Notebook Lennovo3i",
          price: 110,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "Note book",
          image:
            "https://m.2beshop.com/images/products/Lenovo%20V14%20ADA%20Notebook.jpg",

          rating: {
            rate: 3.9,
            count: 120,
          },
          active: false,
        },

        {
          id: 2,
          title: " MSI GE76 Raider",
          price: 23,
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          category: "Note book",
          image:
            "https://www.beartai.com/wp-content/uploads/2021/07/11-01-bg.jpg",

          rating: {
            rate: 4.1,
            count: 259,
          },
          active: false,
        },

        {
          id: 3,
          title: "จักรยาน ครูบาเฮง",
          price: 56,
          description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
          category: "จักรยาน",
          image:
            "https://proreview.co/wp-content/uploads/2020/01/LULAE-V8-electric-bike.jpg",

          rating: {
            rate: 4.7,
            count: 500,
          },
          active: false,
        },

        {
          id: 4,
          title: "Mens Casual Slim Fit",
          price: 16,
          description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",

          rating: {
            rate: 2.1,
            count: 430,
          },
          active: false,
        },

        {
          id: 5,
          title: "Keyboard gaming nubwo NK-31",
          price: 695,
          description:
            "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
          category: "Key board",
          image:
            "https://www.nubwo.co.th/wp-content/uploads/2020/09/NK-31-SUPERBLACK_WEB-12.jpg",

          rating: {
            rate: 4.6,
            count: 400,
          },
          active: false,
        },

        {
          id: 6,
          title: "1 TB SSD SATA WD GREEN (WDS100T3G0A) ",
          price: 168,
          description:
            "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
          category: "Hardware",
          image:
            "https://img.advice.co.th/images_nas/pic_product4/A0141068/A0141068OK_BIG_3.jpg",

          rating: {
            rate: 3.9,
            count: 70,
          },
          active: false,
        },

        {
          id: 7,
          title:
            "WD SSD 1TB M.2 PCIe/NVMe R7000MB/s W5300MB/s 5 Year (SN850 NVMe)",
          price: 10,
          description:
            "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
          category: "Hardware",
          image:
            "https://media-cdn.bnn.in.th/51672/WD-SSD-M.2-SN850-1TB-PCIe-NVMe-R7000MB-W5300MBs-2-square_medium.jpg",

          rating: {
            rate: 3,
            count: 400,
          },
          active: false,
        },

        {
          id: 8,
          title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
          price: 11,
          description:
            "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
          category: "jewelery",
          image:
            "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",

          rating: {
            rate: 1.9,
            count: 100,
          },
          active: false,
        },

        {
          id: 9,
          title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
          price: 64,
          description:
            "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
          category: "electronics",
          image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",

          rating: {
            rate: 3.3,
            count: 203,
          },
          active: false,
        },

        {
          id: 10,
          title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
          price: 109,
          description:
            "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
          category: "Hardware",
          image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",

          rating: {
            rate: 2.9,
            count: 470,
          },
          active: false,
        },

        {
          id: 11,
          title:
            "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
          price: 109,
          description:
            "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
          category: "Hardware",
          image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",

          rating: {
            rate: 4.8,
            count: 319,
          },
          active: false,
        },

        {
          id: 12,
          title:
            "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
          price: 114,
          description:
            "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
          category: "Hardware",
          image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",

          rating: {
            rate: 4.8,
            count: 400,
          },
          active: false,
        },

        {
          id: 13,
          title:
            "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
          price: 599,
          description:
            "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
          category: "Monitor",
          image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",

          rating: {
            rate: 2.9,
            count: 250,
          },
          active: false,
        },

        {
          id: 14,
          title:
            "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
          price: 1000,
          description:
            "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
          category: "Monitor",
          image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",

          rating: {
            rate: 2.2,
            count: 140,
          },
          active: false,
        },

        {
          id: 15,
          title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
          price: 57,
          description:
            "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
          category: "women's clothing",
          image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",

          rating: {
            rate: 2.6,
            count: 235,
          },
          active: false,
        },

        {
          id: 16,
          title:
            "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
          price: 30,
          description:
            "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
          category: "women's clothing",
          image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",

          rating: {
            rate: 2.9,
            count: 340,
          },
          active: false,
        },

        {
          id: 17,
          title: "Play station 5 Pro",
          price: 40,
          description:
            "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
          category: "console",
          image:
            "https://s.isanook.com/ga/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2dhLzAvdWQvMjEzLzEwNjUwNDEvcHM1LTMuanBn.jpg",

          rating: {
            rate: 3.8,
            count: 679,
          },
          active: false,
        },

        {
          id: 18,
          title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
          price: 10,
          description:
            "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
          category: "women's clothing",
          image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",

          rating: {
            rate: 4.7,
            count: 130,
          },
          active: false,
        },

        {
          id: 19,
          title:
            "Razer Adds Third-Party Chroma Support For Better Backlighting",
          price: 8,
          description:
            "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
          category: "Key board",
          image:
            "data:image/jpeg;base64,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",

          rating: {
            rate: 4.5,
            count: 146,
          },
          active: false,
        },

        {
          id: 20,
          title: "DANVOUY Womens T Shirt Casual Cotton Short",
          price: 13,
          description:
            "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
          category: "women's clothing",
          image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",

          rating: {
            rate: 3.6,
            count: 145,
          },
          active: false,
        },
        {
          id: 21,
          title: "joystick ps5",
          price: 11,
          description: "It's a random box and you have to rely on your luck.",
          category: "joystick",
          image:
            "https://images.hdqwalls.com/wallpapers/playstation-5-dual-sense-wireless-controller-ol.jpg",

          rating: {
            rate: 2.1,
            count: 99,
          },
          active: false,
        },
      ],
    };
  },

  methods: {
    async addCart(product) {
      try {
        const docRef = await addDoc(collection(db, "Product"), {
          Name: product.id,
          title: product.title,
          price: product.price,
          description: product.description,
          category: product.category,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      if (product.id == 1) {
        this.aa1 += 1;
        if (this.aa1 <= 1) {
          this.pushdata(product);
        } else {
          var aaa = this.findindex(product);
          this.carts[aaa].qty += 1;
          this.carts[aaa].total = this.carts[aaa].qty * this.carts[aaa].price;
        }
      }
      if (product.id == 2) {
        this.bb2 += 1;
        if (this.bb2 <= 1) {
          this.pushdata(product);
        } else {
          var bbb = this.findindex(product);
          this.carts[bbb].qty += 1;
          this.carts[bbb].total = this.carts[bbb].qty * this.carts[bbb].price;
        }
      }
      if (product.id == 3) {
        this.cc3 += 1;
        if (this.cc3 <= 1) {
          this.pushdata(product);
        } else {
          var ccc = this.findindex(product);
          this.carts[ccc].qty += 1;
          this.carts[ccc].total = this.carts[ccc].qty * this.carts[ccc].price;
        }
      }
      if (product.id == 4) {
        this.dd4 += 1;
        if (this.dd4 <= 1) {
          this.pushdata(product);
        } else {
          var ddd = this.findindex(product);
          this.carts[ddd].qty += 1;
          this.carts[ddd].total = this.carts[ddd].qty * this.carts[ddd].price;
        }
      }
      if (product.id == 5) {
        this.ee5 += 1;
        if (this.ee5 <= 1) {
          this.pushdata(product);
        } else {
          var eee = this.findindex(product);
          this.carts[eee].qty += 1;
          this.carts[eee].total = this.carts[eee].qty * this.carts[eee].price;
        }
      }
      if (product.id == 6) {
        this.ff6 += 1;
        if (this.ff6 <= 1) {
          this.pushdata(product);
        } else {
          var fff = this.findindex(product);
          this.carts[fff].qty += 1;
          this.carts[fff].total = this.carts[fff].qty * this.carts[fff].price;
        }
      }
      if (product.id == 7) {
        this.gg7 += 1;
        if (this.gg7 <= 1) {
          this.pushdata(product);
        } else {
          var ggg = this.findindex(product);
          this.carts[ggg].qty += 1;
          this.carts[ggg].total = this.carts[ggg].qty * this.carts[ggg].price;
        }
      }
      if (product.id == 8) {
        this.hh8 += 1;
        if (this.hh8 <= 1) {
          this.pushdata(product);
        } else {
          var hhh = this.findindex(product);
          this.carts[hhh].qty += 1;
          this.carts[hhh].total = this.carts[hhh].qty * this.carts[hhh].price;
        }
      }
      if (product.id == 9) {
        this.ii9 += 1;
        if (this.ii9 <= 1) {
          this.pushdata(product);
        } else {
          var iii = this.findindex(product);
          this.carts[iii].qty += 1;
          this.carts[iii].total = this.carts[iii].qty * this.carts[iii].price;
        }
      }
      if (product.id == 10) {
        this.jj10 += 1;
        if (this.jj10 <= 1) {
          this.pushdata(product);
        } else {
          var jjj = this.findindex(product);
          this.carts[jjj].qty += 1;
          this.carts[jjj].total = this.carts[jjj].qty * this.carts[jjj].price;
        }
      }
      if (product.id == 11) {
        this.kk11 += 1;
        if (this.kk11 <= 1) {
          this.pushdata(product);
        } else {
          var kkk = this.findindex(product);
          this.carts[kkk].qty += 1;
          this.carts[kkk].total = this.carts[kkk].qty * this.carts[kkk].price;
        }
      }
      if (product.id == 12) {
        this.ll12 += 1;
        if (this.ll12 <= 1) {
          this.pushdata(product);
        } else {
          var lll = this.findindex(product);
          this.carts[lll].qty += 1;
          this.carts[lll].total = this.carts[lll].qty * this.carts[lll].price;
        }
      }
      if (product.id == 13) {
        this.mm13 += 1;
        if (this.mm13 <= 1) {
          this.pushdata(product);
        } else {
          var mmm = this.findindex(product);
          this.carts[mmm].qty += 1;
          this.carts[mmm].total = this.carts[mmm].qty * this.carts[mmm].price;
        }
      }
      if (product.id == 14) {
        this.nn14 += 1;
        if (this.nn14 <= 1) {
          this.pushdata(product);
        } else {
          var nnn = this.findindex(product);
          this.carts[nnn].qty += 1;
          this.carts[nnn].total = this.carts[nnn].qty * this.carts[nnn].price;
        }
      }
      if (product.id == 15) {
        this.oo15 += 1;
        if (this.oo15 <= 1) {
          this.pushdata(product);
        } else {
          var ooo = this.findindex(product);
          this.carts[ooo].qty += 1;
          this.carts[ooo].total = this.carts[ooo].qty * this.carts[ooo].price;
        }
      }
      if (product.id == 16) {
        this.pp16 += 1;
        if (this.pp16 <= 1) {
          this.pushdata(product);
        } else {
          var ppp = this.findindex(product);
          this.carts[ppp].qty += 1;
          this.carts[ppp].total = this.carts[ppp].qty * this.carts[ppp].price;
        }
      }
      if (product.id == 17) {
        this.qq17 += 1;
        if (this.qq17 <= 1) {
          this.pushdata(product);
        } else {
          var qqq = this.findindex(product);
          this.carts[qqq].qty += 1;
          this.carts[qqq].total = this.carts[qqq].qty * this.carts[qqq].price;
        }
      }
      if (product.id == 18) {
        this.rr18 += 1;
        if (this.rr18 <= 1) {
          this.pushdata(product);
        } else {
          var rrr = this.findindex(product);
          this.carts[rrr].qty += 1;
          this.carts[rrr].total = this.carts[rrr].qty * this.carts[rrr].price;
        }
      }
      if (product.id == 19) {
        this.ss19 += 1;
        if (this.ss19 <= 1) {
          this.pushdata(product);
        } else {
          var sss = this.findindex(product);
          this.carts[sss].qty += 1;
          this.carts[sss].total = this.carts[sss].qty * this.carts[sss].price;
        }
      }
      if (product.id == 20) {
        this.tt20 += 1;
        if (this.tt20 <= 1) {
          this.pushdata(product);
        } else {
          var ttt = this.findindex(product);
          this.carts[ttt].qty += 1;
          this.carts[ttt].total = this.carts[ttt].qty * this.carts[ttt].price;
        }
      }
      if (product.id == 21) {
        this.uu21 += 1;
        if (this.uu21 <= 1) {
          this.pushdata(product);
        } else {
          var uuu = this.findindex(product);
          this.carts[uuu].qty += 1;
          this.carts[uuu].total = this.carts[uuu].qty * this.carts[uuu].price;
        }
      }
    },
    pushdata(product) {
      this.carts.push({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
        qty: 1,
        total: product.price,
      });
    },
    findindex: function (product) {
      for (var i = 0; i < this.carts.length; i++) {
        if (this.carts[i].id == product.id) {
          return i;
        }
      }
      return -1;
    },
    minusqty: function (item) {
      item.qty -= 1;
      if (item.qty <= 1) {
        item.qty = 1;
      }
      item.total = item.price * item.qty;
    },
    plusqty: function (item) {
      item.qty += 1;
      item.total = item.price * item.qty;
    },
    removeproduct(item) {
      if (confirm("You want to Delete ??")) {
        var index = this.carts.indexOf(item);
        this.carts.splice(index, 1);
        if (item.id == 1) {
          this.aa1 = 0;
        }
        if (item.id == 2) {
          this.bb2 = 0;
        }
        if (item.id == 3) {
          this.cc3 = 0;
        }
        if (item.id == 4) {
          this.dd4 = 0;
        }
        if (item.id == 5) {
          this.ee5 = 0;
        }
        if (item.id == 6) {
          this.ff6 = 0;
        }
        if (item.id == 7) {
          this.gg7 = 0;
        }
        if (item.id == 8) {
          this.hh8 = 0;
        }
        if (item.id == 9) {
          this.ii9 = 0;
        }
        if (item.id == 10) {
          this.jj10 = 0;
        }
        if (item.id == 11) {
          this.kk11 = 0;
        }
        if (item.id == 12) {
          this.ll12 = 0;
        }
        if (item.id == 13) {
          this.mm13 = 0;
        }
        if (item.id == 14) {
          this.nn14 = 0;
        }
        if (item.id == 15) {
          this.oo15 = 0;
        }
        if (item.id == 16) {
          this.pp16 = 0;
        }
        if (item.id == 17) {
          this.qq17 = 0;
        }
        if (item.id == 18) {
          this.rr18 = 0;
        }
        if (item.id == 19) {
          this.ss19 = 0;
        }
        if (item.id == 20) {
          this.tt20 = 0;
        }
        if (item.id == 21) {
          this.uu21 = 0;
        }
      }
    },
    total: function () {
      var sum = 0;
      this.carts.forEach(function (product) {
        sum += product.total;
      });
      return sum;
    },
  },
};
</script>

<style scoped>
.qty-minus {
  cursor: pointer;
  margin-right: 20px;
}
.qty-plus {
  cursor: pointer;
  margin-right: 20px;
}
</style>
